import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

type LinkConfig = {
  display: string;
  href: string;
  row: number;
  column: number;
  span: number;
  color: string;
};

const links: LinkConfig[] = [
  {
    display: "HOME",
    href: "/",
    row: 1,
    column: 2,
    span: 1,
    color: "mistyrose",
  },
  {
    display: "CONTACT",
    href: "/contact",
    row: 3,
    column: 3,
    span: 1,
    color: "rgb(213, 141, 141)",
  },
  {
    display: "WRITING",
    href: "/writing",
    row: 5,
    column: 2,
    span: 1,
    color: "#9db2d9",
  },
  {
    display: "SHOP",
    href: "/shop",
    row: 6,
    column: 1,
    span: 1,
    color: "white",
  },
  {
    display: "ART",
    href: "/art",
    row: 10,
    column: 4,
    span: 1,
    color: "#ffd3ae",
  },
];

const size = 500;

export default function Photos({ photos }: { photos: string[] }): JSX.Element {
  return (
    <div
      className="grid p-2 gap-2 justify-center justify-items-center"
      style={{ gridTemplateColumns: `repeat(4, minmax(0, ${size}px))` }}
    >
      {photos.map((name) => (
        <div className="relative" key={name}>
          <Image
            key={name}
            src={`/photos/${name}`}
            objectFit="cover"
            width={size}
            height={size}
          />
        </div>
      ))}
      {links.map((link) => (
        <Button key={link.href} config={link} />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const photos = fs.readdirSync(path.join(process.cwd(), "/public/photos"));
  return {
    props: {
      photos,
    },
  };
};

const Button: React.FC<{ config: LinkConfig }> = ({ config }) => {
  return (
    <Link href={config.href}>
      <button
        className={`h-full w-full font-bold text-lg`}
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
