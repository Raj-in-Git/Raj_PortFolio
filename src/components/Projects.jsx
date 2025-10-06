export default function Projects() {
  const projects = [
    { title: "3D Print Store", description: "E-commerce app for 3D printed products.", link: "#" },
    { title: "MES Dashboard", description: "Dashboard for manufacturing execution system.", link: "#" },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white fade-in-up">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-100 rounded-xl p-6 shadow-md project-card">
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-gray-700">{p.description}</p>
            <a href={p.link} className="mt-4 inline-block text-blue-600 hover:underline">View Code →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
