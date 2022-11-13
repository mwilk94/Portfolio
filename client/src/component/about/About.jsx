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
              <a href="/" className="btn btn-primary my-2">Main call to action</a>
              <a href="/" className="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </section>
      </div>
  )
}
