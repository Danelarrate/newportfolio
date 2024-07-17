'use client'

import { useLayoutEffect } from 'react'

export const SakuraBg = () => {
  useLayoutEffect(() => {
    const canvas: HTMLCanvasElement | null = document.querySelector('canvas')
    if (canvas !== null) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    const ctx = canvas?.getContext('2d')

    const TOTAL = 25
    const petalArray: Petal[] = []

    const petalImg = new Image()
    petalImg.src = 'petal1.png'
    petalImg.className = 'petal-image'
    petalImg.addEventListener('load', () => {
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal())
      }
      render()
    })

    function render() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        petalArray.forEach((petal) => petal.animate())
        window.requestAnimationFrame(render)
      }
    }

    window.addEventListener('resize', () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    })

    // Petal class
    class Petal {
      x: number
      y: number
      w: number
      h: number
      opacity: number
      flip: number
      xSpeed: number
      ySpeed: number
      flipSpeed: number

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y =
          Math.random() * (canvas?.height || 0) * 2 - (canvas?.height || 0)
        this.w = 10 + Math.random()
        this.h = 5 + Math.random()
        this.opacity = Math.random() * 1 + 0.2
        this.flip = Math.random()

        this.xSpeed = 1.5 + Math.random() * 2
        this.ySpeed = 1 + Math.random() * 1
        this.flipSpeed = Math.random() * 0.03
      }

      draw() {
        if (canvas && ctx) {
          if (this.y > canvas.height || this.x > canvas.width) {
            this.x = -petalImg.width
            this.y = Math.random() * canvas.height * 2 - canvas.height
            this.xSpeed = 1 + Math.random() * 2
            this.ySpeed = 2 + Math.random() * 2
            this.flip = Math.random()
          }
          ctx.globalAlpha = this.opacity
          ctx.drawImage(
            petalImg,
            this.x,
            this.y,
            this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
            this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5)
          )
        }
      }

      animate() {
        this.x += this.xSpeed
        this.y += this.ySpeed
        this.flip += this.flipSpeed
        this.draw()
      }
    }
  }, [])

  return (
    <>
      <img alt='sakura branch' src='sakura-branch.png' className='branch' />
      <canvas
        style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}
      ></canvas>
    </>
  )
}
