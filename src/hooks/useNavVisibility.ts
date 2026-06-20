import { useState, useRef, useCallback } from "react";

export function useNavVisibility(hideDelay = 2500) {
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onMouseMove = useCallback(() => {
    setVisible(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), hideDelay);
  }, [hideDelay]);

  const navStyle = {
    opacity: visible ? 1 : 0,
    pointerEvents: (visible ? "auto" : "none") as "auto" | "none",
    transition: "opacity 0.5s ease",
  };

  return { navStyle, onMouseMove };
}
