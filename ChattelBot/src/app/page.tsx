"use client";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/ui/faq";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { useEffect, useRef, useState } from "react";

// import "../styles/globals.css";

const FloatingChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "pt7mwRjmZrWKSHNlDqBGD");

    // Add configuration for the widget
    script.setAttribute(
      "config",
      JSON.stringify({
        floatingButtonStyle: {
          color: "#1d1e21", // Button color
          backgroundColor: "#fafaf8", // Button background
          right: "20px", // Position from right
          bottom: "20px", // Position from bottom
          size: "60px", // Button size
        },
        chatWindowStyle: {
          right: "20px", // Position from right
          bottom: "90px", // Position from bottom
          width: "400px", // Chat width
          height: "600px", // Chat height
          backgroundColor: "#ffffff", // Chat background
        },
      })
    );

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default function Home() {
  // Properly type the ref as HTMLElement

  const videoRef = useRef<HTMLVideoElement>(null); // Ref for the video element
  const overlayVideoRef = useRef<HTMLVideoElement>(null); // Add this line
  const [isExpanded, setIsExpanded] = useState(false); // State to track if the video is expanded

  const closeOverlay = () => {
    if (overlayVideoRef.current && videoRef.current) {
      // Sync current time before closing
      videoRef.current.currentTime = overlayVideoRef.current.currentTime;
      // Keep playing but mute when minimized
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
    setIsExpanded(false);
  };

  // Initialize video settings
  useEffect(() => {
    const initializeVideo = async () => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.loop = true;

        try {
          // Attempt to play immediately
          await videoRef.current.play();
        } catch (err) {
          // If autoplay fails, set up a user interaction fallback
          const handleFirstInteraction = () => {
            videoRef.current?.play();
            document.removeEventListener("click", handleFirstInteraction);
          };
          document.addEventListener("click", handleFirstInteraction);
        }
      }
    };

    initializeVideo();
  }, []);

  // Sync playback between videos
  useEffect(() => {
    if (!isExpanded && videoRef.current && overlayVideoRef.current) {
      videoRef.current.currentTime = overlayVideoRef.current.currentTime;
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.play().catch(() => {});
    }
  }, [isExpanded]);

  const handleVideoClick = () => {
    setIsExpanded(true);
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.currentTime; // Maintain position
      videoRef.current.play().catch(() => {});
    }
  };

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isExpanded && !overlayVideoRef.current?.contains(e.target as Node)) {
        closeOverlay(); // Changed from setIsExpanded(false)
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded]);

  // Your existing ESC handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeOverlay(); // Changed from setIsExpanded(false)
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#fafaf8]">
      {/* Floating Chatbot - Added here */}
      <FloatingChatbot />

      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center">
          <Image
            src="/images/logo-with-text.svg"
            alt="Roundtable Logo"
            width={120}
            height={28}
            className="h-7 w-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="mailto:chattelbot.com@gmail.com"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Contact
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              const pricingSection = document.getElementById("pricing");
              if (pricingSection) {
                // Check if the element exists
                pricingSection.scrollIntoView({
                  behavior: "smooth", // Smooth scroll
                  block: "start", // Align to the top of the section
                });
              }
            }}
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="tel:+16474509027" // No spaces, dashes, or parentheses
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Call now
          </Link>
        </div>
      </header>
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1e21] leading-tight">
              Monetize Every Interaction
            </h1>
            <p className="mt-6 text-xl text-[#1d1e21]">
              Chattelbot, the{" "}
              <span className="relative inline-block group">
                <span className="bg-yellow-200 bg-opacity-70 px-1 transform -skew-x-6 inline-block">
                  AI-powered solution
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>{" "}
              for businesses that value their time. Get back to what matters,
              while our AI chatbot handles the rest{" "}
              <span className="relative inline-block group">
                <span className="bg-yellow-200 bg-opacity-70 px-1 transform -skew-x-6 inline-block">
                  On Autopilot 24/7.
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </p>
            <div className="mt-8 flex items-center space-x-6">
              <Button
                className="bg-[#1d1e21] hover:bg-black text-white rounded-md px-6 py-5 text-lg flex items-center"
                onClick={() =>
                  window.open(
                    "https://cal.com/chattelbot/15min",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Book a call
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  className="ml-2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>

              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-[#1d1e21] flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">Free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-[#1d1e21] flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">Personalized demo</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute right-0 top-4">
              <div className="logo-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="relative">
              {/* Inline Video */}
              <video
                ref={videoRef}
                className={`w-full h-auto rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                  isExpanded ? "hidden" : ""
                }`}
                onClick={handleVideoClick}
                muted
                playsInline
              >
                <source src="/images/chattelbot-demo.mp4" type="video/mp4" />
              </video>

              {/* Overlay Video */}
              {isExpanded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={closeOverlay}
                  />
                  <div
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <video
                      ref={overlayVideoRef}
                      className="rounded-lg shadow-xl"
                      style={{ maxHeight: "90vh", maxWidth: "90vw" }}
                      controls
                      autoPlay
                      muted={false}
                      playsInline
                      onPlay={() => {
                        // Sync playback position when overlay starts playing
                        if (videoRef.current && overlayVideoRef.current) {
                          videoRef.current.currentTime =
                            overlayVideoRef.current.currentTime;
                        }
                      }}
                    >
                      <source
                        src="/images/chattelbot-demo.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Trusted By Section
      <section className="w-full bg-white py-8 border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm mb-8">
            Platforms we've helped
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <Image
              src="/images/obsurvant-logo.svg"
              alt="Obsurvant"
              width={120}
              height={32}
              className="h-6 w-auto"
            />
            <Image
              src="/images/zinklar-logo.svg"
              alt="Zinklar"
              width={120}
              height={32}
              className="h-6 w-auto"
            />
            <Image
              src="/images/respondent-logo.svg"
              alt="Respondent"
              width={120}
              height={32}
              className="h-6 w-auto"
            />
          </div>
        </div>
      </section> */}
      {/*pricing*/}
      {/* Pricing Section */}
      <section id="pricing" className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Normal Plan */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Normal Plan</h3>
              <p className="text-gray-600">Perfect for small businesses</p>
              <p className="text-4xl font-bold mt-4">
                $500<span className="text-sm font-normal mt-3">/month </span>
              </p>
              <ul className="mt-6 space-y-2 text-gray-600 text-left">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500">✔️</span>
                  24/7 automated customer engagement – answers personalized
                  questions instantly
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500">✔️</span>
                  Designed to convert visitors into leads and sales effortlessly
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500">✔️</span>
                  Reduces website clutter by providing direct answers instead of
                  requiring users to search
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500">✔️</span>
                  Weekly analytics report summarizing customer inquiries &
                  interests
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500">✔️</span>
                  Automatic lead capture & organization – builds an email list
                  for targeted follow-ups
                </li>
              </ul>
              <script async></script>

              {/* Your Custom Button */}
              {/* <Button
                className="bg-[#1d1e21] hover:bg-black text-white rounded-md px-4 py-2 mt-6"
                onClick={() => stripeButtonRef.current?.click()} // Trigger Stripe button
              >
                (Best Value)
              </Button> */}
            </div>

            {/* Humanoid Plan */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Humanoid Plan</h3>
              <p className="text-gray-600">Advanced lead generation</p>
              <p className="text-4xl font-bold mt-4">
                $1000<span className="text-sm font-normal mt-3">/month </span>
              </p>
              <ul className="mt-6 space-y-2 text-gray-600 text-left">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500">✔️</span>
                  Everything in the Basic Plan, plus:
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500">✔️</span>
                  AI chatbot mimics human typing behavior, increasing trust &
                  engagement
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500">✔️</span>
                  Higher lead conversion rates by making interactions feel more
                  natural
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500">✔️</span>
                  Organized database of potential leads for streamlined
                  follow-ups
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-500">✔️</span>
                  Automated newsletter generation – sends customer queries,
                  relevant updates, and industry trends
                </li>
              </ul>

              <script async></script>

              {/* <Button className="bg-[#1d1e21] hover:bg-black text-white rounded-md px-4 py-2 mt-6">
                (Premium)
              </Button> */}
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-center text-3xl font-semibold mb-16">Why us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* PASSION FOR INFO */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">PASSION FOR INFO</h3>
            <p className="text-gray-600">
              At Chattelbot, we have a passion and understanding for the world
              of information.
            </p>
            <p className="mt-4 text-gray-600">
              We don’t just make vague chatbots using GPT but instead chatbots
              designed and built to help you turn{" "}
              <span className="relative inline-block group">
                <span className="bg-yellow-200 bg-opacity-70 px-1 transform -skew-x-6 inline-block">
                  leads into paying customers.
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </p>
          </div>

          {/* BESPOKE ON BESPOKE */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">CUSTOM MADE</h3>
            <p className="text-gray-600">
              We pride ourselves on our bespoke chatbots,{" "}
              <span className="relative inline-block group">
                <span className="bg-yellow-200 bg-opacity-70 px-1 transform -skew-x-6 inline-block">
                  trained and tailored to you.
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </p>
            <ul className="mt-4 text-gray-600 text-left">
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">✔️</span>
                Your business
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">✔️</span>
                Your tone of voice
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">✔️</span>
                Your vibe
              </li>
            </ul>
            <p className="mt-4 text-gray-600">It’s all about you.</p>
          </div>

          {/* DONE FOR YOU */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">DONE FOR YOU</h3>
            <p className="text-gray-600">
              Chattelbot isn’t just your average chatbot builder, no.
            </p>
            <p className="mt-4 text-gray-600">
              We run a fully{" "}
              <span className="relative inline-block group">
                <span className="bg-yellow-200 bg-opacity-70 px-1 transform -skew-x-6 inline-block">
                  done-for-you
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>{" "}
              service to allow you to focus on what you do best whilst we help
              you keep the money pumping.
            </p>
            <p className="mt-4 text-gray-600">
              All we need from you is your services, your vision, and we do the
              rest.
            </p>
          </div>
        </div>
      </section>
      {/*faq*/}
      {/* <section className="w-full bg-[#fafaf8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Frequently Asked Questions (or just ask our AiBot)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Where can my chatbot be used?
              </h3>
              <p className="text-gray-600">
                Your chatbot's integrations can be virtually endless—from your
                landing page to WhatsApp, Notion, Slack, Zapier, and more!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                How do I get my customer data?
              </h3>ChattelBot/src/app/page.tsx
              <p className="text-gray-600">
                As soon as a lead is collected or a question is submitted, you
                can be notified and emailed straight away.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                What AI knowledge base is used?
              </h3>
              <p className="text-gray-600">
                We use a mix of ChatGPT, Gemini, Claude, and more to ensure your
                bot is always at the top of its game.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                How efficient is it?
              </h3>
              <p className="text-gray-600">
                We can create a free demo tailored to your business within 24
                hours, so you can see for yourself!
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <FAQ />

      {/* Features Section
      <section className="w-full bg-[#fafaf8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Effortless Integration
              </h3>
              <h4 className="text-gray-600 mb-4">
                Simple deployment. Instant protection.
              </h4>
              <p className="text-gray-600">
                Integrate Roundtable with minimal engineering effort, so you can
                secure your platform fast.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Explainable Results
              </h3>
              <h4 className="text-gray-600 mb-4">
                Transparent, Trustworthy Decisions.
              </h4>
              <p className="text-gray-600">
                Our models provide clear, interpretable insights, ensuring
                security decisions are understandable and auditable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Enterprise-Grade</h3>
              <h4 className="text-gray-600 mb-4">
                Built to grow with your business.
              </h4>
              <p className="text-gray-600">
                Whether you're securing a fast-growing startup or an enterprise
                with millions of users, Roundtable scales seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Get Started Section */}
      <section className="w-full h-[300px] bg-gradient-to-b from-transparent via-black/99 via-black/80 to-black text-white py-20 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Automate, Own, Convert
          </h2>
          <AnimatedButton
            href="https://cal.com/chattelbot/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </AnimatedButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <Image
                src="/images/logo-with-text-inverse.svg.png"
                alt="Roundtable Logo"
                width={120}
                height={28}
                className="h-7 w-auto mb-4 "
              />
              <p className="text-sm text-gray-500">
                Toronto,
                <br />
                Canada
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 md:mt-0">
              <div>
                <h4 className="font-medium text-sm mb-4 text-gray-400">
                  {/* Try our chatbot  */}
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:chattelbot.com@gmail.com"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-sm text-gray-500">© ChattelBot 2025</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="https://www.linkedin.com/company/Chattelbot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </Link>
              {/* <Link
                href="https://x.com/ChattelBot"
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link> */}

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/chattelbot.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
