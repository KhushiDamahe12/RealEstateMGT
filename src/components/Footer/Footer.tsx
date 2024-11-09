import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi';
import NewsletterSubscription from '../NewsLetter/NewsLetter';
import logo from '../../../../4th year full stack Assets/Lead Generation Landing page (Images)/logolight.svg'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto  flex flex-col items-center space-y-6">
      
      {/* Newsletter Subscription Component */}
      <NewsletterSubscription />

      {/* Divider */}
      <div className="w-full border-t border-gray-700 my-6"></div>

      {/* Footer Main Content */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="" />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center space-x-4 text-sm md:text-base mb-4 md:mb-0">
          <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-400">About us</a></li>
          <li><a href="#" className="hover:text-gray-400">Features</a></li>
          <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact us</a></li>
          <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
          <li><a href="#" className="hover:text-gray-400">Careers</a></li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400">
            <FiTwitter size={18} />
          </a>
          <a href="#" aria-label="Facebook" className="text-white hover:text-blue-600">
            <FiFacebook size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-white hover:text-blue-500">
            <FiLinkedin size={18} />
          </a>
          <a href="#" aria-label="YouTube" className="text-white hover:text-red-600">
            <FiYoutube size={18} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-4">
        <p className="text-sm">
          © 2024 Brand, Inc. • <a href="#" className="hover:text-gray-400">Privacy</a> • <a href="#" className="hover:text-gray-400">Terms</a> • <a href="#" className="hover:text-gray-400">Sitemap</a>
        </p>
      </div>
    </div>
  </footer>

  );
}
