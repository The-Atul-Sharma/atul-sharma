import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/siteConfig";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            "radial-gradient(circle at 50% 120%, #38bdf8 0%, #0f0f12 55%, #09090b 100%)",
          color: "#f5f5f7",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          letterSpacing: "-0.04em",
          border: "1px solid #1f1f24",
          borderRadius: 8,
        }}
      >
        {siteConfig.initials}
      </div>
    ),
    { ...size },
  );
}
