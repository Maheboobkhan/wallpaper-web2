import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  const puneLocalities = [
    "Aundh",
    "Akurdi",
    "Ambegaon",
    "Balewadi",
    "Baner",
    "Bavdhan",
    "Bhugaon",
    "Bhosale Nagar",
    "Bhosari",
    "Bibwewadi",
    "Camp",
    "Chakan",
    "Chinchwad",
    "Dhanori",
    "Dhankawadi",
    "Erandwane",
    "Hadapsar",
    "Hinjewadi",
    "Karve Nagar",
    "Katraj",
    "Kharadi",
    "Kondhwa",
    "Koregaon Park",
    "Kothrud",
    "Lohegaon",
    "Magarpatta",
    "Mahalunge",
    "Manjri",
    "Moshi",
    "Mundhwa",
  ];

  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <a href="#" className="mx-2 text-gray-600 hover:text-gray-900">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="mx-2 text-gray-600 hover:text-gray-900">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="mx-2 text-gray-600 hover:text-gray-900">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="mx-2 text-gray-600 hover:text-gray-900">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="mx-2 text-gray-600 hover:text-gray-900">
              <FaPinterest size={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between text-left mb-8">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="font-bold mb-2">Maheboob Wallpapers</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Find Art
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Printing Partner
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="font-bold mb-2">Help</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Returns & Cancellation
                </a>
              </li>
            </ul>
            <h4 className="font-bold mt-4 mb-2">Inquire</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="font-bold mt-4 mb-2">Services : </h4>
            <div className="flex flex-wrap">
              <ul className="w-1/2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Measurement Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Installation Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Customization Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Consultation Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Sample Delivery
                  </a>
                </li>
              </ul>
              <ul className="w-1/2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Maintenance Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Removal Services
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="font-bold mt-4 mb-2">Service Areas</h4>
            <div className="flex">
              <ul className="w-1/2">
                {puneLocalities.slice(0, 15).map((locality, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {locality}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="w-1/2">
                {puneLocalities.slice(15).map((locality, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {locality}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="font-bold mb-2">Contact Us</h4>
            <p className="text-gray-600">
              <strong>Mobile No.:</strong> 1234567890
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> info@maheboobwallpapers.com
            </p>
            <p className="text-gray-600">
              <strong>Customer Support:</strong> Monday - Saturday (10AM - 6PM)
            </p>
          </div>
        </div>
        <div className="text-center text-gray-600">
          <p>&copy;2024 Maheboob Wallpapers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
