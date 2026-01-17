import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

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
          backgroundColor: "#0b0b14",
          color: "#22c5ff",
          fontSize: 36,
          fontWeight: 700,
          borderRadius: 16
        }}
      >
        A
      </div>
    ),
    size
  );
}
