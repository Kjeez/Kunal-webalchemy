'use client';

import React, { useEffect, useRef } from 'react';

export interface ReelFace {
  /** Image source; omit to render a labeled placeholder tile. */
  src?: string;
  alt?: string;
  /** Placeholder label shown when src is missing/broken. */
  placeholder?: string;
  /** Marks this face as the showreel video card. */
  video?: boolean;
}

export interface ReelProps {
  /** Mono eyebrow above the carousel. */
  eyebrow?: string;
  /** Cards on the cylinder (the template uses 11). */
  faces: ReelFace[];
  /** Showreel video for the video face + fullscreen finale. TODO asset. */
  videoSrc?: string;
  /** Caption over the fullscreen finale. */
  caption?: React.ReactNode;
  hint?: string;
  ariaLabel?: string;
}

/* timeline map, taken from the template's 8-unit GSAP timeline:
   spin 0–6, side-cards fade 5.4–6.4, fullscreen expand 5.6–8 */
const SPIN_END = 6 / 8;
const FADE_START = 5.4 / 8;
const FADE_END = 6.4 / 8;
const FS_START = 5.6 / 8;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (v: number) => v * v * (3 - 2 * v);

/**
 * The template's scroll-driven 3D showreel, rebuilt without GSAP:
 * a sticky stage pins while the page scrolls 3.6 viewport-heights,
 * driving cylinder rotation, side-card fade and the video expand.
 * Flat scroll-snap strip on <900px, reduced-motion, and no-JS.
 * Decorative section — carries no page copy.
 */
const Reel: React.FC<ReelProps> = ({
  eyebrow,
  faces,
  videoSrc,
  caption,
  hint = 'Scroll to spin ↻',
  ariaLabel = 'Studio showreel',
}) => {
  const pinRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cylRef = useRef<HTMLDivElement>(null);
  const fsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = pinRef.current;
    const stage = stageRef.current;
    const cyl = cylRef.current;
    const fs = fsRef.current;
    if (!pin || !stage || !cyl || !fs) return;

    const mq = window.matchMedia('(min-width: 900px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let active = false;
    let raf = 0;
    let queued = false;

    const faceEls = Array.from(cyl.querySelectorAll<HTMLElement>('.face'));
    const sideEls = faceEls.filter((f) => !f.classList.contains('face--video'));
    const fsVideo = fs.querySelector('video');

    const layout = () => {
      const N = faceEls.length;
      const cardW = 250;
      const cardH = Math.round((cardW * 4) / 3);
      const radius = Math.round((cardW / 2 / Math.tan(Math.PI / N)) * 1.08);
      faceEls.forEach((f, i) => {
        f.style.width = `${cardW}px`;
        f.style.height = `${cardH}px`;
        f.style.marginLeft = `${-cardW / 2}px`;
        f.style.marginTop = `${-cardH / 2}px`;
        f.style.transform = `rotateY(${i * (360 / N)}deg) translateZ(${radius}px)`;
      });
      // pin length: stage height + 3.6 viewport-heights of scrub
      pin.style.height = `${window.innerHeight * 4.6}px`;
    };

    const update = () => {
      queued = false;
      if (!active) return;
      const rect = pin.getBoundingClientRect();
      const total = pin.offsetHeight - window.innerHeight;
      const p = clamp01(-rect.top / total);

      cyl.style.transform = `rotateY(${-360 * clamp01(p / SPIN_END)}deg)`;

      const fade = 1 - clamp01((p - FADE_START) / (FADE_END - FADE_START));
      sideEls.forEach((f) => { f.style.opacity = String(fade); });

      const k = smooth(clamp01((p - FS_START) / (1 - FS_START)));
      fs.style.opacity = String(k);
      fs.style.transform = `scale(${0.24 + 0.76 * k})`;
      fs.style.borderRadius = `${26 * (1 - k)}px`;
      if (fsVideo) fsVideo.style.transform = `translateY(${8 - 16 * k}%)`;
    };

    const onScroll = () => {
      if (!queued) {
        queued = true;
        raf = requestAnimationFrame(update);
      }
    };

    const clearInline = () => {
      faceEls.forEach((f) => f.removeAttribute('style'));
      cyl.removeAttribute('style');
      fs.removeAttribute('style');
      fsVideo?.removeAttribute('style');
      pin.style.height = '';
    };

    const enable = () => {
      if (active) return;
      active = true;
      stage.classList.add('is-3d');
      layout();
      update();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', layout);
      fsVideo?.play?.().catch(() => {});
    };

    const disable = () => {
      if (!active) return;
      active = false;
      stage.classList.remove('is-3d');
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', layout);
      cancelAnimationFrame(raf);
      clearInline();
    };

    const evaluate = () => {
      if (mq.matches && !reduced.matches) enable();
      else disable();
    };
    evaluate();
    mq.addEventListener('change', evaluate);
    reduced.addEventListener('change', evaluate);

    return () => {
      mq.removeEventListener('change', evaluate);
      reduced.removeEventListener('change', evaluate);
      disable();
    };
  }, []);

  return (
    <section className="reel" aria-label={ariaLabel}>
      <div className="reel-pin" ref={pinRef}>
        <div className="reel-stage" ref={stageRef}>
          {eyebrow && (
            <span
              className="reel-eyebrow mono label"
              style={{ ['--accent' as string]: 'var(--orange)' }}
            >
              <span className="dot"></span>
              {eyebrow}
            </span>
          )}
          <div className="stage3d">
            <div className="cylinder" ref={cylRef}>
              {faces.map((f, i) => (
                <div className={`face${f.video ? ' face--video' : ''}`} key={i}>
                  {f.video && videoSrc ? (
                    <video src={videoSrc} muted loop playsInline autoPlay preload="metadata" aria-label={f.alt} />
                  ) : f.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={f.src} alt={f.alt ?? ''} />
                  ) : (
                    <div className="ph-wrap ph" data-ph={f.placeholder ?? 'image'} aria-hidden="true"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="reel-fs" ref={fsRef} aria-hidden="true">
            {videoSrc && <video src={videoSrc} muted loop playsInline autoPlay preload="metadata" />}
            {caption && <div className="reel-cap">{caption}</div>}
          </div>
          <span className="reel-hint mono">{hint}</span>
        </div>
      </div>
    </section>
  );
};

export default Reel;
