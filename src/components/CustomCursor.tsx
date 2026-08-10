import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target as HTMLElement;

      setIsPointer(
        !!target.closest(
          'a, button, [role="button"], input[type="submit"], input[type="button"]'
        )
      );
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <img
      src={
        isPointer
          ? '/cursor/RDR2 Gun.png'
          : '/cursor/RDR2 Arthur.png'
      }
      alt=""
      aria-hidden="true"
      className={`custom-cursor ${isPointer ? 'custom-cursor-gun' : ''}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}