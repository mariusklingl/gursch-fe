import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  let router = useRouter();

  console.log(router.asPath);

  return (
    <div className="fixed z-30 bottom-5 left-0 right-0 flex justify-center">
      <div className="p-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm md:text-xl flex space-x-2 md:space-x-7 font-thin shadow-xl">
        <Link href="/" passHref>
          <button
            className={`${
              router.asPath === "/"
                ? "bg-white rounded-full px-2 md:px-4 py-1 text-black"
                : "bg-transparent rounded-full px-2 md:px-4 py-1 text-white"
            }`}
          >
            Home
          </button>
        </Link>
        <Link href="/#leistungen" passHref>
          <button
            className={`${
              router.asPath === "/#leistungen"
                ? "bg-white rounded-full px-2 md:px-4 py-1 text-black"
                : "bg-transparent rounded-full px-2 md:px-4 py-1 text-white"
            } `}
          >
            Leistungen
          </button>
        </Link>
        <Link href="/ueber_uns" passHref>
          <button
            className={`${
              router.asPath === "/ueber_uns"
                ? "bg-white rounded-full px-2 md:px-4 py-1 text-black"
                : "bg-transparent rounded-full px-2 md:px-4 py-1 text-white"
            } `}
          >
            Über uns
          </button>
        </Link>
        <Link href="/unsere_fenster" passHref>
          <button
            className={`${
              router.asPath === "/unsere_fenster"
                ? "bg-white rounded-full px-2 md:px-4 py-1 text-black"
                : "bg-transparent rounded-full px-2 md:px-4 py-1 text-white"
            } `}
          >
            Fenster
          </button>
        </Link>
      </div>
    </div>
  );
}
