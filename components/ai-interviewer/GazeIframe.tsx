export function GazeIframe({ width = 320, height = 240 }) {
  return (
    <iframe
      src="/webgazer-iframe.html"
      title="WebGazer Iframe"
      width={width}
      height={height}
      style={{ border: "none" }}
      allow="camera"
    />
  );
}