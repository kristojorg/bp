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
    color: "white",
  },
  {
    display: "CONTACT",
    href: "/contact",
    row: 3,
    column: 3,
    span: 2,
    color: "rgb(213, 141, 141)",
  },
  {
    display: "WRITING",
    href: "/writing",
    row: 5,
    column: 2,
    span: 2,
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

export default function Photos({ photos }: { photos: string[] }): JSX.Element {
  return (
    <div className="grid p-2 gap-2 grid-cols-4 justify-items-center">
      {photos.map((name) => (
        <div className="" key={name}>
          <Image
            src={`/photos/${name}`}
            objectFit="cover"
            width={300}
            height={300}
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
          backgroundColor: config.color,
        }}
      >
        {config.display}
      </button>
    </Link>
  );
};
