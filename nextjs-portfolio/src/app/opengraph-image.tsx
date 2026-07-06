import { ImageResponse } from "next/og";

export const alt = "Salmen Khelifi - Full-Stack Developer & Automation Specialist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 78% 24%, rgba(47,128,237,0.34), transparent 30%), #08080a",
          color: "#f5f5f7",
          display: "flex",
          fontFamily: "sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28, width: "100%" }}>
          <div style={{ color: "#8e8e93", fontSize: 30, fontWeight: 700 }}>
            khelifi-salmen.com
          </div>
          <div style={{ alignItems: "baseline", display: "flex", gap: 18 }}>
            <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: -4 }}>
              Salmen Khelifi
            </div>
            <div
              style={{
                background: "#2f80ed",
                borderRadius: 999,
                height: 22,
                width: 22,
              }}
            />
          </div>
          <div style={{ color: "#c7c7d1", fontSize: 44, fontWeight: 500 }}>
            Full-Stack Developer & Automation Specialist
          </div>
        </div>
      </div>
    ),
    size,
  );
}
