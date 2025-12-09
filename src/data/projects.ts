// src/data/projects.ts

export interface Project {
  title: string
  description: string
  tags: string[]
  repoLink?: string
  demoLink?: string
}

export const projects: Project[] = [
  {
    title: 'LinkWorlds – Link-in-Bio Platform',
    description:
      'A link-in-bio platform similar to Linktree, allowing users to create customizable pages with multiple links, social profiles, and visual personalization. Built with a clean, responsive UI and smooth interactions for a polished user experience.',
    tags: ['react', 'frontend', 'link-in-bio', 'responsive-design', 'ui'],
    repoLink: '',
    demoLink: 'https://linkworlds.site/',
  },
  {
    title: 'TantraTouch – Animated Website',
    description:
      'A modern website featuring smooth transitions and scroll-triggered animations implemented with GSAP, delivering an immersive and visually appealing user experience.',
    tags: ['react', 'gsap', 'scroll-animations', 'ui-animations', 'frontend'],
    repoLink: '',
    demoLink: 'https://www.tantratouch.com/es',
  },
  {
    title: 'FlightPath – 3D Scroll Experience',
    description:
      'Interactive 3D experience with real-time models rendered using Three.js and scroll-synchronized transitions powered by GSAP ScrollTrigger, creating a seamless and immersive visual narrative.',
    tags: [
      'threejs',
      'gsap',
      'scroll-animations',
      '3d-web',
      'creative-frontend',
    ],
    repoLink: '',
    demoLink: 'https://flightpath-eight.vercel.app/',
  },
  {
    title: 'Set – 3D Interactive Experience',
    description:
      'Web experience combining Three.js real-time 3D rendering with GSAP-driven scroll animations. Includes smooth section transitions, camera movements, and reactive 3D elements.',
    tags: [
      'threejs',
      'gsap',
      '3d-web',
      'scroll-animations',
      'creative-frontend',
    ],
    repoLink: '',
    demoLink: 'https://set-sigma.vercel.app/',
  },
  {
    title: 'Affinit – Scroll-Driven Animations',
    description:
      'Modern landing page with smooth transitions and GSAP-powered scroll animations. Features dynamic sections, micro-interactions, and a polished storytelling-focused presentation.',
    tags: [
      'gsap',
      'scroll-animations',
      'frontend',
      'ui-animations',
      'creative-frontend',
    ],
    repoLink: '',
    demoLink: 'https://affinit.netlify.app/',
  },
  {
    title: 'Dot Dager – Streamer 3D Setup (3-Day Challenge)',
    description:
      '3D streamer setup created in only three days for a YouTuber’s contest. Built entirely with Three.js, featuring camera animations, dynamic lighting, and a fully optimized real-time 3D scene.',
    tags: [
      'threejs',
      '3d-web',
      'camera-animation',
      'webgl',
      'creative-frontend',
    ],
    repoLink: '',
    demoLink: 'https://dot-dager-pickles.netlify.app/',
  },
  {
    title: 'UiTool – Visual Template Builder',
    description:
      'Advanced visual editor with drag-and-drop capabilities for creating and customizing templates. Built with React and TypeScript, featuring dynamic components, complex state management, and a smooth editing experience for non-technical users.',
    tags: ['react', 'typescript', 'drag-and-drop', 'ui-builder', 'frontend'],
    repoLink: '',
    demoLink: 'https://www.uitool.com/login',
  },
]
