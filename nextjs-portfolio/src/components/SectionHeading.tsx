import { HTMLAttributes, ReactNode } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className = "mb-10",
  ...props
}: SectionHeadingProps) {
  return (
    <h2
      className={`section-title reveal text-h2 ${className}`.trim()}
      {...props}
    >
      {children}
    </h2>
  );
}
