import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your actual API key
const BASE_URL = "https://techhk.aoscdn.com";
const MAXIMUM_RETRIES = 20;

// Allowed raster image types (no SVG)
const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

/**
 * Main function to enhance an image
 * @param {File} file - A valid File object (from <input type="file">)
 */
export const enhancedImageAPI = async (file) => {
    try {
        if (!(file instanceof File)) {
            throw new Error("Provided input is not a valid file.");
        }

        if (!allowedTypes.includes(file.type)) {
            throw new Error(
                "Unsupported file type. Please upload a JPEG, PNG, or WebP image."
            );
        }

        console.log("Uploading file:", file.name, file.type, file.size);

        const taskId = await uploadImage(file);
        console.log("Image Uploaded Successfully, Task ID:", taskId);

        const enhancedImageData = await pollForEnhancedImage(taskId);
        console.log("Enhanced Image Data:", enhancedImageData);

        return enhancedImageData;
    } catch (error) {
        console.error("Error enhancing image:", error.message);
        throw error;
    }
};

/**
 * Uploads the image to the enhancement API and returns the task ID
 * @param {File} file 
 * @returns {Promise<string>}
 */
const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file); // Use correct key per API docs

    const response = await axios.post(
        `${BASE_URL}/api/tasks/visual/scale`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY,
            },
        }
    );

    console.log("Upload Response:", response.data);

    const taskId = response?.data?.data?.task_id;
    if (!taskId) {
        throw new Error("Failed to upload image! Task ID not found.");
    }

    return taskId;
};

/**
 * Polls for the enhanced image result
 * @param {string} taskId 
 * @param {number} retries 
 * @returns {Promise<Object>}
 */
const pollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);

    if (result.state === 4) {
        console.log(`Still processing... (${retries}/${MAXIMUM_RETRIES})`);

        if (retries >= MAXIMUM_RETRIES) {
            throw new Error("Max retries reached. Please try again later.");
        }

        await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2s
        return pollForEnhancedImage(taskId, retries + 1);
    }

    if (result.state === -1) {
        throw new Error(`Image enhancement failed: ${result.state_detail || result.err_message}`);
    }

    console.log("Enhanced Image URL:", result);
    return result;
};

/**
 * Fetches the current status of the image enhancement task
 * @param {string} taskId 
 * @returns {Promise<Object>}
 */
const fetchEnhancedImage = async (taskId) => {
    const response = await axios.get(
        `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
            headers: {
                "X-API-KEY": API_KEY,
            },
        }
    );

    const resultData = response?.data?.data;
    if (!resultData) {
        throw new Error("Failed to fetch enhanced image! Image not found.");
    }

    return resultData;
};
