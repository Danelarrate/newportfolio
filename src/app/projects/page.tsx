import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function Page() {
  return (
    <main>
      <div className="projects-container">
        {projects.map((project, i) => (
          <ProjectCard
            key={`${project.title}-${i}`}
            title={project.title}
            description={project.description}
            tags={project.tags}
            repoLink={project.repoLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </main>
  )
}
