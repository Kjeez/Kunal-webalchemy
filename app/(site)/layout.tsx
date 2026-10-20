import SiteHeader, { Announcement } from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import FloatingContact from '@/components/site/FloatingContact';
import MotionObserver from '@/components/site/motion/MotionObserver';

/**
 * Shell for the 2026 redesign. `.wa` scopes app/site.css; pages move
 * into this group from (new)/(legacy) as they are rebuilt.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wa">
      <a href="#main" className="skip">Skip to content</a>
      <Announcement />
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <FloatingContact />
      <MotionObserver />
    </div>
  );
}
