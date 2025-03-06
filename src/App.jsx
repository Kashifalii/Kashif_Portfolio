import React, { useEffect, useRef } from "react";
import Layout from "./components/layout/layout";
import "./App.css";

function App() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }

      if (cursorOutline) {
        cursorOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 300, fill: "forwards" },
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div ref={cursorDotRef} className="cursor-dot" data-cursor-dot></div>
      <div
        ref={cursorOutlineRef}
        className="cursor-outline"
        data-cursor-outline
      ></div>
      <Layout />
    </div>
  );
}

export default App;
