const capabilities = [
  { title: 'Production planning', description: 'Map the right sequence for each project.', icon: '01' },
  { title: 'Workflow improvement', description: 'Spot friction and simplify handoffs.', icon: '02' },
  { title: 'Engineering support', description: 'Turn requirements into practical actions.', icon: '03' },
];

export default function Capabilities() {
  return (
    <section className="content-section capabilities section-shell" id="capabilities" aria-labelledby="capabilities-title">
      <div className="section-heading">
        <p className="eyebrow">WHAT WE DO</p>
        <h2 id="capabilities-title">Capabilities that fit the work</h2>
      </div>
      <div className="capability-grid">
        {capabilities.map((item) => (
          <article className="capability-card" key={item.title}>
            <div className="capability-icon" aria-hidden="true">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
