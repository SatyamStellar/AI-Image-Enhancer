# React AI Image Enhancer

A React-based web application that allows users to upload images and enhance them using an AI-powered API. The app features a modern UI with a gradient design, glassmorphism effects, and a responsive layout.

## Features

- Upload images (JPEG, PNG, WebP) via drag-and-drop or click.
- Enhance images using an external AI API.
- Side-by-side preview of original and enhanced images.
- Smooth loading animations during enhancement.
- Responsive design with Tailwind CSS styling.

## Tech Stack

- **Frontend**: React 19, Vite 6.2.6
- **Styling**: Tailwind CSS 4.1.3
- **API Requests**: Axios 1.8.4
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Project Structure

├── src/ <br>
│ ├── components/ <br>
│ │ ├── Home.jsx <br>
│ │ ├── ImageUpload.jsx <br>
│ │ ├── ImagePreview.jsx <br>
│ │ └── Loading.jsx <br>
│ ├── utils/ <br>
│ │ └── enhanceImageApi.js <br>
│ ├── App.jsx <br>
│ ├── main.jsx <br>
│ └── index.css <br>
├── .env <br>
├── vite.config.js <br>
├── package.json <br>
├── pnpm-lock.yaml <br>
├── eslint.config.js <br>
└── index.html <br>

## Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/react-ai-image-enhancer.git
   cd react-ai-image-enhancer
   pnpm install
   ```

## **Environment Variables**:

Create a `.env` file in the root directory and add your API key:

```plaintext
VITE_API_KEY=your_api_key_here
```

### Made with 🩶 by Satyam
