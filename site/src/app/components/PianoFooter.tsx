"use client"
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
const notes = [
  { key: 'C', frequency: 261.63, label: 'C4' },
  { key: 'D', frequency: 293.66, label: 'D4' },
  { key: 'E', frequency: 329.63, label: 'E4' },
  { key: 'F', frequency: 349.23, label: 'F4' },
  { key: 'G', frequency: 392.00, label: 'G4' },
  { key: 'A', frequency: 440.00, label: 'A4' },
  { key: 'B', frequency: 493.88, label: 'B4' },
  { key: 'C5', frequency: 523.25, label: 'C5' }
];

const blackNotes = [
  { key: 'C#', frequency: 277.18, position: 'left-[8.33%]', label: 'C#4' },
  { key: 'D#', frequency: 311.13, position: 'left-[25%]', label: 'D#4' },
  { key: 'F#', frequency: 369.99, position: 'left-[58.33%]', label: 'F#4' },
  { key: 'G#', frequency: 415.30, position: 'left-[75%]', label: 'G#4' },
  { key: 'A#', frequency: 466.16, position: 'left-[91.66%]', label: 'A#4' }
];

export const PianoFooter = () => {
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const oscillatorsRef = useRef<Map<string, OscillatorNode>>(new Map());

  useEffect(() => {
const initAudio = () => {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || 
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      const ctx = new AudioContextClass();
      setAudioContext(ctx);
    }
  }
};
    const handleFirstInteraction = () => {
      initAudio();
      if (audioContext?.state === 'suspended') {
        audioContext.resume();
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    return () => document.removeEventListener('click', handleFirstInteraction);
  }, [audioContext]);

  const playNote = (frequency: number, key: string) => {
    if (!audioContext) return;
    const existingOsc = oscillatorsRef.current.get(key);
    if (existingOsc) {
      existingOsc.stop();
      oscillatorsRef.current.delete(key);
    }
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);

    oscillatorsRef.current.set(key, oscillator);
    oscillator.onended = () => {
      oscillatorsRef.current.delete(key);
    };
  };

  const handleKeyPress = (key: string, frequency: number) => {
    setActiveKeys(prev => new Set([...prev, key]));
    playNote(frequency, key);
    setTimeout(() => {
      setActiveKeys(prev => {
        const newSet = new Set(prev);
        newSet.delete(key);
        return newSet;
      });
    }, 150);
  };

  return (
    <footer className="mt-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl border-t-4 border-gray-700">

      <div className="h-2 bg-red-800 shadow-inner"></div>
      <div className="bg-gradient-to-b from-black via-purple-300 to-blue-400 px-8 py-6 border-b-2 border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2 border border-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50" style={{ animationDelay: '0.6s' }}></div>
                <span className="text-xs text-gray-300 font-mono ml-2">SND</span>
              </div>
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg px-4 py-2 border border-gray-600 shadow-inner">
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-wider">
                  MINI MIDI MAGIC
                </span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg px-4 py-2 border border-gray-600 min-w-[100px]">
              <div className="flex items-center justify-center">
                <span className="text-xs text-gray-400 font-mono tracking-wider">
                  {Array.from(activeKeys).length > 0 ? 'PLAYING' : 'READY'}
                </span>
                {Array.from(activeKeys).length > 0 && (
                  <div className="flex space-x-1 ml-2">
                    {Array.from(activeKeys).slice(0, 3).map((key, index) => (
                      <div
                        key={key}
                        className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-4 py-8 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="relative h-28 w-full max-w-7xl mx-auto">
          <div className="flex h-full gap-[1px] bg-gray-900 p-1 rounded-lg shadow-2xl">
            {notes.map((note, index) => (
              <button
                key={note.key}
                onClick={() => handleKeyPress(note.key, note.frequency)}
                onMouseDown={() => handleKeyPress(note.key, note.frequency)}
                className={`
                  flex-1 bg-gradient-to-b from-gray-50 via-white to-gray-100
                  border border-gray-300 rounded-b-md shadow-lg
                  flex flex-col items-center justify-center cursor-pointer
                  transition-all duration-150 ease-out
                  hover:from-gray-100 hover:via-gray-50 hover:to-gray-200
                  hover:shadow-xl hover:border-gray-400
                  active:from-gray-200 active:via-gray-100 active:to-gray-300
                  ${activeKeys.has(note.key) ? 'from-gray-200 via-gray-100 to-gray-300 shadow-inner transform translate-y-1' : 'shadow-[0_8px_16px_rgba(0,0,0,0.3)]'}
                  group relative overflow-hidden
                  before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/50 before:to-transparent before:opacity-0 
                  hover:before:opacity-100 before:transition-opacity before:duration-200
                `}
                style={{
                  boxShadow: activeKeys.has(note.key) 
                    ? 'inset 0 4px 8px rgba(0,0,0,0.3), inset 0 1px 2px rgba(0,0,0,0.5)' 
                    : '0 8px 16px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)'
                }}
              >
                <div className="text-center pointer-events-none">
                  <div className="text-sm font-bold text-gray-800 mb-1 font-mono tracking-wider">
                    {note.key}
                  </div>
                  <div className="text-xs text-gray-600 uppercase tracking-wider font-semibold">
                    {note.label}
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-80 pointer-events-none"></div>
              </button>
            ))}
          </div>
          <div className="absolute top-1 h-18 w-full max-w-7xl mx-auto">
            {blackNotes.map((note, index) => (
              <button
                key={note.key}
                onClick={() => handleKeyPress(note.key, note.frequency)}
                onMouseDown={() => handleKeyPress(note.key, note.frequency)}
                onMouseUp={() => {
                  setActiveKeys(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(note.key);
                    return newSet;
                  });
                }}
                onMouseLeave={() => {
                  setActiveKeys(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(note.key);
                    return newSet;
                  });
                }}
                className={`
                  absolute w-12 h-18 bg-gradient-to-b from-gray-900 via-black to-gray-800
                  border border-gray-700 rounded-b-lg shadow-2xl cursor-pointer
                  flex flex-col items-center justify-center
                  transition-all duration-100 ease-out
                  hover:from-gray-800 hover:via-gray-900 hover:to-gray-700
                  hover:shadow-xl hover:border-gray-600
                  active:from-gray-700 active:via-gray-800 active:to-gray-600
                  ${activeKeys.has(note.key) ? 'from-gray-700 via-gray-800 to-gray-600 shadow-inner transform translate-y-1' : ''}
                  z-10 group
                  before:absolute before:top-0 before:left-0 before:right-0 before:h-1 
                  before:bg-gradient-to-r before:from-transparent before:via-gray-600 before:to-transparent
                `}
                style={{ 
                  left: note.position, 
                  transform: activeKeys.has(note.key) 
                    ? 'translateX(-50%) translateY(2px)' 
                    : 'translateX(-50%)',
                  boxShadow: activeKeys.has(note.key)
                    ? 'inset 0 4px 8px rgba(0,0,0,0.8), inset 0 1px 2px rgba(0,0,0,0.9)'
                    : '0 12px 20px rgba(0,0,0,0.6), 0 6px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
              >
                <div className="text-center pointer-events-none">
                  <div className="text-sm text-gray-300 font-mono font-bold tracking-wider mb-1">
                    {note.key}
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    {note.label}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 px-8 py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
            <span className="text-sm text-gray-300 font-mono tracking-wider">
              MINI MIDI MAGIC
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
          </div>
          <p className="text-xs text-gray-400 font-mono tracking-wide">
            DESIGN A MIDI CONTROLLER - GET STUFF TO BUILD IT IRL!
          </p>
          <div className="mt-3 flex items-center justify-center space-x-6 text-xs text-gray-500">
            <span>PCB and FIRMWARE by <Link href={"https://hackclub.slack.com/team/U0735FTMS3V"}>@nimit</Link></span>
            <span>•</span>
            <span>WEBSITE by <Link href={"https://hackclub.slack.com/team/U0807ADEC6L"}>@Manan</Link></span>
            <span>•</span>
            <span>ART by <Link href={"https://hackclub.slack.com/team/U097UCZE2BB"}>@Aishaani</Link></span>
          </div>
        </div>
      </div>
      <div className="h-2 bg-gradient-to-b from-gray-900 to-black"></div>
    </footer>
  );
};