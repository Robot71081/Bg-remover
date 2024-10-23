import React from 'react'

const Footer = () => {
  return (
    
    <footer className="bg-opacity-80 p-4 mt-6">
    <div className="text-center text-zinc-800">
        <p className="text-sm">© {new Date().getFullYear()} Made by Rohit Pawar.</p>
        
        {/* Back to Top Button */}
        <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="mt-4 bg-white text-zinc-800 font-semibold py-1 px-4 rounded-full hover:bg-zinc-800 hover:text-white transition-colors duration-300"
        >
            Back to Top
        </button>
    </div>
</footer>

 
    
  )
}

export default Footer

