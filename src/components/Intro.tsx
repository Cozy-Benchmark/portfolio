import { useEffect, useRef, useState } from "react";

const Intro = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const [introElementVisible, setIntroElementVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIntroElementVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }
  });

  return (
    <div
      className={`intro ${introElementVisible ? "animate" : ""}`}
      ref={introRef}
    >
      <h1 className="main">Bryan Benchmark Mendoza</h1>
      <span className="sub-title">An Aspring Software Developer</span>
    </div>
  );
};

export default Intro;
