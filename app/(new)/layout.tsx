import { Nav, Footer, Effects, CursorFx } from '@/components/ui';

/**
 * Layout for pages migrated to the new design system (Ampersand
 * editorial aesthetic). The `.na` shell scopes the new CSS; Nav and
 * Footer are the redesigned chrome; Effects bootstraps the JS-gated
 * reveal/count-up/accordion enhancements.
 */
export default function NewDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="na">
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <Effects />
      <CursorFx />
    </div>
  );
}
