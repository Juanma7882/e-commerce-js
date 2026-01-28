
export default function Navbar() {
  return (
    <>
      <nav className="bg-[#e6e6e6] text-white fixed top-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* <!-- Logo --> */}
            <div className="shrink-0">
              <a href="#" className="text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
                <img className='h-15 w-15 object-contain' src="sunshine.png" alt="logo de la tienda" />
              </a>
            </div>

            {/* <!-- Enlaces Centrales - Desktop --> */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-black hover:text-blue-400 px-3 py-2  transition-all duration-300 ">
                Inicio
              </a>
              <a href="#" className="text-black hover:text-blue-400 px-3 py-2  transition-all duration-300 ">
                Productos
              </a>
              <a href="#" className="text-black hover:text-blue-400 px-3 py-2  transition-all duration-300 ">
                Sobre Nosotros
              </a>
              <a href="#" className="text-black hover:text-blue-400 px-3 py-2  transition-all duration-300 ">
                Contacto
              </a>
            </div>

            {/* <!-- Iconos Derecha --> */}
            <div className="flex items-center gap-4">
              {/* <!-- Carrito --> */}
              <a href="#" className="relative text-black  transition-colors duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  3
                </span>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Carrito
                </span>
              </a>

              {/* <!-- Usuario --> */}
              <a href="#" className="relative text-black  transition-colors duration-300 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Mi Cuenta
                </span>
              </a>

              {/* <!-- Botón Hamburguesa - Mobile --> */}
              <button id="menuToggle" className="md:hidden text-black cursor-pointer focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
              </button>

            </div>
          </div>
        </div>

        {/* <!-- Menú Mobile --> */}
        <div id="mobileMenu" className="md:hidden hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md hover:bg-gray-700 transition-all duration-300">
              Inicio
            </a>
            <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md hover:bg-gray-700 transition-all duration-300">
              Productos
            </a>
            <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md hover:bg-gray-700 transition-all duration-300">
              Sobre Nosotros
            </a>
            <a href="#" className="text-white hover:text-blue-400 block px-3 py-2 rounded-md hover:bg-gray-700 transition-all duration-300">
              Contacto
            </a>
          </div>
        </div>
      </nav>
      <div id="promoBar" className="bg-linear-to-r from-slate-800 to-black text-white text-center py-3 fixed top-16 w-full z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex-1 "></div>
          <p id="promoText" className="w-full font-bold text-sm sm:text-base">
            🎉 ENVÍO GRATIS EN COMPRAS SUPERIORES A $100.000 🎉
          </p>
        </div>
      </div>
    </>
  )
}
