import SiteChrome from '@/components/SiteChrome';

/**
 * Layout for pages still on the pre-redesign UI (navy theme, legacy
 * Navbar/Footer/popups). Pages leave this group one at a time as they
 * migrate to the new design; delete this layout when the group empties.
 */
export default function LegacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteChrome>{children}</SiteChrome>;
}
