const groups = [
  ["Languages", "C++ · Java · Python · JavaScript · TypeScript · Go · SQL"],
  ["Frontend", "React.js · Next.js · HTML5 · CSS3"],
  ["Backend", "Go · Node.js · Express.js · Spring Boot"],
  ["Data", "PostgreSQL · MySQL · MongoDB · Redis"],
  ["Distributed", "Kafka · Outbox Pattern · Saga · Idempotent Processing"],
  ["Tools", "Git · GitHub · Docker · OpenAI API · Gemini API"],
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-label">02 / TOOLKIT</div>
      <div className="skills-heading">
        <h2>Things I work with.</h2>
        <p>From interfaces to APIs, data, events and AI.</p>
      </div>
      <div className="skill-grid">
        {groups.map(([name, value]) => (
          <article className="skill-card" key={name}>
            <span>{name}</span>
            <h3>{value}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}