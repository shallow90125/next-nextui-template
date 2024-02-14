import Link from "next/link";

export default function Header() {
  return (
    <header className=" sticky top-0 z-50 grid h-[3.75rem] place-items-center border-b border-divider bg-background">
      <div className=" gap-4 p-4">
        <Link
          href="/"
          className=" flex flex-none place-items-center gap-2 rounded text-lg font-bold text-primary"
        >
          Template
        </Link>
      </div>
    </header>
  );
}
