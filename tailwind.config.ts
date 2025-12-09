import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f4e9d8", // Màu giấy báo cũ
        ink: "#1a1a1a",   // Màu mực đen (không đen tuyệt đối)
        'retro-red': "#b91c1c", // Màu đỏ cờ xỉn
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'Times', 'serif'], // Font chủ đạo
        heading: ['"Playfair Display"', 'serif'], // Font tiêu đề (nếu import thêm)
      },
    },
  },
  plugins: [],
};
export default config;