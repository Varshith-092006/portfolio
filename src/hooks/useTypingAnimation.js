import { useState, useEffect } from 'react';

export const useTypingAnimation = (text, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!text) return;

    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      setIsTyping(false);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [isTyping, currentIndex, text, speed]);

  const reset = () => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsTyping(false);
  };

  return { displayText, isTyping, reset };
}; 