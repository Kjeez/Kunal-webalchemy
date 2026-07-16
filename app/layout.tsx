import type { Metadata } from 'next';
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import './na.css';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
  // Optical-size axis: display sizes render with the tighter large-opsz
  // glyphs the template gets from Google's CSS (opsz 12..96).
  axes: ['opsz'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://webalchemy.in'),
  title: 'WebAlchemy | Digital Growth Agency - Web Development & Marketing India',
  description:
    "WebAlchemy is India's leading digital growth agency offering web development, digital marketing, SEO, branding, and UI/UX design services. Get a free estimate today!",
  keywords:
    'web development, digital marketing, SEO, web design, website development India, digital agency, growth agency, branding, UI UX design',
  icons: { icon: '/favicon.svg' },
};

/* Legacy Tailwind CDN config (from old index.html). The CDN script and this
   config keep not-yet-migrated pages styled; both are removed once the last
   page moves to the new design system. fontFamily.sans now points at the
   next/font Inter variable instead of the removed Google Fonts <link>. */
const tailwindCdnConfig = `
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        navy: { 900: '#0a0e27', 800: '#111633' },
        cyan: { 400: '#00d9ff', 500: '#00b8d4' },
        teal: { 400: '#00ffb3' }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'beam': 'beam 8s linear infinite',
        'beam-delayed': 'beam 8s linear 4s infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out',
        'scroll-left': 'scrollLeft 30s linear infinite',
        'scroll-right': 'scrollRight 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        beam: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-33.33%)' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    }
  }
}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* Legacy Tailwind CDN — required by pre-redesign pages, removed at
            the end of the migration. Loaded synchronously to minimise
            unstyled flashes on legacy markup. */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{ __html: tailwindCdnConfig }} />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXD3F4LP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1599561328036372&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Global LocalBusiness JSON-LD — lives here so every route group
            (legacy and new design) keeps it. */}
        <LocalBusinessSchema />
        {children}

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
              'gtm.start': new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-NXD3F4LP');`}
        </Script>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FWV5PE4DGS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-FWV5PE4DGS');`}
        </Script>
        {/* Meta Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
              n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
          }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1599561328036372');
          fbq('track', 'PageView');`}
        </Script>
      </body>
    </html>
  );
}
