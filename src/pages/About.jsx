import {Link} from "react-router-dom"

function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* heading */}
      <h1 className="text-5xl font-extrabold text-light mb-4">About Us</h1>
      <p className="text-light/60 text-lg leading-relaxed mb-12 max-w-2xl">
      This is the About page. In React Router each page is just a
        normal React component. The URL changes but the page never
        reloads — React just swaps the component on screen instantly.
      </p>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">

        <div className="bg-navy rounded-2xl p-6 border border-accent/20 hover:border-accent/50 transition-all">
        <div className="text-3xl mb-4">🎯</div>
          <h3 className="text-light font-bold text-lg mb-2">
            Our Mission
          </h3>
          <p className="text-light/50 text-sm leading-relaxed">
            Building fast and smooth web apps with React and modern tools
          </p>
        </div>

        <div className="bg-navy rounded-2xl p-6 border border-accent/20 hover:border-accent/50 transition-all">
          <div className="text-3xl mb-4">💡</div>
          <h3 className="text-light font-bold text-lg mb-2">
            Our Vision
          </h3>
          <p className="text-light/50 text-sm leading-relaxed">
            Making client side routing easy to learn and understand
          </p>
        </div>

        <div className="bg-navy rounded-2xl p-6 border border-accent/20 hover:border-accent/50 transition-all">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="text-light font-bold text-lg mb-2">
            Our Stack
          </h3>
          <p className="text-light/50 text-sm leading-relaxed">
            React, React Router DOM, Tailwind CSS and Vite
          </p>
        </div>
      </div>

      <Link
      to="/contact" className="inline-block px-8 py-3 rounded-xl bg-accent text-white font-bold text-base no-underline hover:opacity-90 transition-all hover:scale-105 active:scale-95">
        Get In Touch →
      </Link>
    </div>
  )
}

export default About