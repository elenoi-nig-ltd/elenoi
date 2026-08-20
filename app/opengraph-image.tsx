import { ImageResponse } from "next/og";

export const alt = "ELENOI Nig. Ltd | Enterprise for lasting progress";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#121316",
          color: "#E2E4E6",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 84px",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: 22 }}>
          <div style={{ display: "flex", height: 58, position: "relative", transform: "rotate(45deg)", width: 58 }}>
            <div style={{ border: "2px solid #E2E4E6", height: 58, position: "absolute", width: 58 }} />
            <div style={{ background: "#1E7D42", bottom: -1, height: 16, position: "absolute", width: 16 }} />
            <div style={{ background: "#D97027", height: 16, position: "absolute", right: -1, top: -1, width: 16 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#E2E4E6", fontSize: 32, letterSpacing: 6 }}>ELENOI</div>
            <div style={{ color: "#A7AAAD", fontSize: 12, letterSpacing: 8, marginTop: 6 }}>NIG. LTD</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ color: "#70BD87", fontSize: 18, letterSpacing: 4, textTransform: "uppercase" }}>Enterprise for lasting progress</div>
          <div style={{ color: "#E2E4E6", fontFamily: "serif", fontSize: 64, lineHeight: 1.08, maxWidth: 900 }}>Building capable people and enduring businesses.</div>
          <div style={{ color: "#A7AAAD", fontSize: 22 }}>Hospitality · Commerce · Real Estate · Energy · Technology · Agriculture · Publishing</div>
        </div>
        <div style={{ background: "#D97027", height: 6, width: 160 }} />
      </div>
    ),
    { ...size },
  );
}
