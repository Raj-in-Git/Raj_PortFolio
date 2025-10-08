import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="fade-in-section py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm Rajesh, a passionate developer with experience in React.js,
          MES systems, and automation projects.
        </p>
      </div>
    </section>
  );
}
