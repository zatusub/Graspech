"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Sparkles, Command, ArrowRight, Activity, Terminal, FileCode2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "auto" | "error" | "explain";

export default function Home() {
  const [mode, setMode] = useState<Mode>("auto");
  const [errorInput, setErrorInput] = useState("");
  const [contextInput, setContextInput] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Command/Ctrl + Enter to submit
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        handleSubmit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [errorInput, contextInput]);

  const handleSubmit = async () => {
    if (!errorInput.trim()) return;
    setIsSubmitting(true);
    // Simulate API call for now
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen grid place-items-center p-4 md:p-8 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors duration-500">
      
      {/* Main Container - The Bento Box */}
      <div className="w-full max-w-2xl animate-fade-in">
        
        {/* Header Section */}
        <div className="mb-8 text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400">
            Graspech
          </h1>
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase opacity-0 animate-[fade-in_0.5s_ease-out_0.2s_forwards]">
            Turn Errors into Expertise
          </p>
        </div>

        {/* Form Card */}
        <div 
          className={cn(
            "group relative overflow-hidden rounded-3xl border border-white/20 dark:border-white/5 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-xl transition-all duration-300",
            isHovering ? "shadow-2xl scale-[1.002]" : "shadow-lg"
          )}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Subtle gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none" />

          <div className="relative p-2">
            
            {/* Top Navigation / Mode Selector */}
            <div className="flex p-1 bg-zinc-100/50 dark:bg-zinc-800/50 backdrop-blur-md rounded-2xl mb-2">
              <ModeButton 
                active={mode === "auto"} 
                onClick={() => setMode("auto")} 
                icon={<Activity className="w-4 h-4" />} 
                label="Auto" 
              />
              <ModeButton 
                active={mode === "error"} 
                onClick={() => setMode("error")} 
                icon={<Terminal className="w-4 h-4" />} 
                label="Error Only" 
              />
              <ModeButton 
                active={mode === "explain"} 
                onClick={() => setMode("explain")} 
                icon={<FileCode2 className="w-4 h-4" />} 
                label="Explain Code" 
              />
             </div>

            {/* Input Area */}
            <div className="space-y-2 px-4 py-2">
              <div className="relative group/input">
                <textarea
                  ref={textareaRef}
                  value={errorInput}
                  onChange={(e) => setErrorInput(e.target.value)}
                  placeholder="Paste your error message here..."
                  className="w-full min-h-[200px] md:min-h-[240px] bg-transparent border-none text-foreground text-base md:text-lg resize-none focus:outline-none placeholder:text-muted-foreground/50 transition-colors"
                  spellCheck={false}
                />
                {!errorInput && (
                  <div className="absolute top-0 right-0 p-2 pointer-events-none opacity-50">
                     <span className="text-xs border border-border rounded px-1.5 py-0.5 text-muted-foreground">⌘ V</span>
                  </div>
                )}
              </div>

              {/* Context Input */}
              <div className="relative">
                <input
                  type="text"
                  value={contextInput}
                  onChange={(e) => setContextInput(e.target.value)}
                  placeholder="Add context (e.g., 'React Next.js 14 app router')"
                  className="w-full bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:bg-white dark:focus:bg-black border border-transparent focus:border-black/5 dark:focus:border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 outline-none"
                />
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between px-4 pb-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md border border-black/5 dark:border-white/5">
                  <Command className="w-3 h-3" />
                  <span>Enter</span>
                </span>
                <span>to submit</span>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!errorInput.trim() || isSubmitting}
                className={cn(
                  "relative group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform",
                  !errorInput.trim() || isSubmitting
                    ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed shadow-none"
                    : "bg-blue-600 hover:bg-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 fill-white/20" />
                    <span>Ask AI</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-component for buttons to keep main clean
function ModeButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-xl transition-all duration-200",
        active
          ? "bg-white dark:bg-zinc-700 text-foreground shadow-sm ring-1 ring-black/5 dark:ring-white/10"
          : "text-muted-foreground hover:bg-white/50 dark:hover:bg-zinc-700/50 hover:text-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
