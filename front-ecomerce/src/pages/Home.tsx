export default function Home() {
    return (
        <div className="">
            {/* Hero */}
            <div className="mt-22 relative h-screen w-full">
                <img
                    src="/collage.png"
                    alt="Collage promocional"
                    className="w-full h-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-6xl font-bold bg-black/30">
                    Nueva temporada
                </span>
            </div>

            {/* Features */}
            <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 my-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

                    {/* Envíos */}
                    <div className="flex flex-col items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                        </svg>
                        <p className="font-medium text-gray-700">
                            Entregas a todo el país con seguimiento personalizado
                        </p>
                    </div>

                    {/* Calidad */}
                    <div className="flex flex-col items-center gap-3">
                        <img
                            src="/cinta.png"
                            alt="Calidad garantizada"
                            className="w-10 h-10 object-contain"
                        />
                        <p className="font-medium text-gray-700">
                            Productos de la más alta calidad con seguimiento de pedidos
                        </p>
                    </div>

                    {/* Pagos */}
                    <div className="flex flex-col items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l18 0" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 15l.01 0" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l2 0" />
                        </svg>
                        <p className="font-medium text-gray-700">
                            Pagos seguros y flexibles
                            con múltiples opciones
                        </p>
                    </div>

                </div>
            </div>
            {/* Gallery productos*/}
            <div>
                <h3 className="text-center text-xl font-bold my-4">~ Nuestros Productos ~</h3>
                <div className="flex flex-wrap gap-4 justify-center p-4 ">
                    <div className="relative w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)]">
                        <img
                            src="/ropa/carteraMujerBlanca1.webp"
                            alt="Cartera mujer blanca"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <span
                            className="absolute bottom-2 left-2 bg-white bg-opacity-70 text-black px-2 py-1 rounded-md text-sm"
                        >Cartera nieve</span>
                    </div>

                    <div className="relative w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)]">
                        <img
                            src="/ropa/osito.webp"
                            alt="Osito"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <span
                            className="absolute bottom-2 left-2 bg-white bg-opacity-70 text-black px-2 py-1 rounded-md text-sm"
                        >Remera oversize ositos</span>
                    </div>
                    <div className="relative w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)]">
                        <img
                            src="/ropa/remeraBlanca.webp"
                            alt="Remera blanca"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <span
                            className="absolute bottom-2 left-2 bg-white bg-opacity-70 text-black px-2 py-1 rounded-md text-sm"
                        >Remera blanca</span>
                    </div>
                    <div className="relative w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)]">
                        <img
                            src="/ropa/ganzo.webp"
                            alt="Ganzo"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <span
                            className="absolute bottom-2 left-2 bg-white bg-opacity-70 text-black px-2 py-1 rounded-md text-sm"
                        >Remera blanca</span>

                    </div>
                    <div className="relative w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)]">
                        <img
                            src="/ropa/carteraMujerCeleste.webp"
                            alt="Cartera mujer celeste"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <span
                            className="absolute bottom-2 left-2 bg-white bg-opacity-70 text-black px-2 py-1 rounded-md text-sm"
                        >cartera de mano</span>

                    </div>
                </div>
            </div>

            {/* new latter*/}
            <div className="bg-gray-50 py-16 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Título */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Suscríbete a nuestro boletín para recibir actualizaciones de nuestras últimas colecciones.
                    </h2>

                    {/* Subtítulo */}
                    <p className="text-gray-500 text-sm md:text-base mb-8">
                        obtén un 10% de descuento en tu primera compra al suscribirte.
                    </p>

                    {/* Formulario */}
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400 text-gray-700"
                        />
                        <button className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-medium">
                            Subscribe
                        </button>
                    </div>

                    {/* Texto legal */}
                    <p className="text-gray-400 text-xs my-12">
                        You will be able to unsubscribe at any time.
                        <br />
                        Read our Privacy Policy <a href="#" className="underline hover:text-gray-600">here</a>
                    </p>
                </div>
            </div>

        </div>
    )
}
