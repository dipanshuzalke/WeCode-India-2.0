import { useEffect, useState } from "react";

export function useGazeTracking() {
  const [gaze, setGaze] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === "gaze") {
        setGaze({ x: event.data.x, y: event.data.y });
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Helper: check if gaze is inside an element
  const isLookingAt = (element: HTMLElement | null) => {
    if (!gaze || !element) return false;
    const rect = element.getBoundingClientRect();
    return (
      gaze.x >= rect.left &&
      gaze.x <= rect.right &&
      gaze.y >= rect.top &&
      gaze.y <= rect.bottom
    );
  };

  return { gaze, isLookingAt };
}