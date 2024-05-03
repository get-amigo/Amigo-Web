import Link from "next/link";

export function PlayStoreLink() {
  return (
    <Link href="#" aria-label="Download on the App Store">
      <img
        src="/images/playstore-badge.png"
        alt="Download on the Play Store"
        className="block w-40"
      />
    </Link>
  );
}
