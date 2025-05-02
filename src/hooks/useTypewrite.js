import { useEffect, useRef, useState } from "react";

export function useTypewriter(text, speed = 100) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const intervalRef = useRef(null);

  const stopTyping = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsTyping(false);
      setDisplayed(text); // Optionally show full text immediately "The request was cancelled, would you like to ask me something again? "
    }
  };

  useEffect(() => {
    if (!text) {
      setDisplayed("");
      setIsTyping(false);
      return;
    }

    setDisplayed("");
    setIsTyping(true);
    let index = 0;

    intervalRef.current = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [text, speed]);

  return [displayed, isTyping, stopTyping];
}
