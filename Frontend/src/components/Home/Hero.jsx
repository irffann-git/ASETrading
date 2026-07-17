// Hero.jsx – Clean, responsive, using plain CSS (no Tailwind)
import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { Link } from "react-router-dom";
import { ArrowRight, Info, Award, Users, Briefcase, Clock } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const companyLabelRef = useRef(null);

  // ─── Particle network ────────────────────────────────────────────
  const netCanvasRef = useRef(null);
  const netAnimationRef = useRef(null);
  const netResizeTimerRef = useRef(null);

  const handleNetResize = useCallback(() => {
    if (netResizeTimerRef.current) return;
    netResizeTimerRef.current = setTimeout(() => {
      const canvas = netCanvasRef.current;
      if (!canvas) return;
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      netResizeTimerRef.current = null;
    }, 100);
  }, []);

  useEffect(() => {
    const canvas = netCanvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    let width = parent.clientWidth;
    let height = parent.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const PARTICLE_COUNT = 190;
    const MAX_DIST = 0;
    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = 1.2 + Math.random() * 0.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#00CFFF";
        ctx.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.update();
        p.draw();
      }
      netAnimationRef.current = requestAnimationFrame(animate);
    };
    animate();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (netAnimationRef.current) {
          cancelAnimationFrame(netAnimationRef.current);
          netAnimationRef.current = null;
        }
      } else {
        if (!netAnimationRef.current) {
          netAnimationRef.current = requestAnimationFrame(animate);
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", handleNetResize);

    return () => {
      window.removeEventListener("resize", handleNetResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (netAnimationRef.current) {
        cancelAnimationFrame(netAnimationRef.current);
        netAnimationRef.current = null;
      }
      if (netResizeTimerRef.current) {
        clearTimeout(netResizeTimerRef.current);
        netResizeTimerRef.current = null;
      }
    };
  }, [handleNetResize]);

  // ─── 3D Globe ──────────────────────────────────────────────────────
  useEffect(() => {
    const container = sectionRef.current;
    const viewport = viewportRef.current;
    const companyLabel = companyLabelRef.current;
    if (!container || !viewport || !companyLabel) return;

    let animationFrameId;
    let isDestroyed = false;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 1000);
    camera.position.set(0, 0, 57);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.display = "block";
    viewport.appendChild(renderer.domElement);

    // ---- Globe group ----
    const globeGroup = new THREE.Group();
    globeGroup.position.set(0, 0, 0);
    globeGroup.scale.setScalar(1);
    globeGroup.rotation.x = THREE.MathUtils.degToRad(1);
    globeGroup.rotation.y = THREE.MathUtils.degToRad(-7);
    scene.add(globeGroup);

    const globeRadius = 15;
    const earthGroup = new THREE.Group();
    globeGroup.add(earthGroup);

    // ---- Textures ----
    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin("anonymous");
    const earthDayTexture = textureLoader.load(
      "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
    );
    const earthNightTexture = textureLoader.load(
      "https://unpkg.com/three-globe@2.45.2/example/img/earth-night.jpg"
    );
    earthDayTexture.colorSpace = THREE.SRGBColorSpace;
    earthNightTexture.colorSpace = THREE.SRGBColorSpace;
    earthDayTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    earthNightTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    // ---- Earth ----
    const earthGeometry = new THREE.SphereGeometry(globeRadius, 128, 128);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthDayTexture,
      color: 0xffffff,
      roughness: 0.54,
      metalness: 0.02,
      emissive: new THREE.Color(0x15394e),
      emissiveMap: earthNightTexture,
      emissiveIntensity: 0.26,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earthGroup.add(earth);

    const blueOverlay = new THREE.Mesh(
      new THREE.SphereGeometry(globeRadius + 0.025, 128, 128),
      new THREE.MeshBasicMaterial({
        color: 0x087ec5,
        transparent: true,
        opacity: 0.04,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    earthGroup.add(blueOverlay);

    // ---- Lighting ----
    const ambientLight = new THREE.AmbientLight(0x8bcff0, 1.08);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xe9faff, 2.05);
    keyLight.position.set(16, 18, 28);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x258ec7, 0.74);
    fillLight.position.set(-18, -5, 17);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x00aaff, 3.2, 100);
    rimLight.position.set(27, 15, 25);
    scene.add(rimLight);

    // ---- Atmosphere ----
    const atmosphereMaterial = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        glowColor: { value: new THREE.Color(0x4fd3ff) },
        coefficient: { value: 0.42 },
        power: { value: 2.4 },
      },
      vertexShader: `
        varying vec3 vertexNormal;
        varying vec3 viewDirection;
        void main() {
          vertexNormal = normalize(normalMatrix * normal);
          vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
          viewDirection = normalize(-viewPosition.xyz);
          gl_Position = projectionMatrix * viewPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        uniform float coefficient;
        uniform float power;
        varying vec3 vertexNormal;
        varying vec3 viewDirection;
        void main() {
          float glow = coefficient - dot(vertexNormal, viewDirection);
          glow = max(glow, 0.0);
          float intensity = pow(glow, power);
          gl_FragColor = vec4(glowColor, intensity);
        }
      `,
    });

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(globeRadius + 0.55, 128, 128),
      atmosphereMaterial
    );
    globeGroup.add(atmosphere);

    const outerGlow = new THREE.Mesh(
      new THREE.SphereGeometry(globeRadius + 0.9, 96, 96),
      new THREE.MeshBasicMaterial({
        color: 0x008ed6,
        transparent: true,
        opacity: 0.04,
        side: THREE.BackSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    globeGroup.add(outerGlow);

    // ---- Locations ----
    const locations = {
      london: { latitude: 51.5074, longitude: -0.1278 },
      newYork: { latitude: 40.7128, longitude: -74.006 },
      losAngeles: { latitude: 34.0522, longitude: -118.2437 },
      saoPaulo: { latitude: -23.5505, longitude: -46.6333 },
      capeTown: { latitude: -33.9249, longitude: 18.4241 },
      nairobi: { latitude: -1.2921, longitude: 36.8219 },
      dubai: { latitude: 25.2048, longitude: 55.2708 },
      delhi: { latitude: 28.6139, longitude: 77.209 },
      singapore: { latitude: 1.3521, longitude: 103.8198 },
      tokyo: { latitude: 35.6762, longitude: 139.6503 },
      sydney: { latitude: -33.8688, longitude: 151.2093 },
      paris: { latitude: 48.8566, longitude: 2.3522 },
      frankfurt: { latitude: 50.1109, longitude: 8.6821 },
      toronto: { latitude: 43.6532, longitude: -79.3832 },
      mexicoCity: { latitude: 19.4326, longitude: -99.1332 },
      hongKong: { latitude: 22.3193, longitude: 114.1694 },
      seoul: { latitude: 37.5665, longitude: 126.978 },
      auckland: { latitude: -36.8509, longitude: 174.7645 },
      dammam: { latitude: 26.4207, longitude: 50.0888 },
    };

    function latLonToVector3(latitude, longitude, radius) {
      const phi = THREE.MathUtils.degToRad(90 - latitude);
      const theta = THREE.MathUtils.degToRad(longitude + 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    // ---- Location points ----
    const animatedHalos = [];
    const disposables = [];

    function createNetworkPoint(location, size = 0.21) {
      const position = latLonToVector3(location.latitude, location.longitude, globeRadius + 0.38);

      const pointGeometry = new THREE.SphereGeometry(size, 18, 18);
      const pointMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.96,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const point = new THREE.Mesh(pointGeometry, pointMaterial);
      point.position.copy(position);
      globeGroup.add(point);
      disposables.push(pointGeometry, pointMaterial);

      const haloGeometry = new THREE.SphereGeometry(size * 3.5, 18, 18);
      const haloMaterial = new THREE.MeshBasicMaterial({
        color: 0x16c9ff,
        transparent: true,
        opacity: 0.13,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const halo = new THREE.Mesh(haloGeometry, haloMaterial);
      halo.position.copy(position);
      halo.userData.speed = 1.05 + Math.random() * 0.85;
      halo.userData.offset = Math.random() * Math.PI * 2;
      halo.userData.baseOpacity = 0.1;
      globeGroup.add(halo);
      disposables.push(haloGeometry, haloMaterial);

      animatedHalos.push(halo);
    }

    Object.entries(locations).forEach(([name, location]) => {
      if (name !== "dammam") {
        createNetworkPoint(location);
      }
    });

    // ---- Red Dammam marker ----
    const dammamLocalPosition = latLonToVector3(
      locations.dammam.latitude,
      locations.dammam.longitude,
      globeRadius + 0.56
    );

    const dammamMarkerGroup = new THREE.Group();
    dammamMarkerGroup.position.copy(dammamLocalPosition);
    globeGroup.add(dammamMarkerGroup);

    const redMarkerGeometry = new THREE.SphereGeometry(0.39, 28, 28);
    const redMarkerMaterial = new THREE.MeshBasicMaterial({
      color: 0x006C35,
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const redMarker = new THREE.Mesh(redMarkerGeometry, redMarkerMaterial);
    dammamMarkerGroup.add(redMarker);
    disposables.push(redMarkerGeometry, redMarkerMaterial);

    const markerCenterGeometry = new THREE.SphereGeometry(0.16, 20, 20);
    const markerCenterMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const markerCenter = new THREE.Mesh(markerCenterGeometry, markerCenterMaterial);
    dammamMarkerGroup.add(markerCenter);
    disposables.push(markerCenterGeometry, markerCenterMaterial);

    const redHaloGeometry = new THREE.SphereGeometry(1.35, 28, 28);
    const redHaloMaterial = new THREE.MeshBasicMaterial({
      color: 0x00FF66,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const redHalo = new THREE.Mesh(redHaloGeometry, redHaloMaterial);
    redHalo.userData.speed = 2.2;
    redHalo.userData.offset = 0;
    redHalo.userData.baseOpacity = 0.16;
    dammamMarkerGroup.add(redHalo);
    disposables.push(redHaloGeometry, redHaloMaterial);

    animatedHalos.push(redHalo);

    // ---- Connections ----
    const movingLights = [];

    function createConnection(startLocation, endLocation, arcHeight = 3.2, speed = 0.12, options = {}) {
      const isDammamRoute = options.isDammamRoute === true;

      const start = latLonToVector3(startLocation.latitude, startLocation.longitude, globeRadius + 0.24);
      const end = latLonToVector3(endLocation.latitude, endLocation.longitude, globeRadius + 0.24);

      const middle = start
        .clone()
        .add(end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(globeRadius + arcHeight);

      const curve = new THREE.QuadraticBezierCurve3(start, middle, end);
      const points = curve.getPoints(110);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const mainColor = isDammamRoute ? 0x004D26 : 0x21BFF5;
      const glowColor = isDammamRoute ? 0x00A651 : 0x7DE9FF;

      const lineMaterial = new THREE.LineBasicMaterial({
        color: mainColor,
        transparent: true,
        opacity: isDammamRoute ? 0.48 : 0.34,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const line = new THREE.Line(geometry, lineMaterial);
      globeGroup.add(line);

      const glowGeometry = geometry.clone();
      const glowLineMaterial = new THREE.LineBasicMaterial({
        color: glowColor,
        transparent: true,
        opacity: isDammamRoute ? 0.19 : 0.12,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const glowLine = new THREE.Line(glowGeometry, glowLineMaterial);
      globeGroup.add(glowLine);
      disposables.push(geometry, lineMaterial, glowGeometry, glowLineMaterial);

      const movingPointGeometry = new THREE.SphereGeometry(0.16, 16, 16);
      const movingPointMaterial = new THREE.MeshBasicMaterial({
        color: isDammamRoute ? 0xfff2f2 : 0xffffff,
        transparent: true,
        opacity: 1,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const movingPoint = new THREE.Mesh(movingPointGeometry, movingPointMaterial);

      const movingGlowGeometry = new THREE.SphereGeometry(0.5, 16, 16);
      const movingGlowMaterial = new THREE.MeshBasicMaterial({
        color: isDammamRoute ? 0xff2020 : 0x006C35,
        transparent: true,
        opacity: 0.23,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const movingGlow = new THREE.Mesh(movingGlowGeometry, movingGlowMaterial);

      globeGroup.add(movingPoint);
      globeGroup.add(movingGlow);
      disposables.push(movingPointGeometry, movingPointMaterial, movingGlowGeometry, movingGlowMaterial);

      movingLights.push({
        curve,
        point: movingPoint,
        glow: movingGlow,
        progress: Math.random(),
        speed,
      });
    }

    // Standard blue connections
    createConnection(locations.london, locations.newYork, 4.4, 0.1);
    createConnection(locations.london, locations.dubai, 3.2, 0.14);
    createConnection(locations.london, locations.delhi, 3.7, 0.12);
    createConnection(locations.frankfurt, locations.singapore, 4.4, 0.11);
    createConnection(locations.paris, locations.nairobi, 3.1, 0.14);
    createConnection(locations.newYork, locations.losAngeles, 2.8, 0.15);
    createConnection(locations.newYork, locations.saoPaulo, 3.6, 0.12);
    createConnection(locations.losAngeles, locations.tokyo, 5.2, 0.08);
    createConnection(locations.tokyo, locations.singapore, 2.8, 0.15);
    createConnection(locations.tokyo, locations.sydney, 3.8, 0.12);
    createConnection(locations.delhi, locations.singapore, 2.8, 0.15);
    createConnection(locations.dubai, locations.capeTown, 3.8, 0.11);
    createConnection(locations.sydney, locations.auckland, 2, 0.17);

    // Red Dammam connections
    createConnection(locations.dammam, locations.dubai, 1.7, 0.18, { isDammamRoute: true });
    createConnection(locations.dammam, locations.delhi, 2.7, 0.14, { isDammamRoute: true });
    createConnection(locations.dammam, locations.london, 3.5, 0.12, { isDammamRoute: true });
    createConnection(locations.dammam, locations.nairobi, 2.5, 0.15, { isDammamRoute: true });
    createConnection(locations.dammam, locations.singapore, 4, 0.11, { isDammamRoute: true });

    // ---- Drag controls ----
    let isDragging = false;
    const previousPointer = { x: 0, y: 0 };
    const rotationVelocity = { x: 0, y: 0 };
    const dragSensitivity = 0.006;

    function handlePointerDown(event) {
      isDragging = true;
      viewport.style.cursor = "grabbing";
      previousPointer.x = event.clientX;
      previousPointer.y = event.clientY;
      rotationVelocity.x = 0;
      rotationVelocity.y = 0;
      viewport.setPointerCapture(event.pointerId);
    }

    function handlePointerMove(event) {
      if (!isDragging) return;
      const deltaX = event.clientX - previousPointer.x;
      const deltaY = event.clientY - previousPointer.y;
      const rotationY = deltaX * dragSensitivity;
      const rotationX = deltaY * dragSensitivity;
      globeGroup.rotation.y += rotationY;
      globeGroup.rotation.x += rotationX;
      globeGroup.rotation.x = THREE.MathUtils.clamp(globeGroup.rotation.x, -1.05, 1.05);
      rotationVelocity.y = rotationY;
      rotationVelocity.x = rotationX;
      previousPointer.x = event.clientX;
      previousPointer.y = event.clientY;
    }

    function stopDragging(event) {
      isDragging = false;
      viewport.style.cursor = "grab";
      if (event.pointerId !== undefined && viewport.hasPointerCapture(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId);
      }
    }

    function handlePointerLeave(event) {
      if (event.buttons === 0) {
        stopDragging(event);
      }
    }

    viewport.style.cursor = "grab";
    viewport.addEventListener("pointerdown", handlePointerDown);
    viewport.addEventListener("pointermove", handlePointerMove);
    viewport.addEventListener("pointerup", stopDragging);
    viewport.addEventListener("pointercancel", stopDragging);
    viewport.addEventListener("pointerleave", handlePointerLeave);

    // ---- Resize observer for consistent globe size ----
    const resizeObserver = new ResizeObserver(() => {
      const rect = viewport.getBoundingClientRect();
      const size = Math.min(rect.width, rect.height);
      if (size < 10) return;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(size, size, false);
      renderer.domElement.style.width = `${size}px`;
      renderer.domElement.style.height = `${size}px`;

      camera.aspect = 1;
      camera.updateProjectionMatrix();

      const isMobile = window.innerWidth < 768;
      const scaleFactor = size / 450;
      // 🔥 INCREASED mobile scale from 1.45 → 2.0 (adjust as needed)
      globeGroup.scale.setScalar(
        scaleFactor * (isMobile ? 2.0 : 1.0)
      );
      const camDist = 57 * (1 + (1 - Math.min(scaleFactor, 1)) * 0.2);
      camera.position.z = camDist;
      camera.lookAt(0, 0, 0);
    });

    resizeObserver.observe(viewport);

    // ---- Floating company label tracking ----
    const markerWorldPosition = new THREE.Vector3();
    const globeWorldPosition = new THREE.Vector3();
    const projectedMarker = new THREE.Vector3();
    const surfaceNormal = new THREE.Vector3();
    const markerToCamera = new THREE.Vector3();

    function updateCompanyLabel() {
      dammamMarkerGroup.getWorldPosition(markerWorldPosition);
      globeGroup.getWorldPosition(globeWorldPosition);

      surfaceNormal.copy(markerWorldPosition).sub(globeWorldPosition).normalize();
      markerToCamera.copy(camera.position).sub(markerWorldPosition).normalize();

      const frontFacing = surfaceNormal.dot(markerToCamera);

      if (frontFacing <= 0.08) {
        companyLabel.style.opacity = "0";
        companyLabel.style.visibility = "hidden";
        return;
      }

      projectedMarker.copy(markerWorldPosition).project(camera);

      const viewportRect = viewport.getBoundingClientRect();
      const sectionRect = container.getBoundingClientRect();

      const localX = (projectedMarker.x * 0.5 + 0.5) * viewportRect.width;
      const localY = (-projectedMarker.y * 0.5 + 0.5) * viewportRect.height;

      const screenX = viewportRect.left - sectionRect.left + localX;
      const screenY = viewportRect.top - sectionRect.top + localY;

      const insideViewport =
        localX > -60 &&
        localX < viewportRect.width + 60 &&
        localY > -60 &&
        localY < viewportRect.height + 60;

      if (!insideViewport) {
        companyLabel.style.opacity = "0";
        companyLabel.style.visibility = "hidden";
        return;
      }

      companyLabel.style.left = `${screenX}px`;
      companyLabel.style.top = `${screenY}px`;
      companyLabel.style.opacity = "1";
      companyLabel.style.visibility = "visible";
    }

    // ---- Animation ----
    const clock = new THREE.Clock();
    let elapsedTime = 0;

    function animate() {
      if (isDestroyed) return;
      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.05);
      elapsedTime += delta;

      if (!isDragging) {
        globeGroup.rotation.y += 0.105 * delta;
        globeGroup.rotation.y += rotationVelocity.y;
        globeGroup.rotation.x += rotationVelocity.x;
        rotationVelocity.y *= 0.94;
        rotationVelocity.x *= 0.94;
        globeGroup.rotation.x = THREE.MathUtils.clamp(globeGroup.rotation.x, -1.05, 1.05);
      }

      for (let i = 0; i < animatedHalos.length; i++) {
        const halo = animatedHalos[i];
        const wave = Math.sin(elapsedTime * halo.userData.speed + halo.userData.offset);
        halo.scale.setScalar(1 + wave * 0.22);
        halo.material.opacity = halo.userData.baseOpacity + (wave + 1) * 0.035;
      }

      for (let i = 0; i < movingLights.length; i++) {
        const light = movingLights[i];
        light.progress += light.speed * delta;
        if (light.progress > 1) light.progress = 0;
        const position = light.curve.getPoint(light.progress);
        light.point.position.copy(position);
        light.glow.position.copy(position);
        light.glow.scale.setScalar(0.86 + Math.sin(elapsedTime * 8 + i) * 0.18);
      }

      updateCompanyLabel();
      renderer.render(scene, camera);
    }

    animate();

    // ---- Cleanup ----
    return () => {
      isDestroyed = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      resizeObserver.disconnect();
      viewport.removeEventListener("pointerdown", handlePointerDown);
      viewport.removeEventListener("pointermove", handlePointerMove);
      viewport.removeEventListener("pointerup", stopDragging);
      viewport.removeEventListener("pointercancel", stopDragging);
      viewport.removeEventListener("pointerleave", handlePointerLeave);

      disposables.forEach((item) => item.dispose && item.dispose());
      earthGeometry.dispose();
      earthMaterial.dispose();
      blueOverlay.geometry.dispose();
      blueOverlay.material.dispose();
      atmosphere.geometry.dispose();
      atmosphereMaterial.dispose();
      outerGlow.geometry.dispose();
      outerGlow.material.dispose();
      earthDayTexture.dispose();
      earthNightTexture.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === viewport) {
        viewport.removeChild(renderer.domElement);
      }
    };
  }, []);

  // ─── Render ──────────────────────────────────────────────────────────
  return (
    <section ref={sectionRef} className="hero-section">
      {/* Particle network background */}
      <div className="hero-particle-bg">
        <canvas ref={netCanvasRef} />
      </div>

      {/* Overlay for readability */}
      <div className="hero-overlay" />

      {/* Main content */}
      <div className="hero-content">
        {/* Left: text + buttons */}
        <div className="hero-text">
          <p className="hero-badge">System Integration & IT Infrastructure</p>

          <h1 className="hero-title">
            Building Intelligent{" "}
            <span className="highlight">Infrastructure</span> for a
            Connected Future
          </h1>

          <p className="hero-description">
            ASE delivers end-to-end IT solutions that empower businesses to
            innovate, transform and grow in the digital era.
          </p>

          <div className="hero-buttons">
            <Link to="/solutions" className="btn-primary">
              Explore Solutions
              <ArrowRight size={18} />
            </Link>

            <Link to="/about" className="btn-secondary">
              <span className="icon-circle">
                <Info size={12} />
              </span>
              Our Expertise
            </Link>
          </div>
        </div>

        {/* Globe container */}
        <div className="hero-globe-container">
          <div ref={viewportRef} className="hero-globe-wrapper" />
        </div>
      </div>

      {/* Stats bar */}
      <div className="hero-stats">
        <div className="hero-stats-grid">
          <div className="hero-stat-item">
            <Award className="hero-stat-icon" />
            <div>
              <div className="hero-stat-value">20+</div>
              <div className="hero-stat-label">Years of Excellence</div>
            </div>
          </div>

          <div className="hero-stat-item">
            <Users className="hero-stat-icon" />
            <div>
              <div className="hero-stat-value">500+</div>
              <div className="hero-stat-label">Enterprise Clients</div>
            </div>
          </div>

          <div className="hero-stat-item">
            <Briefcase className="hero-stat-icon" />
            <div>
              <div className="hero-stat-value">1000+</div>
              <div className="hero-stat-label">Projects Delivered</div>
            </div>
          </div>

          <div className="hero-stat-item">
            <Clock className="hero-stat-icon" />
            <div>
              <div className="hero-stat-value">24/7</div>
              <div className="hero-stat-label">Support & Services</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating company label – tracks red Dammam marker */}
      <div
        ref={companyLabelRef}
        className="hero-company-label"
        style={{ transform: "translate(-50%, calc(-100% - 27px))" }}
      >
        <span className="label-title">
          Ahmed Ali Al-Saihati General Contracting Est.
        </span>
        <span className="label-sub">
          Dammam, Kingdom of Saudi Arabia
        </span>
        <span className="label-line" />
      </div>
    </section>
  );
};

export default Hero;