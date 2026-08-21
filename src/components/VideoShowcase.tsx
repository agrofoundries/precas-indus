"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 font-sans overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold tracking-[0.08em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          Platform Overview
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-[-0.035em] leading-[1.12]">
          Experience the Power of PET
        </h2>
        <p className="text-sm text-slate-500 font-normal tracking-[-0.01em]">
          See how our digital marketing and performance engine drives exponential growth for leading enterprise brands.
        </p>
      </div>

      {/* Video UI Container */}
      <div className="relative mx-auto max-w-5xl group">
        
        {/* Glow behind the video */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 rounded-[32px] sm:rounded-[40px] blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
        
        {/* Mockup Frame */}
        <div className="relative bg-white/5 border border-white/10 rounded-[28px] sm:rounded-[36px] p-2 sm:p-3 backdrop-blur-sm shadow-2xl overflow-hidden ring-1 ring-slate-900/5">
          
          {/* Mac-like header bar */}
          <div className="flex items-center px-4 py-3 bg-slate-900/5 rounded-t-[20px] sm:rounded-t-[24px] border-b border-white/10 backdrop-blur-md">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
            </div>
            <div className="mx-auto bg-white/60 text-slate-500 text-[10px] font-medium px-4 py-1 rounded-md tracking-tight shadow-sm">
              pet-growth-engine.app
            </div>
          </div>

          {/* Video Player */}
          <div className="relative rounded-b-[20px] sm:rounded-b-[24px] overflow-hidden bg-slate-900">
            <video
              ref={videoRef}
              src="/hero-video.mp4"
              className="w-full h-auto aspect-video object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />

            {/* Custom Controls Overlay */}
            <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 hover:scale-105 transition-all shadow-lg border border-white/20"
              >
                {isPlaying ? <Pause className="w-6 h-6 ml-0.5" /> : <Play className="w-6 h-6 ml-1.5" />}
              </button>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition border border-white/10"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition border border-white/10"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition border border-white/10"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
            
          </div>
        </div>
      </div>

    </section>
  );
}
