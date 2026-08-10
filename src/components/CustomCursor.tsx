import { useEffect } from 'react';

export function CustomCursor() {
  useEffect(() => {
    document.body.classList.add('rdr-cursor');

    return () => {
      document.body.classList.remove('rdr-cursor');
    };
  }, []);

  return null;
}
