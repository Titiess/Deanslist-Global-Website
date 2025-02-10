"use client";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto hidden md:block text-white p-6 sm:p-16 ">
      {/* Top Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center pb-10 space-y-6 sm:space-y-0">
        {/* Top left content */}
        <div className="flex items-center justify-center sm:justify-start">
          <Image src="/dean.png" alt="DeansListDAO Logo" width={40} height={40} className="w-10 h-10 mr-2" />
          <span className="text-xl font-bold">DeansListDAO</span>
        </div>

        {/* Top middle content */}
        <nav className="flex flex-col sm:flex-row text-center sm:space-x-4 gap-3 sm:gap-7">
          <Link href="#hero" className="hover:text-gray-300">Home</Link>
          <Link href="/#services" className="hover:text-gray-300">Services</Link>
          <Link href="/#about-us" className="hover:text-gray-300">About Us</Link>
          <Link href="/#events" className="hover:text-gray-300">Events</Link>
          <Link href="/leaderboard" target="_blank" className="hover:text-gray-300">Leaderboard</Link>
        </nav>

        {/* Top right content */}
        <div className="flex justify-center space-x-4">
          <Link href="https://x.com/deanslistDAO" target="_blank" className="hover:text-gray-300">
            <Image src="/twitter.png" alt="Twitter" width={24} height={24} className="w-6 h-6" />
          </Link>
          <Link href="https://discord.gg/deanslist" target="_blank" className="hover:text-gray-300">
            <Image src="/discord.png" alt="Discord" width={24} height={24} className="w-6 h-6" />
          </Link>
          <Link href="https://github.com/dean-s-list" target="_blank" className="hover:text-gray-300">
            <Image src="/git.png" alt="GitHub" width={24} height={24} className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <hr className="border-t border-gray-700 my-4 xl:mb-10" />

      {/* Base content */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row text-center sm:space-x-4 space-y-3 sm:space-y-0">
          <Link href="https://deans-list-docs.pages.dev/" className="hover:text-gray-300" target="_blank">Documentation</Link>
          <Link href="https://www.tensor.trade/trade/deanslist" target="_blank" className="hover:text-gray-300">NFT Store</Link>
          <Link href="/privacy" className="hover:text-gray-300">Privacy</Link>
        </div>
        <p className="text-center">&copy; {new Date().getFullYear()} DeanslistDAO. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
