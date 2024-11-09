
export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.visily.ai/text2design/images/1a7671883cf470c580f2807c8ac77b655b6790f1d46f42a7d7de100faef28062.png')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto flex flex-col items-center justify-center h-full text-center relative z-10 text-white">
                <h1 className="text-4xl md:text-6xl font-bold">Your Project Starts Here, Right Now!</h1>
                <p className="text-lg md:text-xl mt-4">Kick off your creative journey with RealTrust today.</p>
                <a href="#projects" className="mt-8 px-6 py-3 bg-blue-500 rounded-md text-white text-lg font-bold hover:bg-blue-600">Get Started</a>
            </div>
        </section>
    );
}
