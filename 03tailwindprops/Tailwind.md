On tailwind website Go to framework and downloadwith vite

->Run below commands
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


->Put below in content of tailwind.config.js
[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


->Put below in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;