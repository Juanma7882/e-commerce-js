
export default function NewsLetter() {
    return (
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
    )
}
