import React from 'react'
import Link from 'next/link'

const footer = () => {
  return (
    <footer className="font-sans tracking-wide bg-[#213343] py-10 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-5">
            <li>
              <Link href="/about-us" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Our Story</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Newsroom</Link>
            </li>
            <li>
              <Link href="contact" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Careers</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Services</h4>
          <ul className="space-y-5">
            <li>
              <Link href="#" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Web Development</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Testing Automation</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">AWS Development Services</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Mobile App Development</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Platforms</h4>
          <ul className="space-y-5">
            <li>
              <Link href="#" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Hubspot</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Marketo Integration Services</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Marketing Glossary</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">UIPath</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Company</h4>
          <ul className="space-y-5">
            <li>
              <Link href="/home" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Accessibility</Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Contact</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all">Learn more</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center border-[#6b5f5f] pt-8 mt-8">
        <p className="text-gray-300 text-[15px]">
© RimshaAleem. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default footer
