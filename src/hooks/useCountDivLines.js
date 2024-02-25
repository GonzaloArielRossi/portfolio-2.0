import { useEffect, useState } from 'react';

export default function useCountDivLines(divId) {
  const [numberOfLines, setNumberOfLines] = useState(0);

  useEffect(() => {
    const countLinesInDiv = () => {
      const div = document.getElementById(divId);
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
