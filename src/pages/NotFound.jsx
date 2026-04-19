import { useNavigate } from "react-router-dom"

function NotFound() {

  const navigate = useNavigate()

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-center">

      <div className="text-[120px] font-extrabold text-accent opacity-20 leading-none mb-6">
        404
      </div>

      <p className="text-light/50 text-lg mb-10 leading-relaxed max-w-md mx-auto">
        The page you are looking for does not exist.
        It might have been moved or deleted.
      </p>

       <button
        onClick={() => navigate('/')}
        className="px-10 py-3 rounded-xl bg-accent text-white font-bold text-base hover:opacity-90 transition-all hover:scale-105 active:scale-95"
      >
        ← Back to Home
      </button>

    </div>
  )
}

export default NotFound