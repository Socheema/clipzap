import { useState } from "react";

function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      // Modern Clipboard API
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      // Reset "Copied" state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
      return true;
    } catch (err) {
      console.error("Clipboard API write failed, attempting fallback:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        return true;
      } catch (fallbackErr) {
        console.error("Copy failed:", fallbackErr);
        return false;
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  return { isCopied, copyToClipboard };
}

export default useCopyToClipboard;
