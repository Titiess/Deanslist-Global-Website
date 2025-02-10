import Image from "next/image";
import Link from "next/link";

export default function FooterMobile() {
  return (
    <div className="md:hidden">
      {/* Logo Section */}
      <div className="mb-10 flex items-center gap-2 px-10">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <span className="text-xl font-semibold">DeansListDAO</span>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between px-10">
        <nav>
          <ul className="flex flex-col space-y-5">
            <Link href="/#hero" className="hover:text-[#D896F7]">Home</Link>
            <Link href="/#about-us" className="hover:text-[#D896F7]">About us</Link>
            <Link href="/#events" className="hover:text-[#D896F7]">Events</Link>
            <Link href="/#services" className="hover:text-[#D896F7]">Services</Link>
          </ul>
        </nav>

        <div>
          <ul className="flex flex-col space-y-5">
            <Link href="https://leaderboard.deanslist.services/leaderboard" target="_blank" className="hover:text-gray-300">
              <li>Leaderboard</li>
            </Link>
            <Link href="https://deans-list-docs.pages.dev/" target="_blank" className="hover:text-gray-300">
              <li>Documentation</li>
            </Link>
            <Link href="https://www.tensor.trade/trade/deanslist" target="_blank" className="hover:text-gray-300">
              <li>NFT Store</li>
            </Link>
            <Link href="/privacy" target="_blank" className="hover:text-gray-300">
              <li>Privacy</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="my-10">
        <div className="flex justify-center space-x-4 border-t border-[#191028] pt-10 pb-5">
          <Link href="https://x.com/deanslistDAO" target="_blank">
            <Image src="/twitter.png" alt="Twitter" width={24} height={24} className="w-6 h-6" />
          </Link>
          <Link href="https://discord.gg/deanslist" target="_blank">
            <Image src="/discord.png" alt="Discord" width={24} height={24} className="w-6 h-6" />
          </Link>
          <Link href="https://github.com/dean-s-list" target="_blank">
            <Image src="/git.png" alt="GitHub" width={24} height={24} className="w-6 h-6" />
          </Link>
        </div>
        <p className="text-center">&copy; {new Date().getFullYear()} DeanslistDAO. All rights reserved.</p>
      </div>
    </div>
  );
}
