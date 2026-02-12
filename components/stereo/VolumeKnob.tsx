import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import './stereo.css';

interface VolumeKnobProps {
  volume: number; // 0-100
  onVolumeChange: (volume: number) => void;
  label?: string;
}

const VolumeKnob: React.FC<VolumeKnobProps> = ({ volume, onVolumeChange, label = 'VOL' }) => {
  const knobRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Map volume (0-100) to rotation (-135deg to +135deg, 270deg sweep)
  const rotation = (volume / 100) * 270 - 135;

  const getAngleFromEvent = useCallback((e: PointerEvent | React.PointerEvent) => {
    if (!knobRef.current) return null;
    const rect = knobRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
    // Convert angle to 0-270 range (starting from 7 o'clock)
    let normalized = angle + 225; // shift so 7 o'clock = 0
    if (normalized < 0) normalized += 360;
    if (normalized > 360) normalized -= 360;
    if (normalized > 270) return null; // dead zone at bottom
    return Math.max(0, Math.min(100, (normalized / 270) * 100));
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    const vol = getAngleFromEvent(e);
    if (vol !== null) onVolumeChange(vol);
  }, [getAngleFromEvent, onVolumeChange]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const vol = getAngleFromEvent(e);
    if (vol !== null) onVolumeChange(vol);
  }, [getAngleFromEvent, onVolumeChange]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={knobRef}
        className="relative w-[52px] h-[52px] cursor-grab active:cursor-grabbing select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Knob ring track */}
        <div className="absolute inset-0 rounded-full bg-black/40 border border-white/5" />

        {/* Knob body */}
        <motion.div
          className="absolute inset-[4px] rounded-full knob-metallic"
          style={{ rotate: rotation }}
        >
          {/* Indicator line */}
          <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[2px] h-[10px] bg-untold-orange rounded-full" />
        </motion.div>
      </div>
      <span className="font-led text-[7px] text-white/20 tracking-[0.3em] uppercase">{label}</span>
    </div>
  );
};

export default VolumeKnob;
