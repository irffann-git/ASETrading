// hero.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Link } from "react-router-dom";
import { ArrowRight, Info, Award, Users, Briefcase, Clock } from "lucide-react";

/**
 * Requires: `npm install three`
 */
const Hero = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const companyLabelRef = useRef(null);

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
    globeGroup.position.set(3.2, 0, 0);
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
      // Company location: Dammam, Saudi Arabia
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

    // ---- Normal location points ----
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
      color: 0xff2828,
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
      color: 0xff1010,
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

    // ---- Country-to-country connections ----
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

      const mainColor = isDammamRoute ? 0xff4c4c : 0x21bff5;
      const glowColor = isDammamRoute ? 0xff2222 : 0x7de9ff;

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
        color: isDammamRoute ? 0xff2020 : 0x16cfff,
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

    // Standard blue global connections
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

    // Red connections from Dammam
    createConnection(locations.dammam, locations.dubai, 1.7, 0.18, { isDammamRoute: true });
    createConnection(locations.dammam, locations.delhi, 2.7, 0.14, { isDammamRoute: true });
    createConnection(locations.dammam, locations.london, 3.5, 0.12, { isDammamRoute: true });
    createConnection(locations.dammam, locations.nairobi, 2.5, 0.15, { isDammamRoute: true });
    createConnection(locations.dammam, locations.singapore, 4, 0.11, { isDammamRoute: true });

    // ---- Click, hold and drag ----
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

    // ---- Perfect square responsive layout ----
    function updateSquareViewport() {
      const windowWidth = Math.max(window.innerWidth, 1);
      const windowHeight = Math.max(window.innerHeight, 1);

      let squareSize;

      if (windowWidth <= 620) {
        squareSize = Math.min(windowWidth * 1.15, windowHeight * 0.85);
        viewport.style.right = "-6%";
        viewport.style.top = "67%";
        globeGroup.position.set(1.7, 0, 0);
        globeGroup.scale.setScalar(0.92);
      } else if (windowWidth <= 980) {
        squareSize = Math.min(windowWidth * 0.98, windowHeight * 0.98);
        viewport.style.right = "-2%";
        viewport.style.top = "62%";
        globeGroup.position.set(2.2, 0, 0);
        globeGroup.scale.setScalar(0.96);
      } else {
        squareSize = Math.min(windowHeight * 1.15, windowWidth * 0.7);
        viewport.style.right = "4%";
        viewport.style.top = "49%";
        globeGroup.position.set(3.2, 0, 0);
        globeGroup.scale.setScalar(1);
      }

      viewport.style.width = `${squareSize}px`;
      viewport.style.height = `${squareSize}px`;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(squareSize, squareSize, false);
      renderer.domElement.style.width = `${squareSize}px`;
      renderer.domElement.style.height = `${squareSize}px`;

      camera.aspect = 1;
      camera.updateProjectionMatrix();
    }

    updateSquareViewport();
    window.addEventListener("resize", updateSquareViewport);

    // ---- Floating company label tracking ----
    // NOTE: viewport/label are `absolute` inside `container` (not `fixed` to
    // the browser), so positions are computed relative to the container's
    // bounding box rather than the raw viewport.
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
      const containerRect = container.getBoundingClientRect();

      const localX = (projectedMarker.x * 0.5 + 0.5) * viewportRect.width;
      const localY = (-projectedMarker.y * 0.5 + 0.5) * viewportRect.height;

      const screenX = viewportRect.left - containerRect.left + localX;
      const screenY = viewportRect.top - containerRect.top + localY;

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

      window.removeEventListener("resize", updateSquareViewport);
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-[radial-gradient(circle_at_82%_48%,rgba(0,100,170,0.18),transparent_34%),linear-gradient(135deg,#02050d_0%,#030914_55%,#06111f_100%)]"
    >
      {/* Animated 3D globe (replaces the old hero.png background) */}
      <div
        ref={viewportRef}
        className="absolute top-1/2 right-0 -translate-y-1/2 z-[1] touch-none"
      />

      {/* Floating company label that tracks the red Dammam marker */}
      <div
        ref={companyLabelRef}
        className="absolute top-0 left-0 z-[18] max-w-[310px] text-center whitespace-nowrap opacity-0 invisible pointer-events-none transition-opacity duration-200"
        style={{ transform: "translate(-50%, calc(-100% - 27px))" }}
      >
        <span
          className="block text-white text-[13px] font-bold leading-snug"
          style={{
            textShadow:
              "0 2px 4px rgba(0,0,0,1), 0 0 8px rgba(0,0,0,1), 0 0 16px rgba(0,0,0,0.95), 0 0 10px rgba(255,40,40,0.32)",
          }}
        >
          Ahmed Ali Al-Saihati General Contracting Est.
        </span>
        <span className="block mt-[3px] text-[#ff7777] text-[11px] font-semibold">
          Dammam, Kingdom of Saudi Arabia
        </span>
        <span
          className="absolute left-1/2 top-full -translate-x-1/2 mt-[5px] w-px h-[18px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,45,45,0.2))",
            boxShadow: "0 0 6px rgba(255,255,255,0.25)",
          }}
        />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#020B1D]/25 pointer-events-none" />

      {/* Content – flex column to push stats to bottom.
          pointer-events-none here lets mouse/touch drags reach the globe
          through any empty space; pointer-events-auto is re-enabled on the
          two children below so text links and the stats bar stay clickable. */}
      <div className="relative z-10 flex flex-col justify-between h-full max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 pt-12 md:pt-16 pb-6 md:pb-8 pointer-events-none">
        {/* Top text area */}
        <div className="max-w-xl pt-8 md:pt-30 pointer-events-auto">
          <p className="text-[#00CFFF] tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-4">
            System Integration & IT Infrastructure
          </p>

          <h1 className="text-white font-bold text-3xl md:text-6xl mb-2 tracking-wide">
            Building Intelligent{" "}
            <span className="text-[#0D4EA7]">Infrastructure</span> for a
            Connected Future
          </h1>

          <p className="text-[#B8C4D9] text-sm md:text-base mb-8 max-w-md">
            ASE delivers end-to-end IT solutions that empower businesses to
            innovate, transform and grow in the digital era.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/solutions"
              className="flex items-center gap-2 bg-[#0D4EA7] hover:bg-[#2E7BFF] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
            >
              Explore Solutions
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="flex items-center gap-2 border border-[#DCE6F2]/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#DCE6F2]/60">
                <Info size={12} />
              </span>
              Our Expertise
            </Link>
          </div>
        </div>

        {/* Stats bar – bottom */}
        <div className="mt-9 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-5 md:p- rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 pointer-events-auto">
          <div className="flex items-center gap-3">
            <Award className="text-[#00CFFF] w-6 h-6 md:w-7 md:h-7" />
            <div>
              <div className="text-white font-bold text-xl md:text-2xl">20+</div>
              <div className="text-[#DCE6F2] text-xs md:text-sm">Years of Excellence</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="text-[#00CFFF] w-6 h-6 md:w-7 md:h-7" />
            <div>
              <div className="text-white font-bold text-xl md:text-2xl">500+</div>
              <div className="text-[#DCE6F2] text-xs md:text-sm">Enterprise Clients</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Briefcase className="text-[#00CFFF] w-6 h-6 md:w-7 md:h-7" />
            <div>
              <div className="text-white font-bold text-xl md:text-2xl">1000+</div>
              <div className="text-[#DCE6F2] text-xs md:text-sm">Projects Delivered</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="text-[#00CFFF] w-6 h-6 md:w-7 md:h-7" />
            <div>
              <div className="text-white font-bold text-xl md:text-2xl">24/7</div>
              <div className="text-[#DCE6F2] text-xs md:text-sm">Support & Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;