"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import {
  trackBookCall,
  trackCta,
  trackOutboundLink,
  trackProjectCard,
  trackResumeOpened,
} from "@/lib/analytics";

type Base = {
  children: ReactNode;
  className?: string;
  placement: string;
  sourcePage?: string;
  captureId?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick" | "href">;

function currentPage() {
  if (typeof window !== "undefined") return window.location.pathname;
  return undefined;
}

function fire(ids: string | undefined) {
  // data-ph-capture is read by PostHog autocapture/toolbar; explicit events fire below.
  return ids ? { "data-ph-capture": ids } : {};
}

/** Generic portfolio CTA -> portfolio_cta_clicked (+contact_cta_clicked when contact). */
export function CtaLink({
  ctaName,
  destination,
  placement,
  children,
  className,
  captureId,
  sourcePage,
  useNextLink,
  ...rest
}: Base & { ctaName: string; destination: string; useNextLink?: boolean }) {
  const onClick = () =>
    trackCta({
      cta_name: ctaName,
      placement,
      destination,
      source_page: sourcePage ?? currentPage(),
    });
  const attrs = {
    className,
    onClick,
    ...fire(captureId),
    ...rest,
  } as const;
  if (useNextLink || destination.startsWith("/")) {
    return (
      <Link href={destination} {...attrs}>
        {children}
      </Link>
    );
  }
  return (
    <a href={destination} {...attrs}>
      {children}
    </a>
  );
}

/** Project card -> project_card_clicked. */
export function ProjectCardLink({
  projectSlug,
  projectName,
  destination,
  placement,
  children,
  className,
  captureId,
  sourcePage,
  ...rest
}: Base & { projectSlug: string; projectName?: string; destination: string }) {
  const onClick = () =>
    trackProjectCard({
      project_slug: projectSlug,
      project_name: projectName,
      source_page: sourcePage ?? currentPage(),
    });
  return (
    <Link
      href={destination}
      className={className}
      onClick={onClick}
      data-placement={placement}
      {...fire(captureId)}
      {...rest}
    >
      {children}
    </Link>
  );
}

/** Resume -> resume_opened. */
export function ResumeLink({
  destination = "/resume",
  placement,
  children,
  className,
  captureId,
  sourcePage,
  download,
  ...rest
}: Base & { destination?: string; download?: boolean }) {
  const onClick = () =>
    trackResumeOpened({ placement, source_page: sourcePage ?? currentPage() });
  if (download || destination.endsWith(".pdf")) {
    return (
      <a
        href={destination}
        className={className}
        onClick={onClick}
        {...fire(captureId)}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={destination}
      className={className}
      onClick={onClick}
      {...fire(captureId)}
      {...rest}
    >
      {children}
    </Link>
  );
}

/** Cal.com -> portfolio_cta_clicked{cta_name:book_call}. Keeps Cal embed attrs. */
export function BookCallLink({
  placement,
  children,
  className,
  captureId,
  sourcePage,
  href = "https://cal.com/salmen-khelifi/30min",
  ...rest
}: Base & { href?: string }) {
  const onClick = () =>
    trackBookCall({ placement, source_page: sourcePage ?? currentPage() });
  return (
    <a
      href={href}
      data-cal-namespace="30min"
      data-cal-link="salmen-khelifi/30min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className={className}
      onClick={onClick}
      {...fire(captureId)}
      {...rest}
    >
      {children}
    </a>
  );
}

/** Professional outbound (linkedin/github/freelancer/email/...) -> outbound_link_clicked. */
export function OutboundLink({
  destinationType,
  href,
  placement,
  children,
  className,
  captureId,
  ...rest
}: Base & { destinationType: string; href: string }) {
  const onClick = () =>
    trackOutboundLink({
      destination_type: destinationType,
      href,
      placement,
    });
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
      {...fire(captureId)}
      {...rest}
    >
      {children}
    </a>
  );
}
