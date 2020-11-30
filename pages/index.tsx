import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.module.css";
import Image from "next/image";

type LinkConfig = {
  display: string;
  href: string;
  row: number;
  column: number;
  span: number;
};

const links: LinkConfig[] = [
  {
    display: "PHOTOS",
    href: "/photos",
    row: 2,
    column: 10,
    span: 4,
  },
  {
    display: "CONTACT",
    href: "/contact",
    row: 6,
    column: 11,
    span: 4,
  },
  {
    display: "WRITING",
    href: "/writing",
    row: 7,
    column: 9,
    span: 4,
  },
  {
    display: "SHOP",
    href: "/shop",
    row: 13,
    column: 3,
    span: 4,
  },
  {
    display: "ART",
    href: "/art",
    row: 15,
    column: 10,
    span: 3,
  },
];
const spaces = 16;
const numTulips = spaces * spaces;
const tulips = links.reduce((prev, curr) => {
  return prev - curr.span;
}, numTulips);
const tulipArr = [...Array(tulips).keys()];

export default function Home(): JSX.Element {
  return (
    <div className="p-1 grid h-full grid-cols-ts grid-rows-ts gap-1">
      <Head>Bea Helman</Head>
      {tulipArr.map((row) => {
        return <img src="/tulip.png" key={`${row}`} />;
      })}
      {links.map((link) => (
        <Button key={link.href} config={link} />
      ))}
    </div>
  );
}

const Button: React.FC<{ config: LinkConfig }> = ({ config }) => {
  return (
    <Link href={config.href}>
      <button
        className={`font-bold text-lg`}
        style={{
          gridColumn: `${config.column} / span ${config.span}`,
          gridRow: `${config.row}`,
        }}
      >
        {config.display}
      </button>
    </Link>
  );
};
