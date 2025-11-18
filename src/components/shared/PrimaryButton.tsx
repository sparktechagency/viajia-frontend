import { Button } from "antd";
import React from "react";

interface PrimaryButtonProps {
  text: string;
  size?: "small" | "middle" | "large";
  className?: string;
}

export default function PrimaryButton({
  text,
  size = "middle",
  className,
}: PrimaryButtonProps) {
  return (
    <Button size={size} type="primary" className={`${className} bg-primary!`}>
      {text}
    </Button>
  );
}
