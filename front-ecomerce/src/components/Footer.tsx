export default function Footer() {
    return (
        <footer className="bg-[#222] text-white mt-24">
            {/* <!-- Sección Superior --> */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* <!-- Columna 1: Seguinos --> */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Seguinos</h3>
                        <div className="flex gap-5 mt-2">
                            <a href="#" aria-label="Seguinos en Instagram" className="transition-all duration-300 hover:opacity-80 hover:-translate-y-1">
                                <img
                                    className="h-8 w-8 object-contain"
                                    src="/Instagram_Glyph_Gradient.png"
                                    alt="Logo de Instagram - Síguenos"
                                />
                            </a>
                            <a href="#" aria-label="Seguinos en Facebook" className="transition-all duration-300 hover:opacity-80 hover:-translate-y-1">
                                <img
                                    className="h-8 w-8 object-contain"
                                    src="/Gmail.svg"  // ⚠️ Cambié el nombre porque tenías Gmail_Logo.svg
                                    alt="Logo de Facebook - Síguenos"
                                />
                            </a>
                            <a href="#" aria-label="Contáctanos por WhatsApp" className="transition-all duration-300 hover:opacity-80 hover:-translate-y-1">
                                <img
                                    className="h-8 w-8 object-contain"
                                    src="/whatsapp.svg"  // ⚠️ Corregí el nombre (washap.svg → whatsapp.svg)
                                    alt="Logo de WhatsApp - Escríbenos"
                                />
                            </a>
                        </div>
                    </div>

                    {/* <!-- Columna 2: Contactanos --> */}
                    <div>
                        <h3 className="font-bold text-lg mb-5">Contactanos</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-gray-300">
                                <i className="fas fa-phone text-green-500 text-lg"></i>
                                <span>+54 9 11 1234-5678</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <i className="fas fa-envelope text-green-500 text-lg"></i>
                                <span>info@tiendaonline.com</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Columna 3: Categorías --> */}
                    <div>
                        <h3 className="font-bold text-lg mb-5">Categorías</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover-slide block">Inicio</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover-slide block">Productos</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover-slide block">Contacto</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover-slide block">Cambios y Devoluciones</a></li>
                        </ul>
                    </div>

                    {/* <!-- Columna 4: Sobre Nosotros --> */}
                    <div>
                        <h3 className="font-bold text-lg mb-5">Sobre Nosotros</h3>
                        <p className="text-gray-300 leading-relaxed">Somos TiendaOnline, tu tienda online de confianza. Ofrecemos productos de calidad con la mejor experiencia de compra.</p>
                    </div>
                </div>
            </div>

            {/* <!-- Sección Media --> */}
            <div className="bg-[#1a1a1a]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Elemento 1: Seguridad y Pagos */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 font-bold">
                                <i className="fas fa-lock text-green-500 text-xl"></i>
                                <span>Pagá seguro</span>
                            </div>
                            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                                <div className="bg-[#333] px-4 py-2 rounded-md text-sm text-gray-400 font-semibold transition-all duration-300 hover:bg-[#444] hover:text-gray-300 hover:-translate-y-1">VISA</div>
                                <div className="bg-[#333] px-4 py-2 rounded-md text-sm text-gray-400 font-semibold transition-all duration-300 hover:bg-[#444] hover:text-gray-300 hover:-translate-y-1">MASTERCARD</div>
                                <div className="bg-[#333] px-4 py-2 rounded-md text-sm text-gray-400 font-semibold transition-all duration-300 hover:bg-[#444] hover:text-gray-300 hover:-translate-y-1">MERCADO PAGO</div>
                                <div className="bg-[#333] px-4 py-2 rounded-md text-sm text-gray-400 font-semibold transition-all duration-300 hover:bg-[#444] hover:text-gray-300 hover:-translate-y-1">AMEX</div>
                            </div>
                        </div>

                        {/* <!-- Elemento 2: Newsletter --> */}
                        <div>
                            <h3 className="font-bold text-lg mb-4">Suscribite a nuestro newsletter</h3>
                            <form className="flex flex-col sm:flex-row gap-2 mb-3" id="newsletterForm">
                                <input
                                    type="email"
                                    id="emailInput"
                                    placeholder="tuemail@ejemplo.com"
                                    required
                                    className="flex-1 px-4 py-3 border-2 border-gray-600 rounded-md bg-[#333] text-white transition-colors duration-300 focus:outline-none focus:border-green-500"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-green-500 text-white font-bold rounded-md transition-all duration-300 hover:bg-green-600 hover:-translate-y-1"
                                >
                                    SUSCRIBIR
                                </button>
                            </form>
                            <p className="text-gray-400 text-sm">Recibí ofertas exclusivas y novedades</p>
                        </div>

                        {/* <!-- Elemento 3: Enlaces Legales --> */}
                        <div className="lg:pl-19">
                            <h3 className="font-bold text-lg mb-4">Información Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover-slide block">Términos y condiciones</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover-slide block">Política de privacidad</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition-all duration-300 hover-slide block">Política de envíos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Sección Inferior --> */}
            <div className="bg-[#111]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-400 text-sm">
                        <div>© 2023 TiendaOnline. Todos los derechos reservados.</div>
                        <div>Desarrollado por: <a href="#" className="text-green-500 hover:text-green-400 transition-colors duration-300">DevTech Solutions</a></div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
