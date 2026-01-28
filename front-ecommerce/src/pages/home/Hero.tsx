export default function Hero() {
    return (
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
    )
}
