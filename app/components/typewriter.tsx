"use client";
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

interface TypewriterProps {
  words: string[];
}

const Typewriter: React.FC<TypewriterProps> = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 1500;

    if (!isDeleting && charIndex === words[currentIndex].length) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      return;
    }

    const typeTimeout = setTimeout(() => {
      setCurrentWord((prev) =>
        isDeleting ? prev.slice(0, -1) : words[currentIndex].slice(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(typeTimeout);
  }, [charIndex, isDeleting, currentIndex, words, isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
      I am a <span style={{ fontWeight: "bold" }}>{currentWord}</span>
      <span style={{ animation: "blink 1s infinite" }}>|</span>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </Typography>
  );
};

export default Typewriter;
