import Image from "next/image";
import Link from "next/link";

export function PlayStoreLink({
  link
}: {
  link?: string;
}) {
  return (
    <Link href={link || "#"} 
    aria-label="Download on the App Store">
      <Image
        src="/images/playstore-badge.png"
        alt="Download on the Play Store"
        className="block w-40"
      />
    </Link>
  );
}
