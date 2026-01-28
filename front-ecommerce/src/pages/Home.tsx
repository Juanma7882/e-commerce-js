import Features from "./home/Features";
import GalleryProducts from "./home/GalleryProducts";
import Hero from "./home/Hero";
import NewsLetter from "./home/NewsLetter";

export default function Home() {
    return (
        <div className="">
            <Hero />
            <Features />
            <GalleryProducts />
            <NewsLetter />
        </div>
    )
}
