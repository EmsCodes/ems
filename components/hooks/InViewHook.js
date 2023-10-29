import { useRef, useEffect, useState } from "react";

export default function elementInView(options) {
  const element = useRef();
  const [isInView, setIsInView] = useState(false);

  //   console.log(isInView);

  const visibleFunction = (entries) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(visibleFunction, options);

    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      if (element.current) observer.unobserve(element.current);
    };
  }, [options]);
  return [element, isInView];
}
