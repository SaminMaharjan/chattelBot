import React from "react";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string; // Add target prop
  rel?: string; // Add rel prop
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  href,
  children,
  target,
  rel,
}) => {
  return (
    <div className="flex items-center justify-center">
      <a
        href={href}
        target={target} // Pass target prop
        rel={rel} // Pass rel prop
        className="bg-transparent group relative inline-flex items-center overflow-hidden rounded-full px-8 py-3 transition"
      >
        {/* Animated Gradient Ring */}
        <div className="absolute inset-0 flex items-center [container-type:inline-size]">
          <div
            className="absolute h-[100cqw] w-[100cqw] bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              animation: "spin 1s linear infinite", // Custom spin animation
            }}
          ></div>
        </div>

        {/* Inner Background */}
        <div className="absolute inset-0.5 rounded-full bg-black/90"></div>

        {/* Glow Effect */}
        <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-5s group-hover:h-2/3 group-hover:opacity-100"></div>

        {/* Button Text */}
        <div className="relative inline-flex items-center gap-2">
          <span className="font-mona mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
            {children}
          </span>
        </div>
      </a>
    </div>
  );
};

export default AnimatedButton;
