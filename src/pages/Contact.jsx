import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Contact() {
  const navigate = useNavigate()

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[message, setMessage] = useState('')
  const[submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if(!name || !email || !message) return
    setSubmitted(true)
  }

  const inputClass = "w-full px-4 py-3 rounded-xl bg-navy border border-accent/30 text-light text-sm outline-none focus:border-accent transition-all mb-4"
  const labelClass = "block text-sm font-semibold text-light/70 mb-1.5"


  return (
    <div className="max-w-lg mx-auto px-6 py-16">

      {/* show success state after form submit */}
      {submitted ? (
        <div className="text-center py-14">
          <div className="text-6xl mb-5">✅</div>
          <h2 className="text-3xl font-extrabold text-light mb-3">
            Message Sent!
          </h2>
          <p className="text-light/50 text-sm mb-8 leading-relaxed"> 
            Thanks for reaching out. We will get back to you soon.
          </p>
          {/* useNavigate to go back home after submit */}
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 rounded-xl bg-accent text-white font-bold hover:opacity-90 transition-all hover:scale-105 active:scale-95"
          >
            ← Back to Home
          </button>
        </div>
      ):(
        <>
          <h1 className="text-5xl font-extrabold text-light mb-3">
            Contact Us
          </h1>
          <p className="text-light/50 text-sm mb-10 leading-relaxed">
            Fill out the form and we will get back to you
          </p>

          {/* name */}
          <label className={labelClass}>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />

          {/* email */}
          <label className={labelClass}>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />

          {/* message */}
          <label className={labelClass}>Your Message</label>
          <textarea
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClass} min-h-[120px] resize-none`}
          />

           {/* submit button — disabled until all fields filled */}
          <button
            onClick={handleSubmit}
            disabled={!name || !email || !message}
            className="w-full py-4 rounded-xl bg-accent text-white font-bold text-base hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 disabled:hover:scale-100"
          >
            Send Message 🚀
          </button>
        </>
      )}
      
    </div>
  )
}

export default Contact