"use client";

import Image from "next/image";
import { PromptInputBox } from "@/components/ui/ai-prompt-box";
import EditorialTypography from "@/components/ui/editorial-typography";
import { useRef } from "react";

const partners = [
  { name: "Notion", icon: "M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" },
  { name: "Slack", icon: "M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" },
  { name: "Databricks", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { name: "Atlassian", icon: "M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z" },
  { name: "Spotify", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.5 14.3a.6.6 0 0 1-.8.2c-2.2-1.3-4.9-1.6-8.2-.9a.6.6 0 0 1-.3-1.2c3.6-.8 6.7-.5 9.2.9.3.2.4.6.1 1zm1.2-2.7c-.2.3-.6.4-1 .2-2.5-1.5-6.3-2-9.3-1.1-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 3.4-1 7.6-.5 10.4 1.2.3.2.4.6.3 1.1zm.1-2.8c-3-1.8-8-2-10.9-1.1-.5.1-1-.1-1.1-.6-.1-.5.1-1 .6-1.1 3.3-1 8.8-.8 12.2 1.3.4.3.6.8.3 1.2-.3.4-.8.5-1.1.3z" },
];

export default function Home() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // --- PROMPT BOX & CARD CONTROL PANEL ---
  const boxWidth = "700px";          // Width of the box
  const boxHeight = "auto";          // Height (use "auto" or fixed like "190px")
  const boxVerticalPosition = "58%"; // 50% is center, higher is lower
  const boxPaddingX = "8px";         // Side padding
  const boxPaddingY = "24px";        // Top/bottom padding
  const boxBorderRadius = "24px";    // Roundness
  const boxOpacity = "0.08";         // Glass transparency
  const boxBlur = "20px";            // Blur intensity
  const boxBorderColor = "rgba(255, 255, 255, 0.2)";
  const boxZIndex = "50";            // Higher number means top layer
  const partnerBarBottom = "80px";   // Adjust position of the bottom partner bar
  // -------------------------------------

  return (
    <div className="relative w-full min-h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Hero Image */}
      <Image
        src="/image.png"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Navbar */}
      <nav className="absolute top-5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-between gap-10 w-[90%] max-w-[600px] px-8 py-3.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-[10px]">
        <div className="text-white font-sans text-lg font-semibold">Logo</div>
        <button className="px-5 py-2 rounded-full bg-[#f5f5f5] text-[#1a1a1a] font-sans text-sm font-medium hover:bg-white/80 transition-colors">
          Menu
        </button>
      </nav>

      {/* Editorial Typography */}
      <EditorialTypography />

      {/* Combined Prompt Box & Card */}
      <PromptInputBox
        onSend={(message, files) => console.log(message, files)}
        placeholder="Ask anything..."
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 !bg-transparent !shadow-[0_8px_32px_rgba(0,0,0,0.3)] !border-none"
        style={{ 
          width: boxWidth, 
          height: boxHeight,
          top: boxVerticalPosition,
          zIndex: boxZIndex,
          paddingLeft: boxPaddingX,
          paddingRight: boxPaddingX,
          paddingTop: boxPaddingY,
          paddingBottom: boxPaddingY,
          borderRadius: boxBorderRadius,
          backgroundColor: `rgba(255, 255, 255, ${boxOpacity})`,
          backdropFilter: `blur(${boxBlur})`,
          WebkitBackdropFilter: `blur(${boxBlur})`,
          border: `1px solid ${boxBorderColor}`,
        }}
      />

      {/* Partner Bar */}
      <div 
        className="absolute left-0 w-full z-20 flex flex-col items-center gap-4 pointer-events-none"
        style={{ bottom: partnerBarBottom }}
      >
        <div className="text-white/50 font-sans text-[11px] font-medium tracking-[2px] uppercase pointer-events-auto">
          Used by humans at
        </div>
        <div className="relative w-[80%] max-w-[900px] overflow-hidden pointer-events-auto"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
          }}
        >
          <div
            ref={marqueeRef}
            className="flex items-center gap-12 animate-marquee"
            style={{ width: "max-content" }}
          >
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <div key={i} className="flex items-center gap-2.5 text-white/90 font-sans text-[13px] font-medium whitespace-nowrap flex-shrink-0">
                <svg className="w-[18px] h-[18px] opacity-80 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d={partner.icon} />
                </svg>
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
