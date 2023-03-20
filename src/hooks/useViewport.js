import { useState, useEffect } from "react";

const useViewport = () => {
  const [width, setWidth] = useState(0);

  const handleWindowResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
};

export default useViewport;
