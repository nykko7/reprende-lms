"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export function CountdownTimer({ targetDate, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <Card className={cn("bg-primary text-primary-foreground", className)}>
      <CardContent className="p-4">
        <h3 className="mb-2 text-center text-lg">
          El <span className="font-extrabold">descuento de lanzamiento</span>{" "}
          finaliza en:
        </h3>
        <div className="flex justify-center space-x-4">
          {[
            { label: "Días", value: days },
            { label: "Horas", value: hours },
            { label: "Minutos", value: minutes },
            { label: "Segundos", value: seconds },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="mb-1 rounded-md bg-primary-foreground p-2 text-center text-xl font-bold text-primary">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs">{label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
