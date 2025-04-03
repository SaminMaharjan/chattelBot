"use client"; // Add this if you're using client-side interactivity (e.g., hooks, event handlers)
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/ui/faq";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#fafaf8]">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center">
          <Image
            src="/images/logo-with-text.png"
            alt="Roundtable Logo"
            width={120}
            height={28}
            className="h-7 w-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/customers"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Contact
          </Link>
          <Link
            href="/#pricing"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="tel:+16474509027"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Call now
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">About Us</h2>

        {/* Mission Section */}
        <div className="mb-16 text-center">
          {/* <h3 className="text-xl font-semibold mb-4">Our Mission</h3> */}
          <p className="text-gray-600">
            We're trying to bridge the gap between businesses and the new age of
            artificial intelligence (AI). Our mission is simply just to connect
            people with AI, give businesses of all sizes the power of AI, making
            technology accessible and beneficial for everyone. We specialize in
            developing top-class, customized AI chatbots designed to enhance
            your customer interactions. Our chatbots are not just about
            answering FAQs; they are intelligent tools capable of performing a
            variety of tasks, such as booking appointments, gathering data,
            generating leads, and more, all while providing a seamless and
            engaging user experience. We understand that everyone, from business
            owners to their customers, wants to leverage AI to make their
            operations more efficient and their interactions more meaningful. By
            providing affordable AI solutions, we aim to future-proof your
            business and help you thrive in the digital age.
          </p>

          <p className="mt-4 text-gray-600">
            Book a call now for a customized AI bot demo for your business.
          </p>
          {/* Centered Button */}
          <div className="mt-6 flex justify-center">
            <Button
              className="bg-[#1d1e21] hover:bg-black text-white rounded-md px-6 py-3 text-lg flex items-center"
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
          </div>
        </div>

        {/* Founders Section */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-center">
            Meet the Founders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src="/images/NSBE-8.jpg" // Replace with your image
                  alt="Founder 1"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold">Samin</h4>
              <p className="text-gray-600">
                Co-Founder. Eng student @TMU with a passion for technology,
                automation, and people. Experienced and interested in AI-driven
                projects, interactive media, and creating. Dedicated to helping
                businesses optimize and efficiently improve customer engagement
                with smart AI solutions. Always looking to meet new interesting
                humans—reach out!
              </p>
              <div className="mt-2 flex space-x-4">
                {/* LinkedIn Icon */}
                <Link
                  href="https://www.linkedin.com/in/saminmaharjan/"
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

                {/* GitHub Icon */}
                <Link
                  href="https://github.com/SaminMaharjan" // Replace with your GitHub link
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
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.912.832.091-.647.349-1.088.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.376.202 2.394.099 2.646.64.698 1.024 1.591 1.024 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src="/images/gary.jpg" // Replace with your image
                  alt="Founder 2"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold">Gurkeerat</h4>
              <p className="text-gray-600">
                Co-Founder. CS student @University of Toronto, specializing in
                artificial intelligence, machine learning, and software
                development. Passionate about creating intelligent systems that
                enhance efficiency and customer interactions. Focused on making
                AI intuitive and easy to integrate into business operations.
              </p>
              <div className="mt-2 flex space-x-4">
                {/* LinkedIn Icon */}
                <Link
                  href="https://www.linkedin.com/in/gurkeerat-sappal-2924b5316/"
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
              </div>
            </div>
          </div>
        </div>
      </section>

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
                src="/images/logo-with-text-inverse.png"
                alt="Roundtable Logo"
                width={120}
                height={28}
                className="h-7 w-auto mb-4"
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
                  Try our chatbot{" "}
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Home
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
                href="https://www.instagram.com/chattelbot"
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
