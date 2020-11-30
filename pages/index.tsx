import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.module.css";

export default function Home(): JSX.Element {
  return (
    <div
      className="h-full bg-tulip bg-repeat justify-center items-center relative"
      style={{ backgroundSize: "10%" }}
    >
      <Head>Bea Helman</Head>
      <Button className={`absolute ${styles.photos}`} href="/photos">
        PHOTOS
      </Button>
      <Button className={`absolute ${styles.contact}`} href="/contact">
        CONTACT
      </Button>
      <Button className={`absolute ${styles.writing}`} href="/writing">
        WRITING
      </Button>
      <Button className={`absolute ${styles.shop}`} href="/shop">
        SHOP
      </Button>
      <Button className={`absolute ${styles.art}`} href="/art">
        ART
      </Button>
    </div>
  );
}

const Button: React.FC<{ href: string; className?: string }> = ({
  children,
  className,
  href,
}) => {
  return (
    <Link href={href}>
      <button className={`p-3 font-bold text-lg ${className}`}>
        {children}
      </button>
    </Link>
  );
};
