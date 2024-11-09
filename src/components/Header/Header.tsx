import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-20">

      <div className="container mx-auto flex justify-between items-center p-4 h-full">

        <div className="flex items-center space-x-4 h-full">
          <img src={logo} alt="RealTrust Logo" className="h-10  w-auto" />
        </div>

        <nav className="hidden sm:flex space-x-6 ml-auto mr-10 justify-center items-center h-full text-md">
          <a href="#about" className="text-darkBlueTheme font-bold hover:underline hover:cursor-pointer">About</a>
          <a href="#services" className="text-darkBlueTheme font-bold hover:underline  hover:cursor-pointer">Services</a>
          <a href="#projects" className="text-darkBlueTheme font-bold hover:underline  hover:cursor-pointer">Projects</a>
          <a href="#contact" className="text-darkBlueTheme font-bold hover:underline  hover:cursor-pointer">Contact</a>
        </nav>
        <Link
          to="/login"
          className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

