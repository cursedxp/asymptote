import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex gap-4 m-2">
          <li>
            <Link href={"relevant"}>Relevant</Link>
          </li>
          <li>
            <Link href={"latest"}>Latest</Link>
          </li>
          <li>
            <Link href={"top"}>Top</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
