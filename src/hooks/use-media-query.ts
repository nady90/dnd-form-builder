import { useEffect, useState } from "react";

type availableSizes = "sm" | "md" | "lg" | "xl";

export function useMediaQuery() {
  const [size, setSize] = useState<availableSizes>("xl");

  useEffect(() => {
    const windowWidth = window.innerWidth;
    console.log("🚀 ~ useMediaQuery ~ windowWidth:", windowWidth);
    if (windowWidth < 640) {
      setSize("sm");
    } else if (windowWidth < 768) {
      setSize("md");
    } else if (windowWidth < 1280) {
      setSize("lg");
    } else {
      setSize("xl");
    }
  }, [setSize]);

  return size;
}
