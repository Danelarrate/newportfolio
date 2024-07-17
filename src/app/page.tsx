'use client'
import { FaLinkedin } from 'react-icons/fa'
import styles from './page.module.css'
import Link from 'next/link'
import { IoLogoGithub } from 'react-icons/io'
export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ padding: '2.5rem 1.75rem' }}>
        <div className={styles.prose}>
          <h1>Danel Arrate</h1>
        </div>
        <article className={styles.prose}>
          <p>Hey, I am Danel Arrate, a frontend web developer.</p>
          <p>
            I{"'"}ve participated in creating NOTIMATION, a platform for editing
            templates with extensive drag-and-drop functionality.
          </p>
          <p>
            I have experience developing apps with{' '}
            <span className={styles.webTechLabel}>
              <img
                src='next.svg'
                style={{
                  height: '1rem',
                  stroke: 'white',
                  marginBottom: '-0.15rem'
                }}
              />
            </span>
            ,{' '}
            <span className={styles.webTechLabel}>
              <img
                src='React.webp'
                style={{ height: '1.25rem', marginBottom: '-0.25rem' }}
              />{' '}
              React
            </span>
            , and{' '}
            <span className={styles.webTechLabel}>
              <img
                src='vue.png'
                style={{ height: '1.25rem', marginBottom: '-0.25rem' }}
              />{' '}
              Vue3
            </span>
            , where I{"'"}ve focused on forms and tables.I
            {"'"}ve implemented user-friendly interfaces, managed complex
            validations, and optimized performance for data handling to enhance
            user interaction.
          </p>
          <p>
            Dreaming of becoming a fullstack developer and exploring 3D
            animation with three.js is where my passion lies.
          </p>
          <p>
            Outside of programming, I enjoy physical activities and playing
            video games. Currently, I live in Buenos Aires, Argentina. If you
            are around, feel free to reach out, we could have some coffee or
            work together.
          </p>
        </article>
        <hr className={styles.hrClass} />
        <article className={styles.prose}>
          <p>Find me on</p>
          <div className='flex'>
            <Link
              href={'https://github.com/Danelarrate'}
              className='socialLink'
              target='_blank'
            >
              <IoLogoGithub color='#bbb' size={'1.5rem'} /> Github
            </Link>
            <Link
              href={'https://www.linkedin.com/in/danelarrate/'}
              className='socialLink'
              target='_blank'
            >
              <FaLinkedin color='#bbb' size={'1.5rem'} /> Linkedin
            </Link>
          </div>
          <p>Or mail me at danelarrate@gmail.com</p>
        </article>
      </div>
    </main>
  )
}
