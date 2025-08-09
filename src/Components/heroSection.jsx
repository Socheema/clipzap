import { MdFolderCopy } from "react-icons/md";
import { LuScanQrCode } from "react-icons/lu";
import { motion } from "framer-motion";
import grid from "../assets/grid.png";
import { useState } from "react";
import useCopyToClipboard from "../useCopyToClipboard";

function HeroComponent() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]); // { original, short }[]
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { iscopied, copyToClipboard } = useCopyToClipboard();

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const validateUrl = (value) => {
    try {
      // Will throw if invalid
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const fakeShortener = (url) => {
    // Placeholder short link generator
    const hash = btoa(url).slice(0, 6).replace(/=/g, "").toLowerCase();
    return `${window.location.origin}/${hash}`;
  };

  const handleShorten = async () => {
    setError("");
    if (!input.trim()) return;
    if (!validateUrl(input.trim())) {
      setError("Enter a valid URL (include http/https).");
      return;
    }
    setLoading(true);
    try {
      // Replace with real API call if available
      const short = fakeShortener(input.trim());
      setResults((prev) => [...prev, { original: input.trim(), short }]);
      setInput("");
    } catch (e) {
      setError("Failed to shorten link.", e);
    } finally {
      setLoading(false);
    }
  };

  const lastResult = results[results.length - 1];

  return (
    <div className="relative min-h-[auto] md:max-h-[25rem] w-full overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="relative flex flex-col items-center mx-auto w-full max-w-5xl h-full">
          <img src={grid} alt="" className="w-full h-full object-cover opacity-5" />
        </div>
      </div>

      <div className="relative flex flex-col py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="max-w-xl mx-auto mb-6 md:mb-8">
            <div className="flex flex-col gap-6 items-center justify-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-tight"
                >
                  Shorten <span className="text-[#00B7B5]">Track</span> Share
                </motion.h1>
              </div>

              <div className="w-full">
                <div className="flex w-full items-center gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Paste a URL to shorten"
                    className="flex-1 h-11 px-3 rounded-lg text-white placeholder-white/50 bg-white/5 backdrop-blur-sm ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent shadow-sm"
                  />
                  <button
                    disabled={!input.trim() || loading}
                    onClick={handleShorten}
                    className="shrink-0 inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/10 px-4 h-11 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "..." : "Shorten"}
                  </button>
                </div>
                {error && (
                    <p className="text-xs text-red-400 mt-2 text-left">{error}</p>
                )}
              </div>

              {lastResult && (
                <motion.div
                  className="flex flex-col items-start justify-center w-full max-w-2xl gap-6 text-white/80"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ delay: 0.15 }}
                >
                  <div className="relative flex items-center gap-3 w-full flex-wrap">
                    <div className="flex items-center justify-between gap-3 flex-1 min-w-[16rem] rounded-lg border border-white/15 bg-white/10 px-3 h-14 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition-colors">
                      <div className="flex flex-col text-left overflow-hidden">
                        <span className="text-white/50 text-[11px] uppercase tracking-wide">
                          Short Link
                        </span>
                        <span className="truncate">{lastResult.short}</span>
                      </div>
                      <button
                        type="button"
                        className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                        aria-label="Copy short link"
                        title="Copy short link"
                        onClick={() => copyToClipboard(lastResult.short)}
                      >
                        <MdFolderCopy className="text-white/70 hover:text-white transition-colors" />
                      </button>
                      {iscopied && (
                        <span className="absolute -bottom-4 right-2 text-[10px] text-green-400">
                          Copied
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between gap-3 flex-1 min-w-[16rem] rounded-lg border border-white/15 bg-white/10 px-3 h-14 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition-colors">
                      <div className="flex flex-col text-left overflow-hidden">
                        <span className="text-white/50 text-[11px] uppercase tracking-wide">
                          QR Code
                        </span>
                        <span className="truncate">{lastResult.short}</span>
                      </div>
                      <button
                        type="button"
                        className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                        aria-label="QR code"
                        title="Show QR code (not implemented)"
                        onClick={() => {}}
                      >
                        <LuScanQrCode className="text-white/70 hover:text-white transition-colors cursor-pointer" />
                      </button>
                    </div>
                  </div>

                  {results.length > 1 && (
                    <div className="w-full text-left">
                      <p className="text-xs text-white/40">
                        Generated {results.length} links this session.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
