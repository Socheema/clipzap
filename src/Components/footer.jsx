import { FaGithub } from "react-icons/fa";

function FooterComponent() {
  return (
    <footer className=" text-gray-300 pt-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:px-7 flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <small className="text-white">Built by Azubuike Chima Francis</small> |
            <a href="https://www.github.com/socheema">
              <FaGithub className="inline ml-2 cursor-pointer text-gray-400 hover:text-white transition-colors" />
            </a>{" "}|{" "}
            <a href="https://www.github.com/socheema" className="text-sm cursor-pointer text-gray-300 hover:text-white transition-colors">Portfolio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
