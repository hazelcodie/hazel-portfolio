'use client'

import Image from "next/image";

export const Footer = () =>{
return(
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a
        href="#"
        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
      >
        <Image
          src="/images/created-to-create-logo.png"
          className="h-8"
          alt="Created to Create by Hazel Logo"
        />
        
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li>
          <a href="#about-me" className="hover:underline me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="design-project" className="hover:underline me-4 md:me-6">
            Designs
          </a>
        </li>
        <li>
          <a href="#web-projects" className="hover:underline me-4 md:me-6">
            Web Projects
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2025{" "}
      <a href="https://flowbite.com/" className="hover:underline">
        Hazel Delda™
      </a>
      . All Rights Reserved.
    </span>
  </div>
</footer>
);
};

export default Footer;




