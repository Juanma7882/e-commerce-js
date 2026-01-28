export default function GalleryProducts() {
    return (
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

    )
}
