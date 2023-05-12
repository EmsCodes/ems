// useSwiperRef.js
//for å kunne legge til custom next/prev piler på slider
import { useState, useRef, useEffect } from "react";

const useSwiperRef = () => {
  const [wrapper, setWrapper] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    setWrapper(ref.current);
  }, []);

  return [wrapper, ref];
};

export default useSwiperRef;
