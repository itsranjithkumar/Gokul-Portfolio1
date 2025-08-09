import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-neutral-200 py-4 px-6 flex items-center justify-between">
      <div className="text-xl font-bold text-neutral-800">GokulKrishan</div>
      <div className="flex gap-6 text-neutral-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Project">Projects</Link>
        <Link href="/Contact">Contact</Link>
      </div>
    </nav>
  );
}
