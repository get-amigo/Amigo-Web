import Link from "next/link";

export function PlayStoreLink({ link }: { link?: string }) {
  return (
    <Link
      href={link || "#"}
      aria-label="Download on the App Store"
      className="transition-all duration-300  hover:scale-[1.07]"
    >
      <img
        src="/images/playstore-badge.png"
        alt="Download on the Play Store"
        className="block w-40"
      />
    </Link>
  );
}
