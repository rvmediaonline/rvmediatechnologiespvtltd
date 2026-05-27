import { motion } from "motion/react";
import { Camera, Video, Sparkles, ArrowRight } from "lucide-react";

export function PromoBanner() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="relative p-6 sm:p-8 rounded-3xl overflow-hidden cursor-pointer"
        onClick={scrollToContact}
        style={{
          background: "linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(245, 158, 11, 0.03) 100%)",
          border: "1px solid rgba(124, 58, 237, 0.25)",
          boxShadow: "0 20px 50px rgba(124, 58, 237, 0.1), inset 0 0 30px rgba(124, 58, 237, 0.05)",
          backdropFilter: "blur(12px)",
          transition: "border-color 0.4s, box-shadow 0.4s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.45)";
          e.currentTarget.style.boxShadow = "0 30px 60px rgba(245, 158, 11, 0.15), inset 0 0 40px rgba(124, 58, 237, 0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.25)";
          e.currentTarget.style.boxShadow = "0 20px 50px rgba(124, 58, 237, 0.1), inset 0 0 30px rgba(124, 58, 237, 0.05)";
        }}
      >
        {/* Decorative corner glows */}
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          {/* Left: Info with icon and badge */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(239, 68, 68, 0.15))",
                border: "1px solid rgba(245, 158, 11, 0.35)",
                boxShadow: "0 0 20px rgba(245,158,11,0.25)",
              }}
            >
              <div className="relative">
                <Camera size={26} className="text-amber-400 animate-pulse" />
                <Video size={16} className="text-amber-500 absolute -bottom-1 -right-1" />
              </div>
            </div>

            <div>
              {/* Promo Badge */}
              <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-2">
                <span
                  className="px-2.5 py-0.5 rounded-md flex items-center gap-1"
                  style={{
                    background: "rgba(245, 158, 11, 0.12)",
                    border: "1px solid rgba(245, 158, 11, 0.3)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "#F59E0B",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  <Sparkles size={10} /> Active Campaign Offer
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Title & Tagline */}
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.2rem, 3vw, 1.65rem)",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "-0.01em",
                  marginBottom: "0.25rem",
                }}
              >
                Get{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #F59E0B, #EF4444)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Free Videography and Photography
                </span>{" "}
                Solutions!
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(255, 255, 255, 0.45)",
                  lineHeight: 1.5,
                }}
              >
                Stand out across platforms with premium brand assets.{" "}
                <strong className="text-white/80">T&C Apply:</strong> Offer is unlocked automatically upon booking and purchasing any business or growth package.
              </p>
            </div>
          </div>

          {/* Right: CTA button */}
          <div className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold"
              style={{
                background: "linear-gradient(135deg, #F59E0B, #EF4444)",
                boxShadow: "0 0 25px rgba(245, 158, 11, 0.35)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.9rem",
              }}
            >
              Claim Offer Now <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
