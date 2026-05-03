import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useSpring, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

// --- Utility: Specialized Counter ---
function Counter({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(target);
    }
  }, [isInView, spring, target]);

  return (
    <div ref={ref} className="text-left py-8 md:py-12">
      <motion.span className="text-[18vw] md:text-[10vw] font-bold tracking-tighter block leading-none text-foreground">
        <motion.span>{display}</motion.span>{suffix}
      </motion.span>
      <span className="text-xs font-mono uppercase tracking-[0.3em] text-secondary mt-2 block">{label}</span>
    </div>
  );
}

// --- Section 1: Performance Overview ---
export function PerformanceHero({ 
  followers, 
  contentCount, 
  mockupImg,
  anchorText = "Identidade e base consolidada"
}: { 
  followers: number; 
  contentCount: number; 
  mockupImg: string;
  anchorText?: string;
}) {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center site-section border-none bg-background overflow-hidden py-24 md:py-0">
      <div className="site-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 z-10 order-2 lg:order-1">
          <Counter target={followers} label="Seguidores" />
          <div className="mt-[-2rem] md:mt-[-4rem]">
            <Counter target={contentCount} label="Conteúdos Criados" suffix="+" />
          </div>
          <p className="site-label mt-12 before:bg-foreground">{anchorText}</p>
        </div>
        
        <div className="lg:col-span-8 relative h-auto flex items-center justify-center lg:justify-end order-1 lg:order-2">
          {/* Single Consolidated Mockup Entry Animation - Increased Scale */}
          <motion.div 
            initial={{ x: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-[110%] md:w-[120%] lg:w-[130%] relative lg:-right-[10%]"
          >
             <img src={mockupImg} alt="Performance Mockup" className="w-full h-auto drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Section 2: Copy Feature ---
export function CopyFeature({ 
  headline, 
  posts, 
  bgColor = "#000000",
  accentColor = "#FF6B00"
}: { 
  headline: string; 
  posts: { img: string; label: string }[];
  bgColor?: string;
  accentColor?: string;
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      className="site-section min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="site-container">
        <motion.h2 
          className="text-white text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-24 max-w-5xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {headline}
        </motion.h2>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 h-auto md:h-[700px]">
          {posts.map((post, i) => {
            const y = useTransform(scrollYProgress, [0, 1], [100 * (i + 1), -100 * (i + 1)]);
            const rotate = i === 0 ? -5 : i === 1 ? 0 : 5;

            return (
              <motion.div 
                key={i}
                style={{ y, rotate }}
                whileHover={{ scale: 1.04, zIndex: 10, rotate: 0 }}
                className="w-full md:w-[30%] relative cursor-pointer"
              >
                <img src={post.img} alt={post.label} className="w-full h-auto" />
                <div className="absolute -bottom-8 left-0 right-0 text-center opacity-40">
                  <span className="text-[10px] font-mono uppercase text-white/60 tracking-widest">{post.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-40 border-t border-white/10 pt-8">
          <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">
            + {posts.length * 40} peças estratégicas entregues
          </p>
        </div>
      </div>
    </section>
  );
}

// --- Section 3: Feed Timeline ---
export function FeedTimeline({ 
  states, 
  title = "Feed Evolution" 
}: { 
  states: { label: string; posts: string[] }[];
  title?: string;
}) {
  const [activeState, setActiveState] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="site-section bg-background overflow-hidden relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed w-24 h-24 rounded-full border border-foreground flex items-center justify-center z-50 pointer-events-none mix-blend-difference"
            style={{ left: cursorPos.x - 48, top: cursorPos.y - 48 }}
          >
            <span className="text-[10px] font-mono text-white uppercase font-bold">Ver</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="site-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="site-label mb-4">{title}</span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Galeria de Arte Viva</h2>
          </div>
          
          <div className="flex border-b border-border w-full md:w-auto">
            {states.map((state, i) => (
              <button 
                key={i}
                onClick={() => setActiveState(i)}
                className={`px-6 py-4 text-[10px] font-mono uppercase tracking-widest transition-all relative ${activeState === i ? 'text-foreground' : 'text-secondary hover:text-foreground'}`}
              >
                {state.label}
                {activeState === i && (
                  <motion.div layoutId="timeline-active" className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {states[activeState].posts.map((post, i) => (
              <motion.div 
                key={`${activeState}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative group"
              >
                <img src={post} alt="Feed Post" className="w-full h-auto drop-shadow-xl" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center bg-background/10 backdrop-blur-sm">
                   <p className="text-foreground text-[10px] font-mono uppercase tracking-tighter leading-tight font-bold">
                     {states[activeState].label}
                   </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// --- Section 4: Video Gallery ---
export function VideoGallery({ 
  videos 
}: { 
  videos: { url: string; category: string; poster?: string }[] 
}) {
  return (
    <section className="site-section bg-background overflow-hidden">
      <div className="site-container">
        <div className="mb-16">
          <span className="site-label mb-4">Galeria de Vídeos</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Conteúdo em Movimento</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[800px]">
          {videos.map((video, i) => {
            // Create a "Bento" style grid
            const colSpan = i === 0 ? "md:col-span-8" : i === 1 ? "md:col-span-4" : i === 2 ? "md:col-span-4" : "md:col-span-8";
            const rowSpan = i === 0 ? "md:row-span-2" : "";

            return (
              <VideoCard 
                key={i} 
                video={video} 
                className={`${colSpan} ${rowSpan}`} 
                delay={i * 0.1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ 
  video, 
  className, 
  delay 
}: { 
  video: { url: string; category: string; poster?: string }; 
  className: string;
  delay: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video 
        ref={videoRef}
        src={video.url}
        poster={video.poster}
        muted
        loop
        playsInline
        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 drop-shadow-2xl"
      />
      
      <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
        <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full bg-[#FF6B00] ${isHovered ? 'animate-pulse' : ''}`} />
          <span className="text-[8px] font-mono text-white uppercase tracking-widest">{video.category}</span>
        </div>
      </div>

      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
             <Play size={20} className="text-white fill-white ml-1" />
          </div>
        </div>
      )}
    </motion.div>
  );
}
