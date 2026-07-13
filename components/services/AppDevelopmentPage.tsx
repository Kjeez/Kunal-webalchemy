import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Smartphone, Code, Shield, Cpu, ArrowRight, Layers, Zap
} from "lucide-react";
import {
  BreadcrumbNav, FaqSection, CaseStudyCard, CaseStudyGrid, CtaBanner,
} from "../seo";

const AppDevelopmentPage: React.FC = () => {
  useEffect(() => {
    document.title = "Mobile App Development Delhi | WebAlchemy";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", "iOS, Android & cross-platform app development. React Native and Flutter apps built for performance and user engagement.");
    }
  }, []);

  const faqItems = [
    {
      question: "Should I build a native app or a cross-platform app?",
      answer:
        "It depends on your requirements and budget. Native apps (Swift for iOS, Kotlin for Android) offer the best performance and access to platform-specific features like ARKit or Android widgets. Cross-platform frameworks like React Native and Flutter let you build for both platforms from a single codebase, cutting development time by 30-40%. For most business apps — catalogues, booking systems, customer portals — cross-platform is the practical choice. We recommend native only when you need hardware-intensive features like real-time video processing or complex animations.",
    },
    {
      question: "Do you handle App Store and Play Store submission?",
      answer:
        "Yes, end to end. We create your developer accounts (Apple Developer Program and Google Play Console), prepare all required assets — app icons, screenshots, feature graphics, privacy policy — write the store listing copy, and submit for review. Apple's review process can take 1-3 days and occasionally requires adjustments. We handle rejections, respond to reviewer feedback, and resubmit until the app is approved. Post-launch, we manage version updates and release notes.",
    },
    {
      question: "Can you build the backend and API for my app?",
      answer:
        "Absolutely. Most apps need a backend to handle user accounts, data storage, push notifications, and business logic. We build APIs with Node.js and Express, use MongoDB or PostgreSQL for databases, and deploy on AWS or Vercel depending on scale requirements. Authentication, file uploads, payment processing, and third-party integrations are all part of our full-stack capability. We also document the API so your team or future developers can extend it.",
    },
    {
      question: "How much does it cost to develop a mobile app?",
      answer:
        "Simple apps with 5-8 screens and basic CRUD functionality start around ₹1,00,000 for a single platform. Cross-platform apps with moderate complexity — user authentication, dashboard, notifications, payment integration — typically range from ₹1,50,000 to ₹4,00,000. Complex apps with real-time features, chat, maps, or custom animations can go higher. We provide a detailed quote after the scoping session, broken down by feature so you can prioritise based on budget.",
    },
    {
      question: "Do you offer app maintenance and updates after launch?",
      answer:
        "Yes. Mobile apps require ongoing attention — OS updates can break layouts, store policies change, and users expect regular feature improvements. We offer monthly maintenance packages that cover bug fixes, OS compatibility updates, minor feature enhancements, and store listing management. For larger feature additions, we scope and quote separately. The maintenance package ensures your app stays functional and does not accumulate technical debt.",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28">
        <BreadcrumbNav
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "App Development" },
          ]}
        />
      </div>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/20 border border-blue-500/30 mb-6">
            <Smartphone className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-blue-300 tracking-wide uppercase">App Development</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            Mobile App Development —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              iOS, Android & Cross-Platform&nbsp;Apps
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
            Not every business needs an app — but when you do, it needs to work flawlessly. We build mobile applications for iOS and Android using React Native for cross-platform efficiency and Swift or Kotlin when native performance is non-negotiable. From customer-facing apps to internal business tools, we handle the full cycle: UX design, frontend development, backend API, store submission, and post-launch maintenance. Our apps are built to scale — they handle growing user bases without rewriting the architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/917838583051?text=Hi!%20I%20need%20a%20mobile%20app%20built.%20Can%20we%20discuss?" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              Discuss Your App Idea <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/services/web-development" className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Need a Web App Instead?
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">App development capabilities</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 max-w-3xl">
            We cover the full spectrum from quick MVPs to production-grade applications with complex backend systems.
          </p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-blue-900/30 border border-blue-500/20 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-blue-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Cross-Platform Apps (React Native)</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                One codebase, two platforms. React Native lets us build apps that run on both iOS and Android with near-native performance. The framework shares code across platforms while still accessing native device features — camera, GPS, push notifications, biometric authentication. For most business apps, this approach cuts development time by 30-40% compared to building two separate native apps.{" "}
                <Link to="/services/web-development" className="text-cyan-400 hover:underline">We use React for web apps too →</Link>
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-indigo-900/30 border border-indigo-500/20 flex items-center justify-center">
                  <Code className="w-5 h-5 text-indigo-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Native iOS & Android Development</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                For apps that demand absolute performance — real-time video, complex animations, heavy computation, or deep OS integration — we build native. Swift and SwiftUI for iOS, Kotlin and Jetpack Compose for Android. Native development gives you access to the latest platform APIs on day one and delivers the smoothest possible user experience. We typically recommend native for consumer-facing apps where user experience is the primary differentiator.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </span>
                <h3 className="text-xl font-bold text-white">Backend & API Development</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every app needs a brain. We build RESTful APIs and real-time WebSocket servers using Node.js, Express, and MongoDB or PostgreSQL. User authentication (email, social login, OTP), file storage (AWS S3 or Cloudinary), payment processing (Razorpay, Stripe), and push notifications (Firebase Cloud Messaging) are standard integrations. We design the backend architecture to handle horizontal scaling so your app does not hit a wall when traffic grows.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-800/40 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-emerald-900/30 border border-emerald-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </span>
                <h3 className="text-xl font-bold text-white">App Store Submission & Maintenance</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Getting an app approved is not just clicking "submit". Apple has strict Human Interface Guidelines and Google has its own policies around permissions, data collection, and content. We prepare all store assets, write ASO-optimised listings, handle the review process, and manage version updates post-launch. Monthly maintenance keeps your app compatible with the latest iOS and Android versions.{" "}
                <Link to="/services/design-branding" className="text-cyan-400 hover:underline">We design app interfaces too →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 lg:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">How an app project works</h2>
          <p className="text-gray-400 text-base md:text-lg mb-12 text-center">From idea validation to App Store approval.</p>
          <ol className="space-y-5">
            {[
              { num: "01", title: "Scope & UX design", desc: "We map out every screen, user flow, and API endpoint. Clickable Figma prototypes let you test the app experience before development begins. This phase catches 80% of design issues early." },
              { num: "02", title: "Sprint-based development", desc: "We build in 2-week sprints. At the end of each sprint, you get a working build on your test device. Feedback is incorporated immediately — no waiting until the end to see what we built." },
              { num: "03", title: "QA & beta testing", desc: "Multi-device testing on real iPhones, Android phones, and tablets. We use TestFlight for iOS and internal testing tracks for Android. Performance profiling, crash monitoring, and edge-case testing happen here." },
              { num: "04", title: "Store submission & launch", desc: "We prepare all assets, submit to both stores, handle any review feedback, and coordinate the public launch. Post-launch monitoring for the first 30 days catches any issues early." },
            ].map((step) => (
              <li key={step.num} className="flex gap-5 items-start p-5 rounded-2xl bg-navy-800/30 border border-white/5">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">{step.num}</span>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CASE STUDIES */}
      <CaseStudyGrid heading="App & web application projects" subheading="Interactive applications we have built.">
        <CaseStudyCard
          title="Corporate gifting platform — React SPA"
          client="Kamlesh Group"
          industry="Corporate Gifting"
          location="Delhi"
          stack={["React", "Vite", "Tailwind CSS", "WhatsApp API"]}
          results={[
            "Interactive product showcase with filtering and search",
            "Bulk order enquiry flow integrated with WhatsApp",
            "Progressive web app capabilities for mobile users",
          ]}
          href="/portfolio"
        />
        <CaseStudyCard
          title="Performance optimisation — web application"
          client="Bento Sushi"
          industry="Food & Beverage"
          location="Canada (remote)"
          stack={["WordPress", "WP Rocket", "Core Web Vitals"]}
          results={[
            "Significant reduction in page load times across all pages",
            "Fixed layout shift issues affecting mobile user experience",
            "Implemented lazy loading and image optimisation pipeline",
          ]}
          href="/portfolio"
        />
      </CaseStudyGrid>

      {/* WHO IT'S FOR + PRICING */}
      <section className="py-16 lg:py-20 bg-navy-800/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">App development pricing</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            App costs depend heavily on complexity. A simple informational app is a fraction of a marketplace with real-time messaging. Here are starting ranges.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: "MVP / Simple App", range: "₹1,00,000 – ₹2,00,000", note: "5-8 screens, basic auth, CRUD operations, single platform" },
              { label: "Business App", range: "₹2,00,000 – ₹4,00,000", note: "Cross-platform, payments, notifications, admin dashboard" },
              { label: "Complex Application", range: "₹4,00,000+", note: "Real-time features, chat, maps, multi-role system" },
            ].map((tier, i) => (
              <div key={i} className="p-6 rounded-2xl bg-navy-800/40 border border-white/5 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{tier.label}</h3>
                <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-3">{tier.range}</div>
                <p className="text-gray-500 text-sm">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        heading="App development FAQs"
        subheading="Technical and business questions about mobile app projects."
        items={faqItems}
      />

      {/* CTA */}
      <CtaBanner
        heading="Have an app idea? Let us build it."
        sub="Free scoping session — we will tell you what it takes to build, how long, and how much."
        whatsappNumber="917838583051"
        phone="+91-78385-83051"
        whatsappMessage="Hi! I need a mobile app built. Can we discuss?"
      />
    </>
  );
};

export default AppDevelopmentPage;
