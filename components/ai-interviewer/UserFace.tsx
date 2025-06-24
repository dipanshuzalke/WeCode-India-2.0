"use client";

import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

declare global {
  interface Window {
    webgazer: Record<string, unknown>;
  }
}

interface GazeEventData {
  type: "gaze";
  x: number;
  y: number;
}

export default function Home() {
  const [gaze, setGaze] = useState<{ x: number; y: number } | null>(null);
  const [isLookingAway, setIsLookingAway] = useState(false);
  const [multipleFaces, setMultipleFaces] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null); // Use ref to persist across renders

  const loadFaceApiModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
  };

  const detectFaces = async () => {
    const video = videoRef.current;
    if (video && video.readyState === 4) {
      const detections = await faceapi.detectAllFaces(
        video,
        new faceapi.TinyFaceDetectorOptions()
      );
      setMultipleFaces(detections.length > 1);
    }
  };

  useEffect(() => {
    const setup = async () => {
      await loadFaceApiModels();

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      const faceInterval = setInterval(detectFaces, 1000);

      // Gaze message listener
      const handleMessage = (event: MessageEvent<GazeEventData>) => {
        if (event.data?.type === "gaze") {
          setGaze({ x: event.data.x, y: event.data.y });
      
          const margin = 60;
          const isOffScreen =
            event.data.x < margin ||
            event.data.x > window.innerWidth - margin ||
            event.data.y < margin ||
            event.data.y > window.innerHeight - margin;
      
          setIsLookingAway(isOffScreen);
        }
      };

      window.addEventListener("message", handleMessage);

      return () => {
        window.removeEventListener("message", handleMessage);
        clearInterval(faceInterval);

        // Stop the webcam stream
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }
      };
    };

    setup();
  }, []);

  return (
    <div className="p-6 space-y-4">
      {/* <h1 className="text-2xl font-bold">🎯 Interview Monitoring Dashboard</h1> */}

      {gaze && (
        <p>
          👁 Gaze Position → x: {Math.round(gaze.x)}, y: {Math.round(gaze.y)}
        </p>
      )}

      {isLookingAway && (
        <p className="text-orange-500">⚠️ Candidate is looking away</p>
      )}

      {multipleFaces && (
        <p className="text-red-600">🚨 Multiple faces detected</p>
      )}

      <video ref={videoRef} autoPlay muted className="hidden" />

      <iframe
        src="/webgazer-iframe.html"
        title="WebGazer Iframe"
        width="320"
        height="240"
        style={{ border: "none" }}
        allow="camera"
      />
    </div>
  );
}
