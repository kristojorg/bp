import Head from "next/head";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div
      className="h-full bg-tulip bg-repeat flex justify-center items-center"
      style={{ backgroundSize: "10%" }}
    >
      <Head>Bea Helman</Head>
      <nav className="flex">
        <Button href="/photo">PHOTO</Button>
        <Button href="/buy">BUY</Button>
        <Button href="/contact">CONTACT</Button>
        <Button href="/other">OTHER</Button>
      </nav>
    </div>
  );
}

const Button: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <Link href={href}>
      <button className="p-3">{children}</button>
    </Link>
  );
};
