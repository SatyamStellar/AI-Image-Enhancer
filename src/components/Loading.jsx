import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-96">
            <div className="animate-spin border-4 border-t-transparent w-12 h-12 rounded-full border-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>
    );
};

export default Loading;
