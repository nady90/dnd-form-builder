"use client";
import {
  easeInOut,
  motion,
  TargetAndTransition,
  Transition,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { ReactNode, RefObject, useRef } from "react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-screen overflow-hidden">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

function SectionOne() {
  const sectionOneRef = useRef(null);

  return (
    <div
      ref={sectionOneRef}
      className="relative h-screen min-h-screen overflow-hidden"
    >
      <HeroText />
      <BackgroundBlob />
      <MainHeroImage sectionRef={sectionOneRef} />
      <FloatingIconsContainer sectionRef={sectionOneRef} />
    </div>
  );
}

function HeroText() {
  return (
    <div className="absolute top-2/12 left-1/2 z-[9999999] -translate-x-1/2 text-center text-[2.3vw] font-medium text-[#020618]">
      <h1 className="leading-[1.2em]">
        <motion.span
          className="inline-block"
          initial={{ y: -26, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 100,
          }}
        >
          Simple Drag & Drop forms.
        </motion.span>
        <br />
        <motion.span
          className="inline-block"
          initial={{ y: -26, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 100,
            transition: {
              delay: 0.2,
            },
          }}
        >
          With the power of AI.
        </motion.span>
      </h1>
      <motion.div
        initial={{ y: 26, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 100,
          transition: {
            delay: 0.4,
          },
        }}
      >
        <Button className="cursor-pointer rounded-sm bg-[#2B7FFF] px-4 py-2 text-base transition-all hover:bg-blue-600">
          Try Now
        </Button>
      </motion.div>
    </div>
  );
}

function BackgroundBlob() {
  return (
    <div className="absolute bottom-0 left-1/2 z-0 h-5/12 w-8/12 -translate-x-1/2 bg-linear-0 from-[#DBEAFE] to-[#3D82EC] blur-[250px]"></div>
  );
}

function MainHeroImage({ sectionRef }: { sectionRef: RefObject<null> }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0.5, 0.9], [0, 300], {
    ease: easeInOut,
  });

  const inputY = useTransform(scrollYProgress, [0.5, 1], [0, 206], {
    ease: easeInOut,
  });

  const inputScale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5], {
    ease: easeInOut,
  });

  const inputOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0], {
    ease: easeInOut,
  });

  return (
    <motion.div
      style={{ y }}
      className="absolute bottom-[-20px] left-1/2 z-10 h-[55%] w-[60%] -translate-x-1/2 overflow-hidden rounded-t-[40px] border-[20px] border-white bg-white"
    >
      <Image
        className="h-full w-full rounded-t-[18px] object-cover"
        src={"/images/hero-img-1.png"}
        width={600}
        height={500}
        alt="Hero image"
      />

      <motion.div
        style={{ y: inputY, scale: inputScale, opacity: inputOpacity }}
        className="pointer-events-none absolute top-4/12 left-1/2 flex w-8/12 max-w-[940px] -translate-x-1/2 items-center gap-x-5 bg-[#F2F2F2] px-6 py-2 text-[1.5vw] font-medium shadow-2xl"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 12V3.85L4.4 6.45L3 5L8 0L13 5L11.6 6.45L9 3.85V12H7ZM2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196666 15.0217 0.000666667 14.5507 0 14V11H2V14H14V11H16V14C16 14.55 15.8043 15.021 15.413 15.413C15.0217 15.805 14.5507 16.0007 14 16H2Z"
            fill="black"
          />
        </svg>
        <span>What are we working on today?</span>
        <svg
          className="ml-auto"
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.978 7.815L0 15.63L1.136 8.815H6.316V6.815H1.136L0 0L14.978 7.815Z"
            fill="black"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

function FloatingIconsContainer({
  sectionRef,
}: {
  sectionRef: RefObject<null>;
}) {
  return (
    <div ref={sectionRef} className="absolute z-50 h-full w-full">
      {/* Right Icons */}
      <>
        <FloatingIcon
          sectionRef={sectionRef}
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          appearTransition={{ duration: 0.4, type: "spring" }}
          rightValues={[13, 50]}
          topValues={[30, 110]}
          hoverAnimation={{
            y: [null, -20, 10, -20],
            rotate: [null, 10, -5],
            transition: {
              repeat: Infinity,
              delay: 1,
              repeatType: "reverse",
              duration: 7,
              ease: "easeInOut",
            },
          }}
          iconRotation="rotate-[-35deg]"
        >
          <svg
            width="32"
            height="27"
            viewBox="0 0 32 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.4525 17.0859C26.1662 10.8847 26.5385 7.70166 30.1418 2.68897C24.4311 5.03404 21.2484 4.65939 15.7448 0.999754C18.0311 7.20093 17.6589 10.384 14.0556 15.3967C19.7662 13.0516 22.949 13.4263 28.4525 17.0859ZM8.19766 13.4931C7.05345 10.3912 7.24011 8.80031 9.04227 6.29463C6.18749 7.46784 4.59662 7.28118 1.8438 5.45003C2.98801 8.55195 2.80135 10.1428 0.999193 12.6485C3.85397 11.4753 5.44483 11.6619 8.19766 13.4931ZM20.7982 25.3098C20.2261 23.7588 20.3193 22.9646 21.2205 21.7105C19.7919 22.297 18.9977 22.2038 17.6213 21.2882C18.1934 22.8392 18.1002 23.6334 17.199 24.8875C18.6275 24.301 19.4218 24.3942 20.7982 25.3098Z"
              stroke="#EF15D2"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </FloatingIcon>

        <FloatingIcon
          sectionRef={sectionRef}
          initial={{ opacity: 0, x: 400, top: "75%" }}
          animate={{ opacity: 100, x: 0, top: "55%" }}
          appearTransition={{ duration: 0.4, type: "spring" }}
          rightValues={[9, 45]}
          topValues={[55, 110]}
          hoverAnimation={{
            y: [null, -18, 10, -20],
            rotate: [null, -10, 7],
            transition: {
              repeat: Infinity,
              delay: 1.2,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut",
            },
          }}
          iconRotation="rotate-[-5deg]"
        >
          <svg
            width="33"
            height="29"
            viewBox="0 0 33 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.375L3.375 5.75L8.125 1M1 14.4583L3.375 16.8333L8.125 12.0833M1 25.5417L3.375 27.9167L8.125 23.1667M13.6667 14.4583L31.0833 14.4583M13.6667 25.5417L31.0833 25.5417M13.6667 3.375L31.0833 3.375"
              stroke="#05A347"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </FloatingIcon>

        <FloatingIcon
          sectionRef={sectionRef}
          initial={{ opacity: 0, x: 400, top: "100%" }}
          animate={{ opacity: 100, x: 0, top: "80%" }}
          appearTransition={{ duration: 0.4, type: "spring" }}
          rightValues={[13, 42]}
          topValues={[80, 110]}
          hoverAnimation={{
            y: [null, -11, 5, -10],
            rotate: [null, 10, -7],
            transition: {
              repeat: Infinity,
              delay: 0.8,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut",
            },
          }}
          iconRotation="rotate-[26deg]"
        >
          <svg
            width="33"
            height="25"
            viewBox="0 0 33 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2163 11.9893C7.69964 11.2087 5.06516 12.2901 3.7344 14.4285L0.838829 13.5303L-0.000569545 16.2365L2.895 17.1346C2.782 19.6508 4.34204 22.0332 6.85875 22.8139C9.37546 23.5945 12.0099 22.5131 13.3407 20.3747L27.0608 24.6305L27.9002 21.9243L14.1801 17.6686C14.2931 15.1524 12.7331 12.77 10.2163 11.9893ZM7.69815 20.1077C6.20977 19.6461 5.36974 18.0506 5.83141 16.5622C6.29308 15.0738 7.88857 14.2338 9.37695 14.6955C10.8653 15.1571 11.7054 16.7526 11.2437 18.241C10.782 19.7294 9.18652 20.5694 7.69815 20.1077ZM29.2016 7.49547C29.3146 4.97933 27.7546 2.59686 25.2379 1.81622C22.7212 1.03558 20.0867 2.11698 18.7559 4.25539L5.03582 -0.000362128L4.19642 2.70578L17.9166 6.96153C17.8035 9.47767 19.3636 11.8601 21.8803 12.6408C24.397 13.4214 27.0315 12.34 28.3622 10.2016L31.2578 11.0998L32.0972 8.39363L29.2016 7.49547ZM22.7197 9.93464C21.2313 9.47297 20.3913 7.87748 20.853 6.3891C21.3146 4.90072 22.9101 4.06069 24.3985 4.52236C25.8869 4.98403 26.7269 6.57952 26.2652 8.0679C25.8036 9.55627 24.2081 10.3963 22.7197 9.93464Z"
              fill="black"
            />
          </svg>
        </FloatingIcon>
      </>

      {/* Left Icons */}
      <>
        <FloatingIcon
          sectionRef={sectionRef}
          initial={{ opacity: 0, x: -500, top: "0%" }}
          animate={{ opacity: 100, x: 0, top: "30%" }}
          appearTransition={{ duration: 0.4, type: "spring" }}
          rightValues={[87, 42]}
          topValues={[30, 110]}
          hoverAnimation={{
            y: [null, -11, 5, -10],
            rotate: [null, 10, -7],
            transition: {
              repeat: Infinity,
              delay: 0.8,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut",
            },
          }}
          iconRotation="rotate-[-38deg]"
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.83613 20.0148L5.36066 19.854C6.54908 19.4865 7.54332 18.6593 8.1273 17.5567L11.9265 10.3537C12.4403 9.37701 13.2913 8.50275 14.3926 8.55349C16.0565 8.63223 17.5425 9.8376 16.3576 12.8712L15.5657 15.5427L28.2784 10.1562C30.72 9.45111 32.6287 12.9134 30.1048 14.6875L22.6227 17.8686C23.8009 20.0072 26.9049 30.3153 19.7142 31.0462C18.5892 31.3216 16.2449 31.3573 14.3778 31.0403C12.5969 30.7392 10.7771 31.9106 10.1112 32.0485M15.8434 2.07513C15.2372 3.25187 15.662 4.6782 16.7937 5.26112C17.924 5.84332 19.3333 5.36169 19.9394 4.18495C20.5455 3.00822 20.1194 1.58116 18.9891 0.998966C17.8574 0.416047 16.4495 0.898397 15.8434 2.07513ZM15.8434 2.07513L14.9369 1.60822L13.8008 1.1513M4.17396 5.73361C5.36085 6.32003 5.78327 7.70597 5.21357 8.85694C4.64315 10.0093 3.26016 10.5401 2.07187 9.95299C1.50805 9.66839 1.0787 9.17358 0.876436 8.57527C0.674168 7.97697 0.715193 7.32313 0.99066 6.75481C1.56036 5.60383 2.98566 5.14648 4.17396 5.73361ZM4.17396 5.73361L5.2671 3.92256M9.7962 0.983585L9.11334 1.17863L8.47821 1.40895"
              stroke="#B1873A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </FloatingIcon>

        <FloatingIcon
          sectionRef={sectionRef}
          initial={{ opacity: 0, x: -400, top: "75%" }}
          animate={{ opacity: 100, x: 0, top: "55%" }}
          appearTransition={{ duration: 0.4, type: "spring" }}
          rightValues={[91, 42]}
          topValues={[55, 110]}
          hoverAnimation={{
            y: [null, -11, 5, -10],
            rotate: [null, 10, -7],
            x: [null, 15],
            transition: {
              repeat: Infinity,
              delay: 0.8,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut",
            },
          }}
          iconRotation="rotate-[-14deg]"
        >
          <svg
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.94346 6.78423L18.3874 2.56187C19.6342 2.10183 20.7094 1.70514 21.612 1.49957C22.5782 1.27987 23.5638 1.22554 24.5376 1.65903C25.5127 2.09199 26.1098 2.84788 26.5643 3.69835C26.9886 4.49309 27.3743 5.53838 27.8215 6.75059L28.3344 8.14065C28.4683 8.50352 28.4484 8.90622 28.2792 9.26018C28.1099 9.61414 27.8052 9.89035 27.4319 10.0281C27.0587 10.1658 26.6476 10.1537 26.289 9.99448C25.9304 9.83527 25.6538 9.54197 25.5199 9.17911L25.0403 7.87934C24.5501 6.55084 24.2303 5.69266 23.9098 5.09276C23.6077 4.5296 23.4068 4.39234 23.2615 4.32782C23.1162 4.2633 22.8773 4.2053 22.2368 4.34993C21.5567 4.50446 20.6705 4.82832 19.3041 5.33249L15.0823 6.89017L23.664 30.1492C23.7978 30.512 23.778 30.9148 23.6087 31.2687C23.4395 31.6227 23.1347 31.8989 22.7615 32.0366C22.3883 32.1743 21.9771 32.1622 21.6186 32.003C21.26 31.8438 20.9833 31.5505 20.8494 31.1876L12.2678 7.92863L8.04595 9.48631C6.67949 9.99048 5.79674 10.3193 5.17788 10.644C4.59691 10.9501 4.45297 11.1493 4.38438 11.2927C4.31579 11.4362 4.25217 11.6711 4.38822 12.2955C4.53369 12.9584 4.84839 13.82 5.33856 15.1485L5.81812 16.4483C5.952 16.8112 5.93214 17.2139 5.76289 17.5678C5.59365 17.9218 5.28889 18.198 4.91566 18.3357C4.54243 18.4734 4.1313 18.4613 3.77272 18.3021C3.41413 18.1429 3.13747 17.8496 3.00359 17.4867L2.49071 16.0967C2.04345 14.8845 1.65778 13.8392 1.46423 12.9593C1.25743 12.0174 1.21995 11.0535 1.68071 10.0923C2.14097 9.12975 2.92428 8.5314 3.80161 8.07091C4.62147 7.64095 5.69662 7.24426 6.94346 6.78423Z"
              fill="black"
            />
            <path
              d="M15.2207 33.2641L29.2934 28.0718"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </FloatingIcon>

        <FloatingIcon
          sectionRef={sectionRef}
          initial={{ opacity: 0, x: -400, top: "100%" }}
          animate={{ opacity: 100, x: 0, top: "80%" }}
          appearTransition={{ duration: 0.4, type: "spring" }}
          rightValues={[85, 38]}
          topValues={[80, 110]}
          hoverAnimation={{
            y: [null, 11, -5, 10],
            rotate: [null, 10, -7],
            x: [null, -20],
            transition: {
              repeat: Infinity,
              delay: 0.8,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut",
            },
          }}
          iconRotation="rotate-[8deg]"
        >
          <svg
            width="33"
            height="34"
            viewBox="0 0 33 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.3445 13.0383C22.03 12.9707 20.7743 13.1668 19.5948 13.5696L18.8103 9.11165L24.7188 3.78138C25.5982 3.01553 25.6703 1.6143 24.8763 0.718898C24.0823 -0.176501 22.6952 -0.242068 21.8138 0.561344L15.9054 5.89162L2.77291 2.14541L0.631286 4.07746L11.0761 10.2346L5.16686 15.5793L1.61035 14.8894L0.000327646 16.3418L4.46325 19.1206L6.78306 23.8603L8.37864 22.4071L8.07328 18.7704L13.9803 13.469L15.3081 16.3762C14.0256 17.7965 13.1722 19.5513 12.8469 21.437C12.5215 23.3228 12.7376 25.2621 13.4701 27.03C14.2025 28.7979 15.4213 30.3218 16.9849 31.4249C18.5486 32.528 20.393 33.1651 22.3041 33.2623C27.8946 33.5499 32.6487 29.261 32.9363 23.6705C33.2239 18.08 28.935 13.3259 23.3445 13.0383ZM22.4527 30.3731C18.4657 30.168 15.3964 26.7657 15.6015 22.7787C15.8066 18.7917 19.2089 15.7223 23.1959 15.9275C27.1829 16.1326 30.2523 19.5349 30.0471 23.5219C29.842 27.5089 26.4397 30.5782 22.4527 30.3731ZM23.528 23.5486L23.8439 17.4092L21.677 17.2977L21.3054 24.5205L26.3598 27.9091L27.5339 26.2025L23.528 23.5486Z"
              fill="#2B7FFF"
            />
          </svg>
        </FloatingIcon>
      </>
    </div>
  );
}

function FloatingIcon({
  sectionRef,
  children,
  initial,
  animate,
  appearTransition,
  rightValues,
  topValues,
  hoverAnimation,
  iconRotation,
}: {
  sectionRef: RefObject<null>;
  children: ReactNode;
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  appearTransition: Transition;
  rightValues: [number, number];
  topValues: [number, number];
  hoverAnimation: TargetAndTransition;
  iconRotation: string;
}) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const right = useTransform(scrollYProgress, [0.5, 0.9], rightValues, {
    ease: easeInOut,
  });
  const rightPercentage = useTransform(right, (v) => `${v}%`);

  const top = useTransform(scrollYProgress, [0.5, 0.9], topValues, {
    ease: easeInOut,
  });
  const topPercentage = useTransform(top, (v) => `${v}%`);

  const opacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0.4], {
    ease: easeInOut,
  });

  return (
    // Initial animation on page load & Scroll-based animation
    <motion.div
      initial={initial}
      animate={animate}
      transition={appearTransition}
      className="absolute -translate-x-1/2"
      style={{
        right: rightPercentage,
        top: topPercentage,
        opacity: opacity,
      }}
    >
      {/* Hover animation */}
      <motion.div
        animate={hoverAnimation}
        className={`flex h-[60px] w-[60px] ${iconRotation} items-center justify-center rounded-[10px] bg-white shadow-2xl`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function SectionTwo() {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-[#F9FBFC] py-14 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
        className="mb-[14px] inline-flex h-[28px] w-[28px] items-center justify-center rounded-[6px] bg-[#2B7FFF]"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.82519 0.716145C10.0522 0.489122 10.3217 0.309031 10.6183 0.186155C10.9148 0.0632787 11.2327 2.32244e-05 11.5538 6.39398e-09C11.8748 -2.32116e-05 12.1927 0.0631863 12.4893 0.18602C12.7859 0.308853 13.0554 0.488905 13.2824 0.715895C13.5095 0.942885 13.6896 1.21237 13.8124 1.50896C13.9353 1.80555 13.9986 2.12343 13.9986 2.44447C13.9986 2.7655 13.9354 3.0834 13.8126 3.38001C13.6897 3.67661 13.5097 3.94612 13.2827 4.17314L12.8317 4.62364L9.37469 1.16664L9.82519 0.716145ZM8.66769 1.87414L1.17869 9.36414C0.926539 9.61614 0.752563 9.93561 0.67769 10.2841L0.0111902 13.3941C-0.0063864 13.4758 -0.00321615 13.5606 0.0204113 13.6407C0.0440387 13.7209 0.0873701 13.7938 0.146447 13.8529C0.205523 13.912 0.278461 13.9553 0.358598 13.9789C0.438734 14.0026 0.523513 14.0057 0.60519 13.9881L3.71519 13.3216C4.06372 13.2468 4.3832 13.0728 4.63519 12.8206L12.1252 5.33065L8.66769 1.87414Z"
            fill="white"
          />
        </svg>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        className="text-xl text-[2.4vw]"
      >
        Fully customizable forms.
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.2 },
        }}
        className="mb-[24px] max-w-[400px] text-[1.0vw] font-light"
      >
        Customize the functionlaity, appearance or structure of your forms.
      </motion.h3>
      <motion.div className="flex w-[66%] max-w-[792px] flex-col gap-y-2">
        {/* TOP DIV */}
        <motion.div className="flex flex-row gap-x-4">
          <motion.div className="relative basis-1/3 overflow-hidden rounded-[10px] border border-[#D9D9D9]">
            <div className="via8[#464646/30] absolute h-full w-full bg-linear-180 from-[#545454/0] via-50% to-black to-80%">
              <p className="absolute bottom-3 left-4 w-11/12 text-left text-[0.7vw] text-white">
                <span className="font-medium text-[#2266FF]">
                  Input variety.
                </span>{" "}
                More than 15 different types of inputs.
              </p>
            </div>
            <Image
              src={"/images/topLeft.gif"}
              width={300}
              height={300}
              alt="types of inputs"
            />
          </motion.div>
          <motion.div className="relative h-[237px] basis-2/3 rounded-[10px] border border-[#D9D9D9] bg-linear-180 from-[#3A52A1] to-[#FFFFFF]">
            <div className="absolute top-3 left-1/2 h-[70%] w-[70%] -translate-x-1/2 overflow-hidden rounded-[12px]">
              <Image
                className="h-full w-full object-contain"
                src={"/images/layout.gif"}
                width={600}
                height={300}
                alt="layout example"
              />
            </div>
            <div className="absolute bottom-3 left-6 max-w-[388px] text-left text-[0.7vw] leading-[1.2] font-light text-[#0A0A0A]">
              <p>
                <span className="font-medium text-[#2266FF]">
                  Layout control.
                </span>{" "}
                Easily decide the size and alignment of your elements in just a
                few clicks.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM DIV */}
        <motion.div className="flex flex-row gap-x-4">
          <motion.div className="relative h-[237px] basis-2/3 rounded-[10px] border border-[#D9D9D9] bg-linear-180 from-[#653AA1] to-[#FFFFFF]">
            <div className="absolute top-3 left-1/2 h-[70%] w-[70%] -translate-x-1/2 overflow-hidden rounded-[12px]">
              <Image
                className="h-full w-full object-contain"
                src={"/images/dndGif.gif"}
                width={600}
                height={300}
                alt="layout example"
              />
            </div>
            <div className="absolute bottom-3 left-6 max-w-[480px] text-left text-[0.7vw] leading-[1.2] font-light text-[#0A0A0A]">
              <p>
                <span className="font-medium text-[#2266FF]">Drag & Drop.</span>{" "}
                Seamlessly place, move, and organize your elements across the
                layout with simple, natural gestures.
              </p>
            </div>
          </motion.div>
          <motion.div className="relative basis-1/3 overflow-hidden rounded-[10px] border border-[#D9D9D9]">
            <div className="via8[#464646/30] absolute h-full w-full bg-linear-180 from-[#545454/0] via-50% to-black to-80%">
              <p className="absolute bottom-3 left-4 w-11/12 text-left text-[0.7vw] text-white">
                <span className="font-medium text-[#2266FF]">
                  Edit everything.
                </span>{" "}
                Change the field type, update values, apply custom CSS, and
                tweak every property to perfect your design.
              </p>
            </div>
            <Image
              src={"/images/bottomRight.gif"}
              width={300}
              height={300}
              alt="types of inputs"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function SectionThree() {
  const sectionThreeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionThreeRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [30, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [250, 0]);

  return (
    <div
      ref={sectionThreeRef}
      className="flex h-screen w-full flex-col items-center overflow-hidden bg-linear-180 from-black via-[#3B79C4] to-[#3A71C4] pt-14 text-center text-white perspective-distant transform-3d"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
        className="mb-[14px] inline-flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[6px] bg-[#2B7FFF]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.754 10C15.72 10 16.504 10.784 16.504 11.75V16.499C16.504 17.6927 16.0298 18.8376 15.1857 19.6817C14.3416 20.5258 13.1967 21 12.003 21C10.8093 21 9.66441 20.5258 8.82031 19.6817C7.97621 18.8376 7.502 17.6927 7.502 16.499V11.75C7.502 10.784 8.285 10 9.252 10H14.754ZM7.131 10C6.76966 10.4328 6.55286 10.9678 6.511 11.53L6.501 11.75V16.499C6.501 17.346 6.693 18.148 7.035 18.864C6.70433 18.954 6.35933 18.9993 6 19C5.47463 19 4.9544 18.8965 4.46904 18.6954C3.98367 18.4943 3.54267 18.1996 3.17122 17.8281C2.79977 17.4565 2.50516 17.0155 2.3042 16.53C2.10324 16.0446 1.99987 15.5244 2 14.999V11.75C2.00002 11.3108 2.16517 10.8877 2.46268 10.5646C2.76019 10.2415 3.1683 10.0421 3.606 10.006L3.75 10H7.131ZM16.875 10H20.25C21.216 10 22 10.784 22 11.75V15C22.0001 15.6132 21.8593 16.2182 21.5884 16.7682C21.3175 17.3183 20.9237 17.7987 20.4376 18.1724C19.9514 18.546 19.3858 18.8029 18.7846 18.9232C18.1833 19.0435 17.5625 19.0239 16.97 18.866C17.27 18.238 17.454 17.546 17.495 16.814L17.504 16.499V11.75C17.504 11.085 17.269 10.475 16.875 10ZM12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6C15 6.79565 14.6839 7.55871 14.1213 8.12132C13.5587 8.68393 12.7956 9 12 9C11.2044 9 10.4413 8.68393 9.87868 8.12132C9.31607 7.55871 9 6.79565 9 6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3ZM18.5 4C19.163 4 19.7989 4.26339 20.2678 4.73223C20.7366 5.20107 21 5.83696 21 6.5C21 7.16304 20.7366 7.79893 20.2678 8.26777C19.7989 8.73661 19.163 9 18.5 9C17.837 9 17.2011 8.73661 16.7322 8.26777C16.2634 7.79893 16 7.16304 16 6.5C16 5.83696 16.2634 5.20107 16.7322 4.73223C17.2011 4.26339 17.837 4 18.5 4ZM5.5 4C6.16304 4 6.79893 4.26339 7.26777 4.73223C7.73661 5.20107 8 5.83696 8 6.5C8 7.16304 7.73661 7.79893 7.26777 8.26777C6.79893 8.73661 6.16304 9 5.5 9C4.83696 9 4.20107 8.73661 3.73223 8.26777C3.26339 7.79893 3 7.16304 3 6.5C3 5.83696 3.26339 5.20107 3.73223 4.73223C4.20107 4.26339 4.83696 4 5.5 4Z"
            fill="white"
          />
        </svg>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        className="text-xl text-[2.4vw]"
      >
        Collaborative work.
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.2 },
        }}
        className="mb-[38px] max-w-[400px] text-[1.0vw] font-light"
      >
        Real-time teamwork with live cursors for every team member.
      </motion.h3>
      <motion.div className="relative aspect-[1.83]" style={{ rotateX, y }}>
        <motion.div
          animate={{
            y: [null, 200, 100, 200],
            x: [100, 0, -200, 400],
            transition: {
              ease: easeInOut,
              repeat: Infinity,
              duration: 10,
              repeatType: "reverse",
            },
          }}
          className="absolute top-[20%] left-[40%]"
        >
          <Image
            src={"/images/cursor1.png"}
            width={90}
            height={60}
            alt="cursor"
          />
        </motion.div>

        <motion.div
          animate={{
            y: [null, -100, 10, 200],
            x: [100, 0, -200, 400],
            transition: {
              ease: easeInOut,
              repeat: Infinity,
              duration: 8,
              repeatType: "reverse",
              delay: 0.5,
            },
          }}
          className="absolute top-[40%] left-[30%]"
        >
          <Image
            src={"/images/cursor2.png"}
            width={90}
            height={60}
            alt="cursor"
          />
        </motion.div>

        <motion.div
          animate={{
            y: [null, 100, -100, 200],
            // x: [50, 0, -00, 70],
            transition: {
              ease: easeInOut,
              repeat: Infinity,
              duration: 12,
              repeatType: "reverse",
            },
          }}
          className="absolute top-[20%] left-[60%]"
        >
          <Image
            src={"/images/cursor3.png"}
            width={90}
            height={60}
            alt="cursor"
          />
        </motion.div>

        <Image
          className="h-full w-full object-contain"
          src={"/images/mainBuilder2.png"}
          width={1000}
          height={400}
          alt="main builder"
        />
      </motion.div>
    </div>
  );
}

function SectionFour() {
  return (
    <div className="flex h-screen w-full flex-col items-center overflow-hidden bg-linear-180 from-black via-[#3B79C4] to-[#3A71C4] pt-14 text-center text-white perspective-distant transform-3d">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
        className="mb-[14px] inline-flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[6px] bg-[#2B7FFF]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.95905 9.13722L10.845 6.03822C11.177 4.87822 12.821 4.87822 13.153 6.03822L14.038 9.13722C14.0941 9.33326 14.1991 9.51179 14.3433 9.65596C14.4875 9.80013 14.666 9.90519 14.862 9.96122L17.961 10.8462C19.121 11.1782 19.121 12.8222 17.961 13.1542L14.862 14.0392C14.666 14.0953 14.4875 14.2003 14.3433 14.3445C14.1991 14.4887 14.0941 14.6672 14.038 14.8632L13.153 17.9622C12.821 19.1222 11.177 19.1222 10.845 17.9622L9.96005 14.8632C9.90401 14.6672 9.79895 14.4887 9.65478 14.3445C9.51061 14.2003 9.33208 14.0953 9.13605 14.0392L6.03705 13.1542C4.87705 12.8222 4.87705 11.1782 6.03705 10.8462L9.13605 9.96122C9.33208 9.90519 9.51061 9.80013 9.65478 9.65596C9.79895 9.51179 9.90401 9.33326 9.96005 9.13722M18.103 16.5072C18.392 15.6642 19.607 15.6632 19.895 16.5072L19.921 16.5942L20.217 17.7822L21.405 18.0792C22.365 18.3192 22.365 19.6812 21.405 19.9212L20.217 20.2182L19.921 21.4062C19.681 22.3652 18.318 22.3652 18.078 21.4062L17.781 20.2182L16.593 19.9212C15.633 19.6812 15.633 18.3182 16.593 18.0792L17.781 17.7822L18.078 16.5942L18.103 16.5072ZM18.999 18.7972C18.9415 18.8743 18.8731 18.9427 18.796 19.0002C18.8731 19.0578 18.9415 19.1261 18.999 19.2032C19.0566 19.1261 19.125 19.0578 19.202 19.0002C19.1249 18.9424 19.0565 18.8737 18.999 18.7962M4.10305 2.50622C4.40105 1.63522 5.68805 1.66422 5.92105 2.59322L6.21705 3.78122L7.40505 4.07822C8.36505 4.31822 8.36505 5.68022 7.40505 5.92022L6.21705 6.21722L5.92105 7.40522C5.68105 8.36422 4.31805 8.36422 4.07805 7.40522L3.78105 6.21722L2.59305 5.92022C1.63305 5.68022 1.63305 4.31722 2.59305 4.07822L3.78105 3.78122L4.07805 2.59322L4.10305 2.50622ZM4.99905 4.79722C4.94142 4.87395 4.87305 4.94198 4.79605 4.99922C4.8732 5.05708 4.94157 5.12579 4.99905 5.20322C5.05652 5.12579 5.1249 5.05708 5.20205 4.99922C5.12497 4.94167 5.0566 4.8743 4.99905 4.79722Z"
            fill="white"
          />
        </svg>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        className="text-xl text-[2.4vw]"
      >
        AI-powered form creation.
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.2 },
        }}
        className="mb-[38px] max-w-[400px] text-[1.0vw] font-light"
      >
        Generate complete forms instantly from a simple description.
      </motion.h3>
      <motion.div className="aspect-[1.83]">
        <Image
          className="h-full w-full object-contain"
          src={"/images/aiGif1.gif"}
          width={1000}
          height={400}
          alt="main builder"
        />
      </motion.div>
    </div>
  );
}
