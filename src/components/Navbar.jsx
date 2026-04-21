import { NavLink } from "react-router-dom";

function Navbar(){
    const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium text-light transition-all ${
      isActive
        ? 'bg-accent font-bold border border-accent'
        : 'hover:bg-accent/30 border border-transparent'
    }`

    return(
        <nav className = "bg-navy border-b border-accent/20 sticky top-0 z-50">
            <div className = "max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

                {/*Logo*/}
                <NavLink
                to="/" className = "no-underline">
                    <h1 className = "text-xl font-bold text-light tracking-wide">
                        Tech Space
                    </h1>
                </NavLink>

                <div className="flex items-center gap-2">
                    <NavLink to="/" className={linkClass} end>Home</NavLink>
                    <NavLink to="/about" className={linkClass}>About</NavLink>
                    <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar