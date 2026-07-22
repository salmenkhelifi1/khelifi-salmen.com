import { AnchorHTMLAttributes, ReactNode } from "react";

interface SecondaryButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function SecondaryButton({
  href,
  children,
  className = "",
  ...props
}: SecondaryButtonProps) {
  return (
    <a
      href={href}
      className={`cta-button cta-secondary ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
