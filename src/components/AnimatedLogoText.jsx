import { useEffect, useState } from "react";

function AnimatedLogoText() {
  const fullText = "RunaNails Studio";
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    function typeNextLetter() {
      const nextText = fullText.slice(0, currentIndex + 1);
      setText(nextText);
      currentIndex++;

      if (currentIndex < fullText.length) {
        setTimeout(typeNextLetter, 90);
      } else {
        setTimeout(() => {
          setShowCursor(false);
        }, 600);
      }
    }

    typeNextLetter();
  }, []);

  return (
    <span className="animated-logo-text">
      {text}
      {showCursor && <span className="typing-cursor">|</span>}
    </span>
  );
}

export default AnimatedLogoText;