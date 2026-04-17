import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/siteConfig";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 120%, #38bdf8 0%, #0f0f12 60%, #09090b 100%)",
          color: "#f5f5f7",
          fontSize: 96,
          fontWeight: 700,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          letterSpacing: "-0.04em",
          border: "2px solid #1f1f24",
          borderRadius: 40,
        }}
      >
        {siteConfig.initials}
      </div>
    ),
    { ...size },
  );
}
