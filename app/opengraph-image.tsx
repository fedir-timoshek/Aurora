import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0b0b14",
          backgroundImage:
            "radial-gradient(900px 400px at 10% 10%, rgba(34,197,255,0.35), transparent 60%), radial-gradient(600px 500px at 90% 20%, rgba(99,240,160,0.35), transparent 55%), radial-gradient(700px 400px at 40% 0%, rgba(255,47,133,0.3), transparent 60%)"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "center",
            padding: "60px 80px",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 32,
            background: "rgba(15,17,32,0.8)"
          }}
        >
          <div style={{ fontSize: 52, fontWeight: 700, color: "#ffffff" }}>
            Аврора Авто
          </div>
          <div style={{ fontSize: 26, color: "#b3c0d9" }}>
            Вантажні перевезення та автосервіс
          </div>
        </div>
      </div>
    ),
    size
  );
}
