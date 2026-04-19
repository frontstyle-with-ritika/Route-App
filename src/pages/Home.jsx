import { useNavigate } from "react-router-dom"


function Home() {

    const navigate = useNavigate()
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

        {/*Badge*/}
        <div className="inline-block text-xs px-4 py-2 rounded-full bg-accent/15 border border-accent/30 mb-5">
        ✨ Client Side Routing with React Router
        </div>

        {/*Main Heading*/}
        <h1 className="tect-5xl font-extrabold text-light leading-tight mb-5">
            Welcome To {' '}
            <span className="text-accent">RouteApp</span>
        </h1>

        {/*Sub Heading*/}
        <p className="text-light/60 text-lg leading-relaxed mb-10 max-w-xl">
        A demo app showing how React Router works.
        Click the navbar links to navigate between pages —
        notice the browser never reloads!
        </p>

        {/*Button*/}
        <div className="flex flex-wrap gap-4 mb-16">

            <button
            onClick={() => navigate('/about')} 
            className="px-6 py-2 rounded-xl bg-accent text-white font-bold text-base hover:opacity-90 transition-all hover:scale-105 active:scale-95">
                Learn More ➡️
            </button>

            <button
          onClick={() => navigate('/contact')}
          className="px-6 py-2 rounded-xl bg-accent/10 text-accent font-semibold text-base border border-accent/30 hover:bg-accent/20 transition-all hover:scale-105 active:scale-95"
        >
          Contact Us ✉️📞
        </button>
        </div>

        {/*Feature cards*/}
        <div className="grid grid:cols-1 md:grid-cols-3 gap-5">
            <div className="bg-navy rounded-2xl p-6 border border-accent/20 hover:border-accent/50 transition-all">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-light font-bold text-lg mb-2">
                Fast Navigation
            </h3>
            <p className="text-light/50 text-sm leading-relaxed">
                No page reloads means instant transitions between pages
            </p>
            </div>

            <div className="bg-navy rounded-2xl p-6 border border-accent/20 hover:border-accent/50 transition-all">
            <div className="text-3xl mb-4">🧭</div>
            <h3 className="text-light font-bold text-lg mb-2">
                React Router Dom
            </h3>
            <p className="text-light/50 text-sm leading-relaxed">
                Industry standard library for routing in React apps
            </p>
            </div>

            <div className="bg-navy rounded-2xl p-6 border border-accent/20 hover:border-accent/50 transition-all">
            <div className="text-3xl mb-4">🔗</div>
            <h3 className="text-light font-bold text-lg mb-2">
                Clean URLs
            </h3>
            <p className="text-light/50 text-sm leading-relaxed">
                Each page has its own URL like /about and /contact
            </p>
            </div>

        </div>
    </div>
  )
}

export default Home