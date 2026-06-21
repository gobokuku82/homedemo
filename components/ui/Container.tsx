import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Width = "default" | "narrow" | "wide";

const widthClass: Record<Width, string> = {
  default: "max-w-page",
  narrow: "max-w-narrow",
  wide: "max-w-[88rem]",
};

interface ContainerProps {
  children: ReactNode;
  className?: string;
  width?: Width;
  as?: ElementType;
}

export function Container({
  children,
  className,
  width = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-gutter", widthClass[width], className)}>
      {children}
    </Tag>
  );
}
