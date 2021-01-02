import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Writing({ posts }: { posts: string[] }): JSX.Element {
  return (
    <div className="p-5 font-mono text-sm">
      <header>
        <h1>writing</h1>
      </header>
      <ul className="m-10 ml-0 sm:ml-10">
        {posts.map((name) => (
          <li key={name} className="py-2">
            <span className="font-sans pr-10 text-xs text-gray-400">
              a year ago
            </span>
            <Link href={`/writing/${name}`}>
              <a className="text-blue-400 underline visited:text-purple-500">
                {name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = fs
    .readdirSync(path.join(process.cwd(), "/pages/writing"))
    .map((filename) => filename.replace(".tsx", ""));
  return {
    props: {
      posts,
    },
  };
};
