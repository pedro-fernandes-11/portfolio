import React, { useEffect, useState } from "react";

interface TypingEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  phrases,
  typingSpeed = 200,
  deletingSpeed = 75,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText.slice(0, -1));

        if (displayedText.length == 1) {
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prevText) =>
          currentPhrase.slice(0, prevText.length + 1)
        );
        if (displayedText === currentPhrase) {
          setIsDeleting(true);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
  ]);

  return (
    <div>
      <h1>{displayedText}</h1>
    </div>
  );
};

export default TypingEffect;
