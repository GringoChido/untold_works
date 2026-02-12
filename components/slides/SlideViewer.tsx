import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideCollection, SlideScene } from '../../types';
import SceneEnvironment from './SceneEnvironment';
import SlideControls from './SlideControls';

interface Props {
  collection: SlideCollection;
  currentImageIndex: number;
  playing: boolean;
  musicPlaying: boolean;
  volume: number;
  onTogglePlay: () => void;
  onToggleMusic: () => void;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  onVolumeChange: (v: number) => void;
}

// Ken Burns — randomized per image
function getKenBurnsMotion(index: number) {
  const directions = [
    { scale: [1, 1.08], x: [0, -20], y: [0, -10] },
    { scale: [1.04, 1], x: [-10, 15], y: [-5, 10] },
    { scale: [1, 1.06], x: [0, 20], y: [0, -15] },
    { scale: [1.05, 1.01], x: [15, -10], y: [10, -5] },
    { scale: [1, 1.07], x: [-15, 0], y: [0, 10] },
    { scale: [1.03, 1], x: [10, -20], y: [-10, 0] },
  ];
  return directions[index % directions.length];
}

function getTransitionDuration(scene: SlideScene): number {
  switch (scene) {
    case 'bigsur':
    case 'campfire':
      return 12;
    case 'brutalist':
      return 0; // Instant
    case 'haring':
      return 0; // Hard cuts
    case 'cinema':
      return 10;
    default:
      return 8;
  }
}

function getCrossfadeDuration(scene: SlideScene): number {
  switch (scene) {
    case 'brutalist':
    case 'haring':
      return 0.15; // Snap
    case 'bigsur':
    case 'campfire':
      return 2.5; // Slow dissolve
    case 'cinema':
      return 2;
    default:
      return 1.5;
  }
}

// ── Polaroid special frame ──
const PolaroidFrame: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => {
  const rotation = useMemo(() => (Math.random() - 0.5) * 6, [index]);
  return (
    <div
      className="relative bg-[#faf8f3] p-3 pb-14 sm:p-4 sm:pb-16 shadow-2xl"
      style={{
        transform: `rotate(${rotation}deg)`,
        maxWidth: '85vw',
        maxHeight: '75vh',
      }}
    >
      <div className="relative overflow-hidden">
        {children}
      </div>
    </div>
  );
};

// ── Brutalist metadata overlay ──
const BrutalistMeta: React.FC<{ index: number; total: number; alt: string }> = ({ index, total, alt }) => (
  <div className="absolute bottom-6 left-6 z-30 pointer-events-none">
    <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">
      {String(index + 1).padStart(3, '0')} / {String(total).padStart(3, '0')}
    </p>
    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25 mt-1">
      {alt}
    </p>
  </div>
);

// ── Cinema letterbox bars ──
const CinemaLetterbox: React.FC = () => (
  <>
    <div className="absolute top-0 left-0 right-0 h-[12vh] bg-black z-30 pointer-events-none" />
    <div className="absolute bottom-0 left-0 right-0 h-[12vh] bg-black z-30 pointer-events-none" />
    {/* Subtle scan lines */}
    <div
      className="absolute inset-0 pointer-events-none z-30 opacity-[0.03]"
      style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
      }}
    />
  </>
);

const SlideViewer: React.FC<Props> = ({
  collection,
  currentImageIndex,
  playing,
  musicPlaying,
  volume,
  onTogglePlay,
  onToggleMusic,
  onNext,
  onPrev,
  onClose,
  onVolumeChange,
}) => {
  const [controlsVisible, setControlsVisible] = useState(true);
  const controlsTimerRef = React.useRef<number>(0);
  const { scene, images } = collection;
  const currentImage = images[currentImageIndex];
  const kenBurns = getKenBurnsMotion(currentImageIndex);
  const kenBurnsDuration = getTransitionDuration(scene);
  const crossfadeDuration = getCrossfadeDuration(scene);

  // Auto-hide controls
  const showControls = useCallback(() => {
    setControlsVisible(true);
    if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = window.setTimeout(() => {
      setControlsVisible(false);
    }, 3000);
  }, []);

  useEffect(() => {
    showControls();
    return () => {
      if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
    };
  }, []);

  // Mouse/touch activity shows controls
  useEffect(() => {
    const handleActivity = () => showControls();
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
    };
  }, [showControls]);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      showControls();
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          onPrev();
          break;
        case 'Escape':
          onClose();
          break;
        case 'p':
          onTogglePlay();
          break;
        case 'm':
          onToggleMusic();
          break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onNext, onPrev, onClose, onTogglePlay, onToggleMusic, showControls]);

  const isPolaroid = scene === 'polaroid';
  const isBrutalist = scene === 'brutalist';
  const isCinema = scene === 'cinema';

  // Image sizing per scene
  const imageContainerClass = (() => {
    if (isPolaroid) return 'flex items-center justify-center w-full h-full';
    if (isBrutalist) return 'flex items-center justify-center w-full h-full p-12 sm:p-20';
    if (isCinema) return 'flex items-center justify-center w-full h-full px-4 py-[12vh]';
    return 'flex items-center justify-center w-full h-full p-4 sm:p-8';
  })();

  return (
    <SceneEnvironment scene={scene}>
      {isCinema && <CinemaLetterbox />}

      <div className={imageContainerClass}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${collection.id}-${currentImageIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: crossfadeDuration, ease: 'easeInOut' }}
            className={isPolaroid ? '' : 'w-full h-full flex items-center justify-center'}
          >
            {isPolaroid ? (
              <PolaroidFrame index={currentImageIndex}>
                <img
                  src={currentImage.url}
                  alt={currentImage.alt}
                  className="block max-w-full max-h-[60vh] object-contain"
                  draggable={false}
                />
              </PolaroidFrame>
            ) : isBrutalist ? (
              <div className="relative border border-white/20">
                <img
                  src={currentImage.url}
                  alt={currentImage.alt}
                  className="block max-w-full max-h-[80vh] object-contain"
                  draggable={false}
                />
              </div>
            ) : (
              <motion.img
                src={currentImage.url}
                alt={currentImage.alt}
                className="block max-w-full max-h-full object-contain"
                draggable={false}
                initial={{
                  scale: kenBurns.scale[0],
                  x: kenBurns.x[0],
                  y: kenBurns.y[0],
                }}
                animate={{
                  scale: kenBurns.scale[1],
                  x: kenBurns.x[1],
                  y: kenBurns.y[1],
                }}
                transition={{
                  duration: kenBurnsDuration,
                  ease: 'linear',
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {isBrutalist && (
        <BrutalistMeta
          index={currentImageIndex}
          total={images.length}
          alt={currentImage.alt}
        />
      )}

      {/* Controls overlay */}
      <SlideControls
        visible={controlsVisible}
        scene={scene}
        playing={playing}
        musicPlaying={musicPlaying}
        volume={volume}
        currentIndex={currentImageIndex}
        totalImages={images.length}
        trackName={collection.track.name}
        trackArtist={collection.track.artist}
        collectionTitle={collection.title}
        onTogglePlay={onTogglePlay}
        onToggleMusic={onToggleMusic}
        onNext={onNext}
        onPrev={onPrev}
        onClose={onClose}
        onVolumeChange={onVolumeChange}
      />
    </SceneEnvironment>
  );
};

export default SlideViewer;
