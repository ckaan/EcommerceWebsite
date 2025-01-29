import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind is Working! 🎉
      </h1>
    </div>
  );
}

