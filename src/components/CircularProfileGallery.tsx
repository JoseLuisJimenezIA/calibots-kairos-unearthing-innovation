import React, { useRef, useEffect, useCallback, useState } from 'react';
import ProfileCard from './ProfileCard';
import './CircularProfileGallery.css';

export interface GalleryMember {
  name: string;
  role: string;
  avatarUrl?: string;
  isCoach?: boolean;
}

interface CircularProfileGalleryProps {
  items: GalleryMember[];
  autoRotateSpeed?: number;
  radius?: number;
  className?: string;
}

const useResponsiveRadius = (baseRadius: number) => {
  const [radius, setRadius] = useState(baseRadius);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setRadius(Math.min(baseRadius, 160));
      else if (w < 768) setRadius(Math.min(baseRadius, 220));
      else if (w < 1024) setRadius(Math.min(baseRadius, 320));
      else setRadius(baseRadius);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [baseRadius]);

  return radius;
};

const CircularProfileGallery: React.FC<CircularProfileGalleryProps> = ({
  items,
  autoRotateSpeed = 0.15,
  radius: baseRadius = 450,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotatorRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);

  const radius = useResponsiveRadius(baseRadius);
  const itemCount = items.length;
  const angleStep = 360 / itemCount;

  const applyTransform = useCallback(() => {
    if (!rotatorRef.current) return;
    rotatorRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!pausedRef.current && !draggingRef.current) {
        angleRef.current += autoRotateSpeed;
      }
      if (!draggingRef.current && Math.abs(velocityRef.current) > 0.01) {
        angleRef.current += velocityRef.current;
        velocityRef.current *= 0.95;
      } else if (!draggingRef.current) {
        velocityRef.current = 0;
      }
      applyTransform();
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [autoRotateSpeed, applyTransform]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    draggingRef.current = true;
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    const speed = dx * 0.3;
    angleRef.current += speed;
    velocityRef.current = speed;
    lastXRef.current = e.clientX;
  }, []);

  const handlePointerUp = useCallback(() => {
    draggingRef.current = false;
  }, []);

  const handleMouseEnter = useCallback(() => {
    pausedRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    pausedRef.current = false;
    draggingRef.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className={`cpg-container ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={rotatorRef} className="cpg-rotator">
        {items.map((member, i) => {
          const angle = i * angleStep;
          return (
            <div
              key={member.name}
              className="cpg-item"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
              }}
            >
              <ProfileCard
                name={member.name}
                title={member.role}
                isCoach={member.isCoach}
                avatarUrl={member.avatarUrl || ''}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowColor={
                  member.isCoach
                    ? 'hsla(8, 70%, 52%, 0.4)'
                    : 'hsla(40, 76%, 50%, 0.4)'
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularProfileGallery;
