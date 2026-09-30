const projects = [
  {
    number: "01",
    title: "Real-Time Order & Delivery Platform",
    stack: "Next.js · React · TypeScript · Go · Node.js · PostgreSQL · Redis · Kafka · WebSockets · Docker",
    text: "Building a real-time order and delivery platform focused on live tracking, event-driven services and a modern full-stack architecture.",
    status: "IN PROGRESS",
  },
  {
    number: "02",
    title: "Event-Driven Order Processing System",
    stack: "Java · Spring Boot · Apache Kafka · MySQL · Docker",
    text: "Event-driven microservices system with Outbox Pattern, idempotent consumers, retries, DLQ handling and Saga-based compensation workflows.",
    status: "BUILT",
  },
  {
    number: "03",
    title: "PolicyGuard AI",
    stack: "React · Node.js · Express · MongoDB Atlas · OpenAI · Gemini · Docker",
    text: "AI-powered platform for analyzing privacy policies and legal documents, with summarization, risk detection, compliance scoring and secure APIs.",
    status: "BUILT",
  },
  {
    number: "04",
    title: "WebRTC Multi-Peer Video Chat",
    stack: "Next.js · TypeScript · WebRTC · Socket.IO · Docker",
    text: "Real-time multi-peer video conferencing with signaling, SDP offer/answer exchange, ICE negotiation, dynamic rooms and chat.",
    status: "BUILT",
  },
];

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-label">03 / SELECTED WORK</div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.number}>
            <div className="project-no">{project.number}</div>
            <div className="project-main">
              <div className="project-top">
                <h2>{project.title}</h2>
                <span>{project.status}</span>
              </div>
              <p className="project-stack">{project.stack}</p>
              <p>{project.text}</p>
            </div>
            <div className="project-arrow">↗</div>
          </article>
        ))}
      </div>
    </section>
  );
}