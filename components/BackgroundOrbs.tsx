// "use client";

// import { useEffect, useState } from "react";

// type Offset = { x: number; y: number };

// export function BackgroundOrbs() {
//   const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });

//   useEffect(() => {
//     const handlePointerMove = (event: PointerEvent) => {
//       const ratioX = event.clientX / window.innerWidth - 0.5;
//       const ratioY = event.clientY / window.innerHeight - 0.5;

//       setOffset({
//         x: ratioX * 24,
//         y: ratioY * 18,
//       });
//     };

//     window.addEventListener("pointermove", handlePointerMove);
//     return () => window.removeEventListener("pointermove", handlePointerMove);
//   }, []);

//   return (
//     <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//       {/* Large soft gradient bands inspired by Stripe-style depth */}
//       <div className="absolute inset-x-[-40%] top-[-30%] h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_65%)] blur-3xl" />
//       <div className="absolute inset-x-[-30%] top-16 h-80 bg-[linear-gradient(120deg,rgba(56,189,248,0.16),rgba(129,140,248,0.08),transparent_70%)] opacity-80 blur-3xl" />
//       <div className="absolute inset-x-[-40%] bottom-[-40%] h-96 bg-[radial-gradient(circle_at_bottom,_rgba(22,163,74,0.16),transparent_65%)] blur-3xl" />

//       {/* Large globe background on the right side, similar to Stripe */}
//       <div className="pointer-events-none absolute right-[-18%] top-[-8%] h-[32rem] w-[32rem] md:right-[-10%] md:top-[-10%] md:h-[36rem] md:w-[36rem] lg:right-[-6%] lg:h-[40rem] lg:w-[40rem] globe-shell opacity-80" />

//       {/* Parallax orbs */}
//       <div
//         className="orb-gradient orb-primary animate-float-slow left-[-10%] top-[-8%] h-72 w-72 md:h-96 md:w-96"
//         style={{
//           transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
//         }}
//       />
//       <div
//         className="orb-gradient orb-secondary animate-float-delay right-[-12%] top-[10%] h-80 w-80 md:h-[26rem] md:w-[26rem]"
//         style={{
//           transform: `translate3d(${offset.x * -0.6}px, ${offset.y * -0.4}px, 0)`,
//         }}
//       />
//       <div
//         className="orb-gradient orb-ambient animate-pulse-soft bottom-[-18%] left-[8%] h-80 w-80 md:h-[22rem] md:w-[22rem]"
//         style={{
//           transform: `translate3d(${offset.x * 0.4}px, ${offset.y * -0.7}px, 0)`,
//         }}
//       />
//     </div>
//   );
// }


