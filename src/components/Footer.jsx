import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 dark:bg-gray-800 text-gray-400 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/Raj-in-Git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/rajesh-v-501631154"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:rajeshvrj27@gmail.com">
          <FaEnvelope size={24} />
        </a>
      </div>
      © {new Date().getFullYear()} Rajesh. Built with using React.
    </footer>
  );
}
