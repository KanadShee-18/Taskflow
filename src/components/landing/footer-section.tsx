import { MainLogo } from "@/components/common/app-logo";
import { Link } from "next-view-transitions";

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-50 py-12 md:py-16 border-t border-gray-200 relative"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <MainLogo />
            <p className="text-gray-600 my-4 max-w-md font-sans-source font-medium">
              Streamline your workflow with Taskflow, the agile project
              management solution designed for modern teams.
            </p>
            <div className="flex space-x-4">
              <a
                href="#footer"
                className="text-gray-400 hover:text-indigo-600 transition"
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
                href="#footer"
                className="text-gray-400 hover:text-indigo-600 transition"
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#footer"
                className="text-gray-400 hover:text-indigo-600 transition"
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
                href="#footer"
                className="text-gray-400 hover:text-indigo-600 transition"
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
            <h3 className="font-semibold mb-4 text-gray-600">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-600">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Support Center
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  API Reference
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-600">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#footer"
                  className="text-gray-600 hover:text-indigo-600 transition"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Taskflow. All rights reserved.
          </p>
          <div className="flex flex-wrap space-x-6">
            <Link
              href="#footer"
              className="text-gray-500 hover:text-indigo-600 transition text-sm"
            >
              Terms
            </Link>
            <Link
              href="#footer"
              className="text-gray-500 hover:text-indigo-600 transition text-sm"
            >
              Privacy
            </Link>
            <Link
              href="#footer"
              className="text-gray-500 hover:text-indigo-600 transition text-sm"
            >
              Security
            </Link>
            <Link
              href="#footer"
              className="text-gray-500 hover:text-indigo-600 transition text-sm"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
