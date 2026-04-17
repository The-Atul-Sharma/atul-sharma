import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/siteConfig";

export const alt = siteConfig.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#09090b",
          backgroundImage:
            "radial-gradient(ellipse at 15% 10%, rgba(56,189,248,0.22), transparent 55%), radial-gradient(ellipse at 85% 0%, rgba(167,139,250,0.18), transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(240,171,252,0.14), transparent 60%)",
          color: "#f5f5f7",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontFamily: "ui-monospace, SFMono-Regular, Menlo",
            fontSize: 22,
            color: "#a1a1aa",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "1px solid #1f1f24",
              background:
                "radial-gradient(circle at 50% 120%, #38bdf8 0%, #0f0f12 55%, #09090b 100%)",
              fontSize: 28,
              fontWeight: 700,
              color: "#f5f5f7",
              letterSpacing: "-0.04em",
            }}
          >
            {siteConfig.initials}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: "#7dd3fc" }}>$</span>
            <span>{siteConfig.name.toLowerCase().replace(" ", "_")}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "ui-monospace, SFMono-Regular, Menlo",
              fontSize: 20,
              color: "#7dd3fc",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#34d399",
                boxShadow: "0 0 12px #34d399",
              }}
            />
            <span style={{ color: "#a1a1aa" }}>
              {siteConfig.availability}
            </span>
          </div>

          <div
            style={{
              fontSize: 92,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              backgroundImage:
                "linear-gradient(120deg, #38bdf8 0%, #7dd3fc 30%, #a78bfa 65%, #f0abfc 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            {siteConfig.name}
          </div>

          <div
            style={{
              fontSize: 34,
              color: "#a1a1aa",
              lineHeight: 1.25,
              maxWidth: 1000,
              display: "flex",
            }}
          >
            {siteConfig.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo",
            fontSize: 20,
            color: "#71717a",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            borderTop: "1px solid #1f1f24",
            paddingTop: 24,
          }}
        >
          <span>{siteConfig.location.toLowerCase()}</span>
          <span>ai · llm · web</span>
          <span style={{ color: "#7dd3fc" }}>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
