export default function Home() {
    return (
        <div>
            {/* Hero */}
            <div className="mt-32 h-dvh/2 bg-black ">
                <img
                    src="/collage.png"
                    alt="Collage promocional"
                    className="w-full object-cover"
                />
            </div>

            {/* Features */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

                    {/* Envíos */}
                    <div className="flex flex-col items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
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
                            className="w-10 h-10 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
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

            <div className="grid grid-cols-5 grid-rows-5 gap-4 ">
                <div >
                    <img src="" alt="" /></div>
                <div >
                    <img src="" alt="" /></div>
                <div className="row-start-2">
                    <img src="/" alt="" /></div>
                <div className="row-start-2">
                    <img src="/" alt="" /></div>
                <div className="row-start-3">
                    <img src="/" alt="" /></div>
                <div className="row-start-3">
                    <img src="/" alt="" /></div>
                <div className="row-start-4">
                    <img src="/" alt="" /></div>
                <div className="row-start-4">
                    <img src="/" alt="" /></div>
                <div className="row-start-5">
                    <img src="/" alt="" /></div>
                <div className="row-start-5">
                    <img src="/" alt="" /></div>
            </div>


        </div>
    )
}
