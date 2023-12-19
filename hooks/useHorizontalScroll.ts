import { useRef, useEffect } from 'react';

export const useHorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const el = scrollRef.current;

    if (el) {
      let requestId: number;

      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();

        // 요청이 이미 예약되어 있다면 취소
        cancelAnimationFrame(requestId);

        // requestAnimationFrame 내에서 스크롤 동작 예약
        requestId = requestAnimationFrame(() => {
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: 'smooth',
          });
        });
      };

      el.addEventListener('wheel', onWheel);

      return () => {
        el.removeEventListener('wheel', onWheel);
        // 컴포넌트가 언마운트될 때 requestAnimationFrame 예약 취소
        cancelAnimationFrame(requestId);
      };
    }
  }, []);

  return scrollRef;
};
