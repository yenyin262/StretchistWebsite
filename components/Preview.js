import React from "react";

export default function Preview({ enabled = false, children }) {
  return (
    <>
      <style jsx>{`
        .preview-banner {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 99999;
          background: #fff;
          padding: 8px;
        }
      `}</style>
      {enabled && (
        <div className="preview-banner">
          <a href="/api/exit-preview">Exit preview mode</a>
        </div>
      )}
      {children}
    </>
  );
}
