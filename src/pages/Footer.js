import React from "react";
import { assets } from "../assets/assets";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <div className="flex items-center mb-5">
            <img className="min-w-36 " src={assets.logo} alt="" />
            <p className="text-xl font-bold -ml-[105px] text-[#4A5568]">
              Gravitorix
            </p>
          </div>

          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className="mb-5 font-medium text-xl">Links</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>About us</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>How it works</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <p className="mb-5 font-medium text-xl">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+919876543210</li>
            <li>contact@gravitorix.com</li>
          </ul>
           <div className="flex justify-end items-center gap-4 mt-10">
            <FaFacebookF className="text-3xl p-2 bg-white rounded-full shadow-lg cursor-pointer " />
            <FaInstagram className="text-3xl p-2 bg-white rounded-full shadow-lg cursor-pointer" />
            <FaXTwitter className="text-3xl p-2 bg-white rounded-full shadow-lg cursor-pointer" />
            <TiSocialLinkedin className="text-3xl p-2 bg-white rounded-full shadow-lg cursor-pointer" />
          </div>
        </div>
      </div>

      <div>
        <hr />
        <p className="text-center py-5 text-sm">
          Copyright 2025@ Gravitorix - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
