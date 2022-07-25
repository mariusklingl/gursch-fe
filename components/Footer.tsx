import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillFacebook } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="grid md:grid-cols-3 grid-cols-1  gap-6 px-5 pt-9 pb-24 mb-14 lg:mb-0 relative shaddow-footer bg-white">
      <div className="absolute bottom-5 left-5 font-light text-sm">
        Copyright {new Date().getFullYear()} - Gursch GmbH
      </div>
      <div className="absolute bottom-12 left-5 md:hidden font-light text-sm">Umsetzung - ESBIX UG</div>
      <div className="hidden md:block md:absolute md:bottom-5 md:right-5 font-light text-sm">Umsetzung - ESBIX UG</div>
      <div className="mx-auto ">
        <Image src="/logo.webp" height={80} width={200} />
        <p className="font-light text-xl">Gefühl für Werte</p>
        <div className="mt-5 flex space-x-4">
          <AiFillFacebook className="h-7 w-7 text-black/70" />
          <MdEmail className="h-7 w-7 text-black/70" />
        </div>
        <button
          onClick={() => router.push("/#kontakt")}
          className="px-6 py-2 border border-[#038F5F] mt-6 text-[#038F5F] rounded-md hover:bg-[#038F5F] hover:text-white"
        >
          Jetzt kontaktieren
        </button>
      </div>
      <div className="mx-auto ">
        <p className="uppercase text-[#038F5F] text-xl">Kontakt</p>
        <div className="text-md font-light">
          <p>Sankt-Pöltener-Straße 62</p>
          <p>70469 Stuttgart</p>
          <p>Deutschland</p>
        </div>
        <div className="text-md font-light mt-4">
          <p>+49 (0)711 767540</p>
          <p>+49 (0)171 7373738</p>
        </div>
        <div className="text-md font-light mt-4">
          <p>mail(at)gursch-gmbh.de</p>
        </div>
      </div>
      <div className="mx-auto ">
        <p className="uppercase text-[#038F5F] text-xl">Links</p>
        <div className="text-md font-light">
          <p>Impressum & Datenschutz</p>
          <p>Unsere Fenster</p>
          <p>Über uns</p>
          <p>Leistungen</p>
          <p>Referenzen</p>
        </div>
      </div>
    </div>
  );
}
