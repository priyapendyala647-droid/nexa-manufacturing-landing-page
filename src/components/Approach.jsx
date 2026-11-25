const steps = [
  { number: '01', title: 'Assess', description: 'Understand your objectives and constraints.' },
  { number: '02', title: 'Plan', description: 'Map practical steps, ownership, and milestones.' },
  { number: '03', title: 'Deliver', description: 'Share a clear action plan for the next phase.' },
];

export default function Approach() {
  return (
    <section className="approach-section" id="approach" aria-labelledby="approach-title">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">A CLEAR WAY FORWARD</p>
          <h2 id="approach-title">A practical approach, from day one</h2>
        </div>
        <ol className="approach-grid">
          {steps.map((step) => (
            <li className="approach-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
