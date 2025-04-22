import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import ReactPlayer from "react-player";
import MonacoEditor from "@monaco-editor/react";

const ViewerModal = ({ content, onClose }) => {
  if (!content) return null;

  console.log("ViewerModal content:", content); // Debug content object

  return (
    <div className="viewer-modal">
      <div className="viewer-header">
        <button onClick={onClose}>Close</button>
      </div>
      <div className="viewer-body">
        {/* Text Files */}
        {content.type === "txt" && (
          <iframe
            src={content.path}
            title={`Text Viewer - ${content.path}`} // Ensure unique and descriptive title
            style={{ width: "100%", height: "100%" }}
          />
        )}

        {/* PDF Files */}
        {content.type === "pdf" && (
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={content.path} />
          </Worker>
        )}

        {/* Images */}
        {["png", "jpg", "jpeg", "gif"].includes(content.type) && (
          <img
            src={content.path}
            alt={`Image Viewer - ${content.path}`} // Ensure alt text is descriptive
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        )}

        {/* Videos */}
        {content.type === "video" && (
          <ReactPlayer
            url={content.path}
            controls
            width="100%"
            height="100%"
            config={{
              file: { attributes: { controlsList: "nodownload" } }, // Optional: Prevent downloads
            }}
          />
        )}

        {/* Audio */}
        {content.type === "audio" && (
          <audio controls style={{ width: "100%" }}>
            <source src={content.path} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        )}

        {/* Code Files */}
        {["js", "html", "css", "json", "jsx", "ts", "tsx"].includes(
          content.type
        ) && (
          <MonacoEditor
            height="90vh"
            defaultLanguage={content.type}
            defaultValue={content.code || ""} // Fallback for undefined content.code
            options={{ readOnly: true }}
          />
        )}

        {/* Unsupported File Types */}
        {![
          "txt",
          "pdf",
          "png",
          "jpg",
          "jpeg",
          "gif",
          "video",
          "audio",
          "js",
          "html",
          "css",
          "json",
          "jsx",
          "ts",
          "tsx",
        ].includes(content.type) && (
          <p>Unsupported file type: {content.type}</p>
        )}
      </div>
    </div>
  );
};

export default ViewerModal;
