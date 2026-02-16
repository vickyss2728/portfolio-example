import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

const StarField = (props: any) => {
  const ref = useRef<any>(null);
  // Generate 5000 random points inside a sphere
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((_, delta) => {
    // Rotate the entire group of stars slightly every frame
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00aaff" // Bright blue stars
          size={0.002}    // Size of each star
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed-top w-100 h-100" style={{ zIndex: -1, background: '#050816' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;