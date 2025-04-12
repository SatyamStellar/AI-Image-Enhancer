import Loading from "./Loading"; // Add this import

const ImagePreview = (props) => {
    return (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            {/* Original Image */}
            <div className="bg-gray-800/50 backdrop-blur-lg shadow-xl rounded-3xl overflow-hidden border border-gray-700/50">
                <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-gray-700 to-gray-600 text-white py-3">
                    Original Image
                </h2>
                {props.uploaded ? (
                    <img
                        src={props.uploaded}
                        alt="Original"
                        className="w-full h-96 object-contain bg-gray-900"
                    />
                ) : (
                    <div className="flex items-center justify-center h-96 bg-gray-900/50 text-gray-400">
                        No Image Selected
                    </div>
                )}
            </div>

            {/* Enhanced Image */}
            <div className="bg-gray-800/50 backdrop-blur-lg shadow-xl rounded-3xl overflow-hidden border border-gray-700/50">
                <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3">
                    Enhanced Image
                </h2>
                {props.enhanced && !props.loading ? (
                    <img
                        src={props.enhanced}
                        alt="Enhanced"
                        className="w-full h-96 object-contain bg-gray-900"
                    />
                ) : props.loading ? (
                    <Loading />
                ) : (
                    <div className="flex items-center justify-center h-96 bg-gray-900/50 text-gray-400">
                        No Enhanced Image
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImagePreview;
