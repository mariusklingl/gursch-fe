import { NextPage } from "next";
import Image from "next/image";

export default function UnserFenster<NextPage>() {
  return (
    <div>
      <div className="heroSection min-h-screen  flex items-center">
        <div className="block md:flex  justify-between w-full p-4">
          <div className="col-span-2 p-4 flex items-center">
            <div>
              <h1 className="text-3xl md:text-3xl  lg:text-[3.6rem] text-black/90 font-normal leading-normal lg:leading-[55px] max-w-md lg:max-w-4xl">
                Fenster aus teilweise eigener Produktion
              </h1>
              <p className="text-md md:text-lg  lg:text-2xl font-light">
                Individuell für Sie. Mit Materialien die Sie sich wünschen.
              </p>
              {/* <button className="bg-[#835E39] px-6 py-2 mt-6 text-white rounded-sm">
                Jetzt beraten lassen
              </button> */}
            </div>
          </div>
          <div className="relative m-20 shaddow-image">
            <Image
              priority
              src="/fensterPicture.png"
              className=" absolute"
              objectFit="cover"
              height={587}
              width={650}
            />
          </div>
        </div>
      </div>
      <div className="firstSection  pt-20">
        <div className="px-5 lg:px-10  py-2 bg-[#653C21] w-full md:w-auto inline-block rounded-r-sm">
          <h2 className="text-3xl md:text-4xl lg:text-7xl text-white">Holzfenster</h2>
        </div>
        <div className="px-5 md:px-8  lg:px-44 pt-20">
          <div className="holzFenster">
            <p className="max-w-3xl text-[#653C21] text-md md:text-lg font-normal">
              Holzfenster im IV68 und IV78 Profil – auch für den Denkmalschutzbereich durch unsere langjährigen
              Partnerfirmen.
            </p>
            <p className="mt-12  text-xl md:text-3xl font-light underline underline-offset-[8px] decoration-[0.5px]">
              Materialien für Ihre Anspüche.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 gap-4 lg:space-x-10">
              <div className="bg-white shadow-fensterItem px-12 py-6 text-xl md:text-2xl text-center font-light rounded-md">
                Eiche
              </div>
              <div className="bg-white shadow-fensterItem px-12 py-6 text-xl md:text-2xl text-center font-light rounded-md">
                Kiefer
              </div>
              <div className="bg-white shadow-fensterItem px-12 py-6 text-xl md:text-2xl text-center font-light rounded-md">
                Meranti
              </div>
              <div className="bg-white shadow-fensterItem px-12 py-6 text-xl md:text-2xl tetxt-center font-light rounded-md">
                Lärche
              </div>
            </div>
            <p className="mt-12 text-xl md:text-3xl font-light underline underline-offset-[8px] decoration-[0.5px]">
              Typen.
            </p>
            <div className="mt-12 font-light text-md md:text-xl space-y-2">
              <p>Vertikal-Schiebefenster und Schiebe- & Falttüren</p>
              <p>Skandinavische Profilsysteme</p>
            </div>
          </div>
        </div>
      </div>
      <div className="holzAluminiumFenster mt-20 min-h-screen">
        <div className="px-5 lg:px-10 py-2 bg-[#2C333D] w-full md:w-auto inline-block rounded-r-sm">
          <h2 className="text-3xl md:text-4xl lg:text-7xl text-white">Holz - Aluminium Fenster</h2>
        </div>
        <div className="px-5 md:px-8  lg:px-44 pt-20">
          <p className="max-w-3xl text-[#2C333D] text-md md:text-lg font-normal">
            Hochwertige Holz - Aluminium Fenster in verschidenen ausführungen, passend für Ihre Bedürfnisse
          </p>
          <div className="block  md:flex  mt-12 md:space-x-4">
            <div className="shaddow-image-alu text-center">
              <Image src="/aluHolz.jpeg" className="rounded-md " width={423} height={525} />
            </div>
            <div className=" flex flex-col space-y-6 md:space-y-0 md:justify-around mt-6 md:mt-0">
              <div className="flex items-center space-x-4">
                <div className="h-[1.5px] bg-[#2C333D] rounded-md w-[50px] md:w-[150px]"></div>
                <p className="max-w-md text-left text-md md:text-xl font-light">
                  Individuelle Erstellung von Schnitt- und Ansichtszeichnungen sowie kompetente Beratung bei
                  steuerlichen Fragen in Zusammenhang mit Denkmalobjekten.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-[1.5px] bg-[#2C333D] rounded-md w-[50px] md:w-[150px]"></div>
                <p className="max-w-md text-left text-md md:text-xl font-light">
                  Wir bieten Denkmalschutzfenster, Kastenfenster und professionelle Zusammenarbeit mit den örtlichen
                  Denkmalbehörden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="holzAluminiumFenster mt-20 min-h-screen">
        <div className="px-5 lg:px-10 py-2 bg-[#7A7A7A] w-full md:w-auto inline-block rounded-r-sm">
          <h2 className="text-3xl md:text-4xl lg:text-7xl text-white">PVC Fenster</h2>
        </div>
        <div className="px-5 md:px-8  lg:px-44 pt-20">
          <span className="max-w-3xl text-[#2C333D] text-md md:text-lg font-normal">
            Unsere Premium PVC - Fenster von{" "}
            <a className="text-[#033883]" href="https://www.deka-fenster.de/fenster/aluminium/premiumfenster/">
              DeKa-Fenster.
            </a>
          </span>
          <div className="block md:flex mt-14 md:space-x-4">
            <div className="shaddow-image-alu">
              <Image src="/deka-fenster.png" className="rounded-md" width={426} height={429} />
            </div>
            <div className=" flex flex-col justify-center mt-6 md:mt-0 space-y-6 md:space-y-9 ">
              <div className="flex items-center space-x-4">
                <div className="h-[1.5px] bg-[#2C333D] rounded-md w-[50px] md:w-[150px]"></div>
                <p className="max-w-md text-left text-md md:text-xl font-light">Profile mit Schaumdämmung</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-[1.5px] bg-[#2C333D] rounded-md w-[50px] md:w-[150px]"></div>
                <p className="max-w-md text-left text-md md:text-xl font-light">Schwarze EPDM Dichtung</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-[1.5px] bg-[#2C333D] rounded-md w-[50px] md:w-[150px]"></div>
                <p className="max-w-md text-left text-md md:text-xl font-light">Flügelvariante bündig</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-[1.5px] bg-[#2C333D] rounded-md w-[50px] md:w-[150px]"></div>
                <p className="max-w-md text-left text-md md:text-xl font-light">
                  DeKaSafebeschlag mit Schaltsperre und Fehlschaltsicherung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
