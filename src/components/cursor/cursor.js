import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screen size
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true); // Set to true for mobile views
      } else {
        setIsMobile(false);
      }
    };

    handleResize(); // Run once to check screen size
    window.addEventListener("resize", handleResize);

    const moveCursor = (e) => {
      // Only move the cursor if it's not mobile
      if (!isMobile) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isMobile]);

  if (isMobile) return null; // Don't render cursor on mobile views

  return <CursorDot style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

export default Cursor;

const CursorDot = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;