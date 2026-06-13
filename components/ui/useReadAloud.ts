import { useState, useEffect, useCallback } from 'react';

export function useReadAloud() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voicesLoaded, setVoicesLoaded] = useState(false);

  useEffect(() => {
    // Safari and some browsers need an explicit event listener to load voices
    const handleVoicesChanged = () => {
      setVoicesLoaded(true);
    };
    window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
    
    // Trigger an initial check
    if (window.speechSynthesis.getVoices().length > 0) {
      setVoicesLoaded(true);
    }

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
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
    
    // Choose the best English voice available
    const voices = window.speechSynthesis.getVoices();
    const englishVoices = voices.filter(v => v.lang.startsWith('en'));
    
    // The British Accent Trick: Prioritize en-GB to make it sound more academic/less familiar robotic
    const britishVoices = englishVoices.filter(v => v.lang === 'en-GB');
    
    // Prioritize natural sounding British voices first, then any British, then natural US
    const bestVoice = britishVoices.find(v => 
      v.name.includes('Natural') || 
      v.name.includes('Online') || 
      v.name.includes('Premium') ||
      v.name.includes('Google') || 
      v.name.includes('Samantha')
    ) || britishVoices[0] || englishVoices.find(v => 
      v.name.includes('Natural') || 
      v.name.includes('Online') || 
      v.name.includes('Premium')
    ) || englishVoices[0] || voices[0];

    if (bestVoice) {
      utterance.voice = bestVoice;
    }
    
    utterance.rate = 0.95; // Slightly slower
    utterance.pitch = 1.05; // Slightly friendlier

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

  return { play, stop, isPlaying, isPaused, voicesLoaded };
}
