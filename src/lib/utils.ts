import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomGradient() {
  const linearGradients = [
    "to-blue-400 from-gray-200",
    "from-gray-200 to-orange-300",
    "to-green-100 from-green-500",
    "to-purple-300 from-gray-200",
    "to-pink-500 from-gray-200",
    "to-red-600 from-red-100",
    "to-sky-600 from-sky-200",
  ];
  const gradientLength = linearGradients.length;
  return linearGradients[Math.floor(Math.random() * (gradientLength - 1))];
}
