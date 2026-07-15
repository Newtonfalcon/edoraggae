import { useEffect, useRef, useState } from 'react';
import { Music2, Pause } from 'lucide-react';

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    audio.play().catch((error) => {
      console.log('Autoplay was prevented by the browser:', error);
      setIsPlaying(false);
    });
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio.muted = false;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.log('Playback failed:', error);
    }
  };

  return (
    <div className="fixed bottom-24 right-5 z-[1000] sm:bottom-24">
      <audio ref={audioRef} loop muted src="/src/assets/music/song.mp3" />

      <button
        type="button"
        onClick={togglePlayback}
        className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold shadow-lg backdrop-blur transition-all duration-300 ${
          isPlaying
            ? 'border-[#bc6c25]/30 bg-[#58111a] text-[#fefae0] hover:bg-[#7a1824]'
            : 'border-[#bc6c25]/20 bg-[#faf7ec]/90 text-[#58111a] hover:bg-[#faedcd]'
        }`}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Music2 className="h-4 w-4" />}
        <span>{isPlaying ? 'Music On' : 'Music Off'}</span>
      </button>
    </div>
  );
}
