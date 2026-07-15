import Link from 'next/link';

// The legacy SPA rendered an empty <main> for unknown paths; this gives
// unknown URLs a proper 404 status instead. Styling matches the legacy
// dark theme until the redesign reaches global chrome.
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow py-32 text-center px-6">
      <h1 className="text-5xl font-extrabold text-white mb-4">404</h1>
      <p className="text-gray-300 mb-8">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="text-cyan-400 hover:underline font-semibold"
      >
        Back to homepage
      </Link>
    </div>
  );
}
