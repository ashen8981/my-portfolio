import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const moveCursor = (e) => {
      if (!isMobile) {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsMoving(true);

        // Reset movement after 250ms
        setTimeout(() => setIsMoving(false), 200);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <CursorDot
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isMoving ? 1.2 : 1})`,
      }}
      isMoving={isMoving}
    />
  );
};

export default Cursor;

const CursorDot = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid ${({ isMoving }) => (isMoving ? "#64fff4" : "#4db6ac")}; 
  background-color: ${({ isMoving }) => (isMoving ? "rgba(100, 255, 244, 0.3)" : "rgba(77, 182, 172, 0.2)")}; 
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  transition: transform 0.15s ease-out, border-color 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 0 10px ${({ isMoving }) => (isMoving ? "#64fff4" : "#4db6ac")};

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    background-color: ${({ isMoving }) => (isMoving ? "#64fff4" : "#4db6ac")};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
