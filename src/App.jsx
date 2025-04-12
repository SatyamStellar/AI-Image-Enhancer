import Home from "./components/Home";

const App = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-zinc-900 to-gray-800 py-12 px-4">
            <div className="text-center mb-10">
                <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3">
                    AI Image Enhancer
                </h1>
                <p className="text-xl text-gray-300 max-w-md mx-auto">
                    Upload your image and watch AI transform it in seconds!
                </p>
            </div>

            <Home />

            <div className="text-sm text-gray-400 mt-8 flex flex-col items-center gap-3">
                <div className="flex gap-4">
                    <a
                        href="https://github.com/satyamStellar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all duration-300"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://satyamstellar.space"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-all duration-300"
                    >
                        Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default App;
