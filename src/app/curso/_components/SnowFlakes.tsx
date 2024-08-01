"use client";
import React, { useEffect, useState } from "react";

interface SnowflakeStyle {
  opacity: number;
  fontSize: string;
  x: number;
  y: number;
  speed: number;
  counter: number;
  sign: number;
}

const Snowflake: React.FC<SnowflakeStyle> = ({ opacity, fontSize, x, y }) => {
  const style = {
    opacity,
    fontSize,
    transform: `translate3d(${x}px, ${y}px, 0)`,
    color: "white",
    position: "fixed" as const,
    pointerEvents: "none" as const,
    zIndex: 1000,
  };

  return <div style={style}>*</div>;
};

const useSnowflakes = (numberOfSnowflakes = 50) => {
  const [snowflakes, setSnowflakes] = useState<SnowflakeStyle[]>([]);

  useEffect(() => {
    const initialSnowflakes: SnowflakeStyle[] = Array(numberOfSnowflakes)
      .fill(null)
      .map(() => ({
        opacity: 0.1 + Math.random(),
        fontSize: `${12 + Math.random() * 30}px`,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: 5 + Math.random() * 30,
        counter: 0,
        sign: Math.random() < 0.5 ? 1 : -1,
      }));

    setSnowflakes(initialSnowflakes);

    const moveSnowflakes = () => {
      setSnowflakes((snowflakes) =>
        snowflakes.map((snowflake) => {
          const newCounter = snowflake.counter + snowflake.speed / 5000;
          const newX =
            snowflake.x +
            (snowflake.sign * snowflake.speed * Math.cos(newCounter)) / 40;
          let newY =
            snowflake.y + Math.sin(newCounter) / 40 + snowflake.speed / 30;

          // Reiniciar la posición del copo de nieve si sale de la pantalla
          if (newY > window.innerHeight) {
            newY = -50;
          }

          return {
            ...snowflake,
            counter: newCounter,
            x: newX,
            y: newY,
          };
        }),
      );

      requestAnimationFrame(moveSnowflakes);
    };

    moveSnowflakes();

    return () => {
      setSnowflakes([]);
    };
  }, [numberOfSnowflakes]);

  return snowflakes;
};

const Snowflakes: React.FC<{ numberOfSnowflakes?: number }> = ({
  numberOfSnowflakes = 50,
}) => {
  const snowflakes = useSnowflakes(numberOfSnowflakes);

  return (
    <>
      {snowflakes.map((style, index) => (
        <Snowflake key={index} {...style} />
      ))}
    </>
  );
};

export default Snowflakes;
