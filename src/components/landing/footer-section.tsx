import { MainLogo } from '@/components/common/app-logo';
import { Link } from 'next-view-transitions';

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative mx-auto border-t border-gray-200 bg-gray-50 py-12 md:py-16"
    >
      <div className="container mx-auto max-w-[1408px] px-10 md:px-6">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <MainLogo />
            <p className="font-sans-source my-4 max-w-md font-medium text-gray-600">
              Streamline your workflow with Taskflow, the agile project
              management solution designed for modern teams.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/Kanad_Shee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/KanadShee-18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M12 0.297c-6.63 0-12 5.373-12 12 
      0 5.303 3.438 9.8 8.205 11.385 
      0.6 0.113 0.82-0.26 0.82-0.577 
      0-0.285-0.01-1.04-0.015-2.04 
      -3.338 0.724-4.042-1.61-4.042-1.61 
      -0.546-1.387-1.333-1.757-1.333-1.757 
      -1.089-0.745 0.084-0.729 0.084-0.729 
      1.205 0.084 1.84 1.236 1.84 1.236 
      1.07 1.835 2.807 1.304 3.492 0.997 
      0.108-0.775 0.418-1.305 0.762-1.605 
      -2.665-0.3-5.466-1.335-5.466-5.93 
      0-1.31 0.465-2.38 1.235-3.22 
      -0.123-0.303-0.535-1.523 0.117-3.176 
      0 0 1.008-0.322 3.301 1.23 
      0.957-0.266 1.983-0.399 3.003-0.404 
      1.02 0.005 2.047 0.138 3.006 0.404 
      2.291-1.552 3.297-1.23 3.297-1.23 
      0.653 1.653 0.242 2.873 0.118 3.176 
      0.77 0.84 1.233 1.91 1.233 3.22 
      0 4.61-2.804 5.625-5.475 5.92 
      0.43 0.372 0.823 1.102 0.823 2.222 
      0 1.606-0.015 2.898-0.015 3.293 
      0 0.32 0.216 0.694 0.825 0.576 
      C20.565 22.092 24 17.592 24 12.297 
      c0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/kanadshee/"
                target="_blank"
                rel={'noopener noreferrer'}
                className="text-gray-400 transition hover:text-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kanadshee/"
                target="_blank"
                className="text-gray-400 transition hover:text-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-gray-600">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-gray-600">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  Support Center
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  API Reference
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-gray-600">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 transition hover:text-indigo-600"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row">
          <p className="mb-4 text-sm text-gray-500 md:mb-0">
            © 2025 Taskflow. All rights reserved.
          </p>
          <div className="flex flex-wrap space-x-6">
            <Link
              href="#footer"
              className="text-sm text-gray-500 transition hover:text-indigo-600"
            >
              Terms
            </Link>
            <Link
              href="#footer"
              className="text-sm text-gray-500 transition hover:text-indigo-600"
            >
              Privacy
            </Link>
            <Link
              href="#footer"
              className="text-sm text-gray-500 transition hover:text-indigo-600"
            >
              Security
            </Link>
            <Link
              href="#footer"
              className="text-sm text-gray-500 transition hover:text-indigo-600"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
