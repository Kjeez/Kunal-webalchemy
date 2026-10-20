/* eslint-disable @next/next/no-img-element */
import Marquee from '@/components/site/Marquee';
import { projectsData } from '@/data/projectsData';
import { whatsappHref, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/site';
import { HERO_SHAPES, peep } from './data';
import FloatShapes from './FloatShapes';
import HeroLeadForm from './HeroLeadForm';
import HeroMockup from './HeroMockup';
import HeroStage from './HeroStage';
import RotatingWord from './RotatingWord';
import StatsCountUp from './StatsCountUp';
import s from './home.module.css';

const AVATARS: [string, string][] = [['Aarav', 'eef1ff'], ['Meera', 'fbf3e2'], ['Kabir', 'e8f4ec'], ['Ishita', 'fcebe3']];

/* travel-4 (Earthen Pods) is left out: its domain no longer resolves. */
const CLIENTS = projectsData.filter((p) => p.id !== 'travel-4').map((p) => p.title);

export default function Hero() {
  return (
    <>
      <section className={`wrap ${s.hero}`} aria-labelledby="hero-h">
        <div className={s.heroCopy}>
          <p className={s.heroEyebrow}>
            <span className="live-dot" aria-hidden="true" />
            Available for new projects
          </p>
          <h1 id="hero-h" className="h1">
            Need more customers? We build websites that <RotatingWord />
          </h1>
          <p className={`lede-lg ${s.heroLede}`}>
            Stop losing leads to outdated design. We build fast, mobile-first websites grounded in buyer
            psychology, at fixed prices from ₹14,999 and live in as little as 7 days.
          </p>
          <HeroLeadForm />
          <div className={s.heroAlt}>
            <span>No spam, one call</span>
            <span>
              or{' '}
              <a className="link" href={whatsappHref(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer">
                message us on WhatsApp
              </a>
            </span>
            <span>or <a className="link" href="#contact">book a strategy call</a></span>
          </div>
          <div className={s.proof}>
            <div className={s.avatars} aria-hidden="true">
              {AVATARS.map(([seed, bg]) => (
                <img key={seed} src={peep(seed, bg)} alt="" width={38} height={38} style={{ background: `#${bg}` }} />
              ))}
            </div>
            <div className={s.proofText}>
              <div><b><span className="stars" aria-hidden="true">★★★★★</span> 4.9/5</b><span className={s.srOnly}> client rating</span></div>
              <div style={{ color: 'var(--muted-2)' }}>100+ projects delivered</div>
            </div>
          </div>
        </div>

        <HeroStage>
          <FloatShapes list={HERO_SHAPES} />
          <HeroMockup />
          <div className={s.badge} aria-hidden="true">
            <svg className={s.badgeSvg} viewBox="0 0 120 120" width={120} height={120}>
              <defs>
                <path id="wa-badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
              </defs>
              <text>
                <textPath href="#wa-badge-circle" textLength={285} lengthAdjust="spacing">
                  AVAILABLE FOR NEW PROJECTS •{' '}
                </textPath>
              </text>
            </svg>
            <span className={s.badgeDot} />
          </div>
          <div className={s.sticker}>
            <div className={s.stickerK}>LIVE IN</div>
            <div className={s.stickerV}>7 days</div>
          </div>
        </HeroStage>
      </section>

      <section className={s.trusted} aria-label="Trusted by">
        <div className={s.trustedIn}>
          <div className={s.trustedLabel}>TRUSTED BY</div>
          <div className={s.trustedTrack}>
            <Marquee items={CLIENTS} duration={CLIENTS.length * 2.4} />
          </div>
        </div>
      </section>

      <section className={`wrap ${s.statsSection}`} aria-label="WebAlchemy in numbers">
        <StatsCountUp />
      </section>
    </>
  );
}
