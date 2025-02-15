import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <CursorDot style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

export default Cursor;

// Styled Component for the cursor
const CursorDot = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid var( --color-white);
  background-color: var(--color-bg);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out, background-color 0.2s ease-in-out;
  z-index: 9999; /* Ensures cursor stays on top of all elements */

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    background-color: var( --color-white); /* white Dot */
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Smooth Scale Effect */
  &:hover {
    transform: scale(1.1);
  }
`;