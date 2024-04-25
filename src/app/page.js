import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="flex items-center justify-between py-6 px-20 bg-slate-800">
        <div className="logo">Logo</div>
        <ul className="flex gap-12">
          <Link href="Home">Home</Link>
          <Link href="About">About</Link>
          <Link href="Services">Services</Link>
          <Link href="Login">Login</Link>
        </ul>
      </div>
    </main>
  );
}
