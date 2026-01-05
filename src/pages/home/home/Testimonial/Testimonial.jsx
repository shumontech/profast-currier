import { useEffect, useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "This design instantly elevated our product.",
    name: "Arafat Hossain",
    role: "Senior Product Designer",
  },
  {
    text: "Clean, modern, and beautifully animated.",
    name: "Nusrat Jahan",
    role: "UI Engineer",
  },
  {
    text: "Exactly the premium feel we wanted.",
    name: "Mahmudul Hasan",
    role: "Startup Founder",
  },
  {
    text: "Our users love the experience.",
    name: "Farhana Akter",
    role: "UX Researcher",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Loved by Creators Worldwide</h2>

      <div style={styles.carousel}>
        <div
          style={{
            ...styles.track,
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {testimonials.map((item, i) => (
            <div key={i} style={styles.slide}>
              <div style={styles.card}>
                <FaQuoteLeft style={styles.quoteIcon} />

                <p style={styles.text}>{item.text}</p>

                <div style={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="#22c55e" size={14} />
                  ))}
                </div>

                <strong style={styles.name}>{item.name}</strong>
                <span style={styles.role}>{item.role}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          style={{ ...styles.nav, left: 20 }}
          onClick={() =>
            setIndex((index - 1 + testimonials.length) % testimonials.length)
          }
        >
          <FaChevronLeft />
        </button>

        <button
          style={{ ...styles.nav, right: 20 }}
          onClick={() => setIndex((index + 1) % testimonials.length)}
        >
          <FaChevronRight />
        </button>
      </div>

      <div style={styles.dots}>
        {testimonials.map((_, i) => (
          <span
            key={i}
            style={{
              ...styles.dot,
              opacity: i === index ? 1 : 0.4,
              transform: i === index ? "scale(1.3)" : "scale(1)",
            }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "40px 20px",
    color: "#fff",
    fontFamily: "Inter, Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "50px",
  },
  carousel: {
    position: "relative",
    maxWidth: "800px",
    margin: "0 auto",
    overflow: "hidden",
  },
  track: {
    display: "flex",
    transition: "transform 0.6s cubic-bezier(.4,0,.2,1)",
  },
  slide: {
    minWidth: "100%",
    padding: "20px",
    boxSizing: "border-box",
  },
  card: {
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "45px 35px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
    textAlign: "center",
  },
  quoteIcon: {
    fontSize: "36px",
    color: "rgba(255,255,255,0.35)",
    marginBottom: "15px",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.7",
    marginBottom: "20px",
  },
  stars: {
    display: "flex",
    justifyContent: "center",
    gap: "6px",
    marginBottom: "15px",
  },
  name: {
    display: "block",
    fontSize: "18px",
    fontWeight: "600",
  },
  role: {
    fontSize: "14px",
    opacity: 0.7,
  },
  nav: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "#fff",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dots: {
    textAlign: "center",
    marginTop: "30px",
  },
  dot: {
    display: "inline-block",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#22c55e",
    margin: "6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
