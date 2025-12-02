export default function BuildBadge() {
  const id = import.meta?.env?.VITE_BUILD_ID || "dev";
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "white",
        color: "red",
        fontSize: 12,
        lineHeight: "18px",
        textAlign: "center",
        borderBottom: "1px solid #f0f0f0",
        zIndex: 2147483647,
        pointerEvents: "none",
      }}
      aria-label={`Build ${id}`}
    >
      Build {id}
    </div>
  );
}
