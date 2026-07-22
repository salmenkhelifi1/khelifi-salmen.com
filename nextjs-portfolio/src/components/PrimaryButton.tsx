import { AnchorHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function PrimaryButton({
  href,
  children,
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      className={`cta-button cta-primary ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
