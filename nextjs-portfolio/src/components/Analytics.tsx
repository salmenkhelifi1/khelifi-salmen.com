import Script from "next/script";

/**
 * GA4 and Meta Pixel, both driven by env vars.
 *
 * Each block renders nothing when its ID is unset, so the site is safe to
 * deploy before the properties exist and needs no code change once they do —
 * set the env var in the host and redeploy.
 *
 *   NEXT_PUBLIC_GA_ID          e.g. G-XXXXXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID  e.g. 1234567890
 *
 * Both are NEXT_PUBLIC_ because they are read in the browser. These IDs are
 * not secrets — they ship in the page source by design.
 */

// The GA4 measurement ID is not a secret — it is visible in the page source of
// every site that uses it. Defaulting it here means analytics survive a deploy
// where the host env var was never set, which is exactly how this shipped dead
// the first time. Set NEXT_PUBLIC_GA_ID to override (e.g. a staging property).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-8N7BGP0VPJ";

// No default: an unset pixel should stay unset rather than guess an ID.
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function Analytics() {
  return (
    <>
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="lazyOnload"
          />
          <Script id="ga4-init" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      ) : null}

      {META_PIXEL_ID ? (
        <>
          <Script id="meta-pixel" strategy="lazyOnload">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      ) : null}
    </>
  );
}
