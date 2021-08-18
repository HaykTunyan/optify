import { useEffect, useRef, useState } from 'react';
import { THEME } from 'common';
import { common } from 'utils';
const {
  medias: { sm, xs },
} = THEME;

const bps = common.formatBreakpoints(THEME.medias);

const getBreakpoint = (width) => {
  return Object.values(bps).find((bp) => width >= bp.min).key;
};

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    breakpoint: undefined,
    isMobile: false,
  });
  const windowSizeRef = useRef(0);
  const breakpointRef = useRef('');
  const setData = (data) => {
    windowSizeRef.current = data.width;
    breakpointRef.current = data.breakpoint;
    setWindowSize(data);
  };

  useEffect(() => {
    function handleResize({ immediately }) {
      const width = document.documentElement.clientWidth || window.innerWidth;
      const breakpoint = getBreakpoint(width);
      const data = { width, breakpoint, isMobile: [xs.key, sm.key].includes(breakpoint) };
      if (immediately) {
        setData(data);
      } else {
        const data = { width, breakpoint, isMobile: [xs.key, sm.key].includes(breakpoint) };
        const prevValue = windowSizeRef.current;
        const currentValue = data.width;
        const prevBreakpoint = breakpointRef.current;
        const currentBreakpoint = breakpoint;

        //track only width change
        if (prevValue && prevValue !== currentValue && prevBreakpoint !== currentBreakpoint) {
          setData(data);
        }
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize({ immediately: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};

export default useWindowResize;
