import { useState, useEffect, useCallback } from 'react';

export function useReadAloud() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Cancel any ongoing speech when component unmounts
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const play = useCallback((text: string) => {
    if (isPlaying) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Choose a friendly English voice if available
    const voices = window.speechSynthesis.getVoices();
    const friendlyVoice = voices.find(v => v.lang.includes('en') && (v.name.includes('Google') || v.name.includes('Samantha'))) || voices[0];
    if (friendlyVoice) {
      utterance.voice = friendlyVoice;
    }
    
    utterance.rate = 0.9; // Slightly slower for better comprehension
    utterance.pitch = 1.1; // Slightly higher pitch for friendly tone

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [isPlaying, isPaused]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  }, []);

  return { play, stop, isPlaying, isPaused };
}
