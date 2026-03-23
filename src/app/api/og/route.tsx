import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Attraction Magnifier";
  const subtitle = searchParams.get("subtitle") || "恋が動き出す、わたしのアップデート";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fce4ec 0%, #f5e6d3 40%, #e8d5c4 70%, #d4c4b0 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            left: "-50px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(219, 166, 166, 0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(200, 170, 130, 0.15)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "40px", marginBottom: "10px" }}>🦋</p>
          <h1
            style={{
              fontSize: title.length > 20 ? "48px" : "56px",
              fontWeight: "bold",
              color: "#4a3f3f",
              lineHeight: 1.3,
              marginBottom: "16px",
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#4a3f3f99",
              marginBottom: "24px",
            }}
          >
            {subtitle}
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#c48b8b",
              fontWeight: "bold",
            }}
          >
            Attraction Magnifier
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
