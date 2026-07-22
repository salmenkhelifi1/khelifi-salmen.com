import { HTMLAttributes, ReactNode } from "react";

interface SectionContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className = "",
  ...props
}: SectionContainerProps) {
  return (
    <div
      className={`mx-auto max-w-7xl px-6 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
