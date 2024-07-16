import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export function AppStoreLink({
  link
}: {
  link?: string;
}) {
  return (
    <Link href={link || "#"} 
    aria-label="Download on the App Store">
      <Image
       width={100}
       height={100}
        src="/images/App Store.png"
        alt="Download from App Store"
        className="block w-40 h-auto"

      />
    </Link>
  );
}
