// /app/projects/page.tsx
export default function ProjectsPage() {
    return (
      <div>
        <h1 className="text-4xl font-bold" data-aos="fade-up">My Projects</h1>
        <div className="mt-4 space-y-4">
          <div className="p-4 border rounded shadow" data-aos="zoom-in">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div className="p-4 border rounded shadow" data-aos="zoom-in">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p>Description of Project 2</p>
          </div>
        </div>
      </div>
    );
  }
  