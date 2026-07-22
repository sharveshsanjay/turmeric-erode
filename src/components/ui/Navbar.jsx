import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Navigation } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

export function Navbar({ currentStage = 0, totalStages = 9, onSelectStage }) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleAudioToggle = () => {
    const active = soundEngine.toggleMute();
    setIsAudioPlaying(active);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Wordmark */}
        <div 
          onClick={() => onSelectStage(0)}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <span className="text-xl font-bold tracking-widest text-erode-dark group-hover:text-erode-amber transition-colors">
            ERODE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-erode-gold animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-erode-gray hidden sm:inline-block border-l border-gray-200 pl-2 ml-2">
            The Turmeric Capital of India
          </span>
        </div>

        {/* Narrative Section Progress Indicator (Apple-style pill) */}
        <div className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full glass-panel shadow-apple-glass border border-gray-100">
          <span className="text-xs text-erode-gray font-medium">Scene {currentStage + 1} of {totalStages}</span>
          <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-erode-gold transition-all duration-500 ease-out"
              style={{ width: `${((currentStage + 1) / totalStages) * 100}%` }}
            />
          </div>
        </div>

        {/* Audio Toggle & Quick Nav */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleAudioToggle}
            className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel hover:bg-white text-erode-dark text-xs font-medium transition-all border border-gray-200/60 shadow-sm"
            title={isAudioPlaying ? "Mute Ambient Soundtrack" : "Unmute Ambient Soundtrack"}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-erode-amber animate-pulse" />
                <span className="hidden sm:inline">Audio On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-erode-gray" />
                <span className="hidden sm:inline">Soundtrack</span>
              </>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
