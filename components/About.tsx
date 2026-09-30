export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-label">01 / ABOUT</div>
      <div className="about-grid">
        <div>
          <p className="display">
            Software engineering student building <em>useful</em> things for the web.
          </p>
          <div className="stats">
            <div><strong>650+</strong><span>coding problems</span></div>
            <div><strong>8.85</strong><span>CGPA / 10</span></div>
            <div><strong>Full Stack</strong><span>development trainee</span></div>
          </div>
        </div>
        <div className="about-side">
          <div className="portrait-card">
            <img src="/charmi-portrait.png" alt="Stylized portrait of Charmi" />
            <span>BUILD · LEARN · SHIP</span>
          </div>
          <div className="body-copy">
            <p>
              I&apos;m Charmi Gubbala, a B.Tech Artificial Intelligence and Machine
              Learning student with a strong foundation in DSA, backend development,
              and full-stack engineering.
            </p>
            <p>
              I enjoy working across React, Next.js, Node.js, Go, Java, databases,
              event-driven systems, and AI APIs — turning ideas into clean,
              reliable products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
