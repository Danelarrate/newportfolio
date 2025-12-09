// components/ProjectCard.tsx
import React, { FC } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface ProjectCardProps {
  title?: string
  description?: string
  tags?: string[]
  repoLink?: string
  demoLink?: string
}

const ProjectCard: FC<ProjectCardProps> = ({
  title = 'hola',
  description = 'hello',
  tags = ['ddd', 'ddd'],
  repoLink = '4',
  demoLink = '4',
}) => {
  return (
    <article className={'card'}>
      {/* 1. La Marca de Agua (El símbolo del Monte Hua) */}
      <div className={'watermark'}>
        {/* Asegurate de tener la imagen en tu carpeta public */}
        <img
          src="/Mount_Hua_Sect_Symbol.webp"
          alt="Mount Hua symbol"
          aria-hidden="true"
        />
      </div>

      {/* 2. El Contenido (Por encima de la marca de agua) */}
      <div className={'content'}>
        <header className={'header'}>
          <h3 className={'title'}>{title}</h3>
          {/* header no longer shows links; links moved to bottom-right corner */}
        </header>

        <p className={'description'}>{description}</p>

        <footer className={'footer'}>
          {tags?.map((tag, i) => (
            <span key={`${tag}-${i}`} className={'tag'}>
              {tag}
            </span>
          ))}
        </footer>
      </div>

      {/* Corner links: positioned at bottom-right of the card */}
      <div className="corner-links">
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noreferrer" aria-label="Github Repo">
            <FiGithub />
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noreferrer" aria-label="Live Demo">
            <FiExternalLink />
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
