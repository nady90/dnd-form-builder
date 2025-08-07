import React from "react";

export default function AddIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 46 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-[#2B7FFF] group-hover:fill-white group-hover:shadow-2xl"
        d="M26.4286 3.59375C26.4286 1.69238 24.8965 0.15625 23.0001 0.15625C21.1036 0.15625 19.5715 1.69238 19.5715 3.59375V19.0625H4.14293C2.2465 19.0625 0.714355 20.5986 0.714355 22.5C0.714355 24.4014 2.2465 25.9375 4.14293 25.9375H19.5715V41.4062C19.5715 43.3076 21.1036 44.8438 23.0001 44.8438C24.8965 44.8438 26.4286 43.3076 26.4286 41.4062V25.9375H41.8572C43.7536 25.9375 45.2858 24.4014 45.2858 22.5C45.2858 20.5986 43.7536 19.0625 41.8572 19.0625H26.4286V3.59375Z"
      />
    </svg>
  );
}
