import React from "react";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center max-w-5xl m-auto">
      <div className="loader" style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        border: "6px solid rgba(0,0,0,0.1)",
        borderTopColor: "#06b6d4",
        animation: "spin 1s linear infinite"
      }} />
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}