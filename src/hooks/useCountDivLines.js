import { useEffect, useState } from 'react';

export default function useCountDivLines(ref) {
  const [numberOfLines, setNumberOfLines] = useState(0);

  useEffect(() => {
    if (!ref || !ref.current) return;
    const countLinesInDiv = () => {
      const div = ref.current;
      if (div) {
        const lineHeight = parseInt(window.getComputedStyle(div).lineHeight);
        const divHeight = div.clientHeight;
        const lines = Math.ceil(divHeight / lineHeight);
        setNumberOfLines(lines);
      }
    };

    countLinesInDiv();

    window.addEventListener('resize', countLinesInDiv);

    return () => {
      window.removeEventListener('resize', countLinesInDiv);
    };
  }, []);

  return numberOfLines;
}
