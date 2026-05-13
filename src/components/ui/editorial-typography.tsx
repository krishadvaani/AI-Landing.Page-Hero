"use client";

import React from "react";

const EditorialTypography = () => {
  // --- TYPOGRAPHY CONTROL PANEL ---
  const config = {
    topPosition: "17%",         // Vertical position of the container
    maxWidth: "80rem",          // Max width of the text container
    
    // First Line (Think Creative)
    line1MarginBottom: "0px",   // Space below the first line
    line1Alignment: "text-left", 
    line1Offset: "160px",        // Horizontal shift
    
    // Second Line (Build Creative)
    line2Alignment: "text-right",
    line2Offset: "160px",        // Horizontal shift
    
    // Sizing & Fonts
    baseFontSize: "text-4xl md:text-5xl lg:text-7xl",
    calligraphySize: "text-5xl md:text-6xl lg:text-8xl",
    tracking: "tracking-tight",
    leading: "leading-none",
    
    // Calligraphy Fine-tuning
    calligraphyTranslateY: "translate-y-2",
    calligraphyMargin: "20px",     // Space between Syne and Calligraphy words
  };
  // --------------------------------

  return (
    <div className="absolute left-0 right-0 z-30 pointer-events-none" style={{ top: config.topPosition }}>
      <div className="relative w-full mx-auto px-10" style={{ maxWidth: config.maxWidth }}>
        {/* First line */}
        <div 
          className={`relative ${config.line1Alignment}`}
          style={{ 
            marginBottom: config.line1MarginBottom,
            marginRight: config.line1Alignment === "text-right" ? config.line1Offset : "0",
            marginLeft: config.line1Alignment === "text-left" ? config.line1Offset : "0"
          }}
        >
          <h1 className={`${config.baseFontSize} font-extrabold text-white/90 ${config.tracking} ${config.leading} transition-all duration-700 hover:text-white hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] group cursor-pointer pointer-events-auto`}>
            <span className="font-syne">Think</span>
            <span 
              className={`font-calligraphy ${config.calligraphySize} italic inline-block transform ${config.calligraphyTranslateY} text-white/95 tracking-normal transition-transform duration-700 group-hover:scale-[1.02]`}
              style={{ marginLeft: config.calligraphyMargin }}
            >
              Creative
            </span>
          </h1>
        </div>
        
        {/* Second line */}
        <div 
          className={`relative ${config.line2Alignment}`}
          style={{ 
            marginRight: config.line2Alignment === "text-right" ? config.line2Offset : "0",
            marginLeft: config.line2Alignment === "text-left" ? config.line2Offset : "0"
          }}
        >
          <h2 className={`${config.baseFontSize} font-extrabold text-white/90 ${config.tracking} ${config.leading} transition-all duration-700 hover:text-white hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] group cursor-pointer pointer-events-auto`}>
            <span 
              className={`font-calligraphy ${config.calligraphySize} italic inline-block transform ${config.calligraphyTranslateY} text-white/95 tracking-normal transition-transform duration-700 group-hover:scale-[1.02]`}
              style={{ marginRight: config.calligraphyMargin }}
            >
              Build
            </span>
            <span className="font-syne"> Creative</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EditorialTypography;
