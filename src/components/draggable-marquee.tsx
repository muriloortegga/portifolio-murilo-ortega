import { useRef, useEffect, useState } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
import { Link } from "@tanstack/react-router";

interface DraggableMarqueeProps {
  items: { name: string; url: string; id?: string }[];
  baseVelocity?: number;
}

export function DraggableMarquee({ items, baseVelocity = -1 }: DraggableMarqueeProps) {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // We multiply the items to ensure enough coverage for infinite scroll
  // Usually 3 or 4 sets depending on item width
  const duplicatedItems = [...items, ...items, ...items, ...items];

  useEffect(() => {
    if (containerRef.current) {
      // Calculate width of a single set of items
      // This is tricky if items have different widths. 
      // We'll assume the marquee content width / 4 (since we duplicated 4 times)
      const fullWidth = containerRef.current.scrollWidth;
      setContainerWidth(fullWidth / 4);
    }
  }, [items]);

  // The wrap function keeps the value between 0 and -containerWidth
  // Base velocity determines speed and direction
  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 20);
    
    // Smoothly increment the base X
    baseX.set(baseX.get() + moveBy);
  });

  // Transform baseX with wrapping logic
  const x = useTransform(baseX, (v) => `${wrap(0, -containerWidth, v)}px`);

  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing select-none">
      <motion.div
        className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
        ref={containerRef}
        style={{ x }}
        drag="x"
        onDrag={(event, info) => {
          // When dragging, we update the base X directly
          baseX.set(baseX.get() + info.delta.x);
        }}
        // We don't use dragConstraints because we want it to be infinite
        dragMomentum={true}
        dragTransition={{ power: 0.2, timeConstant: 200 }}
      >
        {duplicatedItems.map((logo, i) => (
          <Link
            key={`${logo.name}-${i}`}
            to={(["natrave", "solid", "symplice", "maxi"].includes(logo.name.toLowerCase()) 
              ? `/${logo.name.toLowerCase()}` 
              : `/trabalho`) as string}
            className="flex items-center justify-center min-w-[200px] md:min-w-[400px] shrink-0 group transition-transform hover:scale-105 duration-500 active:scale-95"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="h-[120px] md:h-[180px] w-auto object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              draggable={false}
            />
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
