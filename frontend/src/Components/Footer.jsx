import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-12 pb-6 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Address Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center text-orange-500 text-xl font-bold">
              MPF 🏠
            </Link>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              <p>G-2, Deepleela Complex,</p>
              <p>Vindhyavasini Street, Kadamkuan,</p>
              <p>PATNA, Bihar, India.</p>
              <p>PIN - 800003</p>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-gray-800 dark:text-white font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">About Us</Link></li>
              <li><Link to="/features" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">Features</Link></li>
              <li><Link to="/news" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">News & Blog</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-gray-800 dark:text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/how-we-work" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">How We Work?</Link></li>
              <li><Link to="/capital" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">Capital</Link></li>
              <li><Link to="/security" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">Security</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-gray-800 dark:text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/faqs" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">FAQs</Link></li>
              <li><Link to="/support-center" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">Support center</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2023 MAA PREMA FOUNDATION. All rights reserved
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500">
                  <span className="sr-only">Pinterest</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 19.312c-.742 0-1.32-.61-1.32-1.368 0-.76.6-1.368 1.32-1.368.742 0 1.32.61 1.32 1.368 0 .76-.6 1.368-1.32 1.368zm0-15.312c-3.314 0-6 2.686-6 6 0 2.542 1.592 4.71 3.83 5.56-.056-.712-.11-1.814.024-2.594.118-.674.764-4.284.764-4.284s-.194-.388-.194-.96c0-.898.52-1.566 1.168-1.566.55 0 .816.412.816.908 0 .554-.352 1.38-.536 2.146-.152.644.324 1.17.96 1.17 1.152 0 2.044-1.21 2.044-2.964 0-1.55-1.112-2.636-2.696-2.636-1.838 0-2.918 1.378-2.918 2.796 0 .554.214.96.486 1.268.054.066.062.124.046.19-.05.208-.162.658-.184.75-.03.124-.098.15-.228.09-0.846-.39-1.376-1.618-1.376-2.606 0-2.042 1.482-3.918 4.276-3.918 2.242 0 3.982 1.59 3.982 3.71 0 2.22-1.402 4.01-3.34 4.01-.648 0-1.258-.336-1.466-.736l-.398 1.51c-.144.556-.532 1.254-.792 1.68.598.176 1.226.27 1.882.27 3.314 0 6-2.686 6-6s-2.686-6-6-6z"/>
                  </svg>
                </a>
              </div>
              <div className="flex space-x-4">
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 text-sm">
                  Terms & Agreements
                </Link>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500 text-sm">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;