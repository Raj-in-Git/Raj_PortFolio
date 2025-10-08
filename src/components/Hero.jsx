export default function Hero() {
  return (
  <section className="h-screen flex flex-col justify-center items-center bg-gray-900 dark:bg-gray-800 text-white text-center animate-fadeInUp">
    <h1 className="text-5xl font-bold mb-4">Hi, I'm Rajesh 👋</h1>
    <p className="text-xl mb-6">Frontend Developer | React | MES Engineer</p>
    <a
      href="#projects"
      className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-6 py-3 rounded-lg transition shadow-lg"
    >
      View My Work
    </a>
  </section>

  );
}
