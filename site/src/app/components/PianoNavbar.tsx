"use client"
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const navItems = [
  { key: 'C', frequency: 261.63 },
  { key: 'D', frequency: 293.66 },
  { key: 'E', frequency: 329.63 },
  { key: 'F', frequency: 349.23 },
  { key: 'G', frequency: 392.00 },
  { key: 'A', frequency: 440.00 },
  { key: 'B', frequency: 493.88 }
];

const blackKeys = [
  { position: 'left-[8.33%]', key: 'C#', frequency: 277.18 },
  { position: 'left-[25%]', key: 'D#', frequency: 311.13 },
  { position: 'left-[58.33%]', key: 'F#', frequency: 369.99 },
  { position: 'left-[75%]', key: 'G#', frequency: 415.30 },
  { position: 'left-[91.66%]', key: 'A#', frequency: 466.16 }
];

export const PianoNavbar = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [isPianoOpen, setIsPianoOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const oscillatorsRef = useRef<Map<string, OscillatorNode>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      if (scrolled && isPianoOpen) {
        setIsPianoOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPianoOpen]);

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
    gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);

    oscillatorsRef.current.set(key, oscillator);
    
    oscillator.onended = () => {
      oscillatorsRef.current.delete(key);
    };
  };

  const handleKeyPress = (key: string, frequency: number) => {
    setActiveKey(key);
    playNote(frequency, key);
    setTimeout(() => setActiveKey(null), 150);
  };

  const togglePiano = () => {
    setIsPianoOpen(!isPianoOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
      isScrolled ? 'transform -translate-y-1 scale-[0.98]' : ''
    }`}>
      <div className="bg-[#cc3636] shadow-2xl">
        <div className="bg-[#cf5d5d] px-8 py-4 border-b-2 border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2 border border-black">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" style={{ animationDelay: '1s' }}></div>
                <span className="text-xs text-gray-300 font-mono ml-2">PWR</span>
              </div>
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg px-4 py-2 border border-gray-600 shadow-inner">
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent tracking-wider">
                  MINI MIDI MAGIC
                </span>
              </div>
            </div>
            <button
              onClick={togglePiano}
              className={`
                relative bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-3 border border-gray-600
                transition-all duration-300 ease-out cursor-pointer
                hover:shadow-lg hover:scale-105 active:scale-95
                flex items-center space-x-2 group
                ${isPianoOpen ? 'bg-gray-700 shadow-inner' : 'shadow-lg'}
              `}
            >
              <div className="bg-gray-800 rounded-lg px-3 py-2 border border-gray-600 min-w-[120px]">
                <span className="text-xs text-gray-400 font-mono tracking-wider">
                  {Array.from({ length: Math.max(1, Object.keys(oscillatorsRef.current || {}).length) }).map((_, i) => (
                    <span key={i} className={`inline-block w-2 h-2 rounded-full mr-1 ${
                      i < Object.keys(oscillatorsRef.current || {}).length ? 'bg-green-500 animate-pulse' : 'bg-gray-600'
                    }`}></span>
                  ))}
                  {Object.keys(oscillatorsRef.current || {}).length > 0 ? 'PLAYING' : 'PIANO'}
                </span>
              </div>
              
              <div className={`
                transition-all duration-300 ease-out
                ${isPianoOpen ? 'rotate-180 text-yellow-400' : 'text-gray-300 group-hover:text-yellow-400'}
              `}>
                {isPianoOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {isPianoOpen && (
                <div className="absolute inset-0 bg-yellow-400/20 rounded-lg animate-pulse pointer-events-none"></div>
              )}
            </button>
          </div>
        </div>
        <div className={`
          overflow-hidden transition-all duration-700 ease-out
          ${isPianoOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className={`
            relative px-4 py-6 bg-black
            transform transition-all duration-700 ease-out
            ${isPianoOpen ? 'translate-y-0 scale-100' : '-translate-y-8 scale-95'}
          `}>
            <div className="relative h-24 w-full max-w-7xl mx-auto">
              <div className={`
                flex h-full gap-[1px] bg-gray-900 p-1 rounded-lg shadow-2xl
                transition-all duration-500 ease-out delay-200
                ${isPianoOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
              `}>
                {navItems.map((item, index) => (
                  <button
                    key={item.key}
                    onClick={() => handleKeyPress(item.key, item.frequency)}
                    onMouseDown={() => handleKeyPress(item.key, item.frequency)}
                    className={`
                      flex-1 bg-gradient-to-b from-gray-50 via-white to-gray-100
                      border border-gray-300 rounded-b-md shadow-lg
                      flex flex-col items-center justify-center
                      transition-all duration-150 ease-out cursor-pointer
                      hover:from-gray-100 hover:via-gray-50 hover:to-gray-200
                      hover:shadow-xl hover:border-gray-400 hover:scale-105
                      active:from-gray-200 active:via-gray-100 active:to-gray-300
                      ${activeKey === item.key ? 'from-gray-200 via-gray-100 to-gray-300 shadow-inner transform translate-y-1 scale-95' : 'shadow-[0_8px_16px_rgba(0,0,0,0.3)]'}
                      group relative overflow-hidden
                      before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/50 before:to-transparent before:opacity-0 
                      hover:before:opacity-100 before:transition-opacity before:duration-200
                    `}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      boxShadow: activeKey === item.key 
                        ? 'inset 0 4px 8px rgba(0,0,0,0.3), inset 0 1px 2px rgba(0,0,0,0.5)' 
                        : '0 8px 16px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)'
                    }}
                  >
                    <div className="text-center pointer-events-none">
                      <div className="text-xs font-bold text-gray-800 mb-1 font-mono tracking-wider">
                        {item.key}
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-80 pointer-events-none"></div>
                  </button>
                ))}
              </div>
              <div className={`
                absolute top-1 h-16 w-full max-w-7xl mx-auto
                transition-all duration-500 ease-out delay-300
                ${isPianoOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
              `}>
                {blackKeys.map((blackKey, index) => (
                  <button
                    key={blackKey.key}
                    onClick={() => handleKeyPress(blackKey.key, blackKey.frequency)}
                    onMouseDown={() => handleKeyPress(blackKey.key, blackKey.frequency)}
                    onMouseUp={() => setActiveKey(null)}
                    onMouseLeave={() => setActiveKey(null)}
                    className={`
                      absolute w-10 h-16 bg-gradient-to-b from-gray-900 via-black to-gray-800
                      border border-gray-700 rounded-b-lg shadow-2xl
                      flex items-center justify-center cursor-pointer
                      transition-all duration-100 ease-out
                      hover:from-gray-800 hover:via-gray-900 hover:to-gray-700
                      hover:shadow-xl hover:border-gray-600 hover:scale-105
                      active:from-gray-700 active:via-gray-800 active:to-gray-600
                      ${activeKey === blackKey.key ? 'from-gray-700 via-gray-800 to-gray-600 shadow-inner transform translate-y-1 scale-95' : ''}
                      z-10 group
                      before:absolute before:top-0 before:left-0 before:right-0 before:h-1 
                      before:bg-gradient-to-r before:from-transparent before:via-gray-600 before:to-transparent
                    `}
                    style={{ 
                      left: blackKey.position, 
                      animationDelay: `${(index + navItems.length) * 50}ms`,
                      transform: activeKey === blackKey.key 
                        ? 'translateX(-50%) translateY(2px) scale(0.95)' 
                        : 'translateX(-50%)',
                      boxShadow: activeKey === blackKey.key
                        ? 'inset 0 4px 8px rgba(0,0,0,0.8), inset 0 1px 2px rgba(0,0,0,0.9)'
                        : '0 12px 20px rgba(0,0,0,0.6), 0 6px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                  >
                    <div className="text-xs text-gray-300 font-mono font-bold tracking-wider pointer-events-none">
                      {blackKey.key}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      
        <div className="h-2 bg-gradient-to-b from-gray-900 to-black shadow-inner"></div>
      </div>
    </nav>
  );
}