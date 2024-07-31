import React, { useState, useEffect } from 'react';

const TextAnimation = ({ words, fadeDuration, displayDuration }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFade(false);
    }, displayDuration);

    const fadeInTimer = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setFade(true);
    }, displayDuration + fadeDuration);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(fadeInTimer);
    };
  }, [currentWordIndex, fadeDuration, displayDuration, words.length]);

  return (
    <span
      style={{
        opacity: fade ? 1 : 0,
        transition: `opacity ${fadeDuration}ms ease-in-out`
      }}
    >
      {words[currentWordIndex]}
    </span>
  );
};

export default TextAnimation;
