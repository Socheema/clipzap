import { motion } from "motion/react";
import { useState } from "react";
import initialLinks from "../data";
import GraphComponent from "./graph"



function LinkContainer() {
  const [links, setLinks] = useState(initialLinks);
  const [copiedId, setCopiedId] = useState(null);

  function handleCopy(id, short) {
    navigator.clipboard
      .writeText(short)
      .then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 1500);
      })
      .catch(() => {});
  }

  function handleDelete(id) {
    setLinks((l) => l.filter((item) => item.id !== id));
  }

  return (
    <motion.div
      className="px-8 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 style={{ marginBottom: 12 }}>Links</h3>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{ borderCollapse: "collapse", width: "100%", minWidth: 900 }}
        >
          <thead>
            <tr style={{ textAlign: "left", background: "#f5f5f5" }}>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                #
              </th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                Original Link
              </th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                Short Link
              </th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                Clicks
              </th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                QR Code
              </th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                Actions
              </th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>
                <GraphComponent/>
              </th>
            </tr>
          </thead>
          <tbody>
            {links.map((link, idx) => (
              <tr key={link.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "8px" }}>{idx + 1}</td>
                <td
                  style={{
                    padding: "8px",
                    maxWidth: 250,
                    wordBreak: "break-all",
                    color: "#fff"
                  }}
                >
                  {link.original}
                </td>
                <td style={{ padding: "8px", color: "#fff" }}>
                  <a href={link.original} target="_blank" rel="noreferrer">
                    {link.short}
                  </a>
                </td>
                <td style={{ padding: "8px" }}>{link.clicks}</td>
                <td style={{ padding: "8px" }}>
                  <img
                    src={link.qr}
                    alt="QR"
                    width={60}
                    height={60}
                    style={{ border: "1px solid #ccc", borderRadius: 4 }}
                  />
                </td>
                <td style={{ padding: "8px", display: "flex", gap: 8 }}>
                  <button
                    onClick={() => handleCopy(link.id, link.short)}
                    style={{
                      padding: "4px 10px",
                      cursor: "pointer",
                      background: copiedId === link.id ? "#4caf50" : "#1976d2",
                      color: "#fff",
                      border: "none",
                      borderRadius: 4,
                      fontSize: 12,
                    }}
                  >
                    {copiedId === link.id ? "Copied" : "Copy"}
                  </button>
                  <button
                    onClick={() => handleDelete(link.id)}
                    style={{
                      padding: "4px 10px",
                      cursor: "pointer",
                      background: "#d32f2f",
                      color: "#fff",
                      border: "none",
                      borderRadius: 4,
                      fontSize: 12,
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {links.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    color: "#666",
                  }}
                >
                  No links remaining.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </motion.div>
  );
}

export default LinkContainer;
