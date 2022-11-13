import React from 'react'
import "./About.css"

export default function About() {
  return (
    <div className='a'>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <h1 className="fw-light">About Me</h1>
            <p className="lead text-muted">I am a front-end software developer, who continues to prioritize my education in web development and software engineering. I do not shy away from a challenge and take pride in my work. My evolution in this field is one for the books. Just watch me! </p>
            <p>
              <a href="/Portfolio" className="btn btn-primary mb-2">View Portfolio</a>
              <a href="/Contact" className="btn btn-secondary mb-2">Contact Me</a>
            </p>
          </div>
        </section>
      </div>
  )
}
