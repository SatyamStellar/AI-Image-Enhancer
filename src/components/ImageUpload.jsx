const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    return (
        <div className="shadow-2xl rounded-3xl p-8 w-full bg-gray-800 max-w-3xl transition-all duration-300">
            <label
                htmlFor="fileInput"
                className="block w-full cursor-pointer bg-gray-900 border-2 border-dashed border-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-center hover:bg-gray-800 hover:border-blue-400 transition-all duration-300"
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={ShowImageHandler}
                />
                <span className="text-xl font-semibold text-gray-200">
                    Drag & Drop or Click to Upload Your Image
                </span>
                <p className="mt-2 text-sm text-gray-400">
                    Supports JPG, PNG, and more
                </p>
            </label>
        </div>
    );
};

export default ImageUpload;
