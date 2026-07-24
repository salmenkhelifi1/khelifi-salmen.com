import { AnchorHTMLAttributes, ReactNode } from "react";

interface SecondaryButtonProps extends Partial<AnchorHTMLAttributes<HTMLAnchorElement>> {
  href?: string;
  children: ReactNode;
  className?: string;
}

export default function SecondaryButton({
  href,
  children,
  className = "",
  target,
  rel,
  ...props
}: SecondaryButtonProps) {
  const isCalLink = href?.includes("cal.com");

  if (isCalLink) {
    return (
      <button
        type="button"
        data-cal-namespace="30min"
        data-cal-link="salmen-khelifi/30min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        className={`cta-button cta-secondary cursor-pointer ${className}`.trim()}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={`cta-button cta-secondary ${className}`.trim()}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </a>
  );
}
