import type { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReferenzElement from "../components/ReferenzElement";
import axios from "axios";
import { AllReferenzResponse } from "../types/api.types";
import Badge from "../components/Badge";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  useEffect(() => {
    let getData = async () => {};
    getData();
  }, []);

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="bg-black">
      <div className="heroSection min-h-screen relative">
        <Image
          priority
          loading="eager"
          src="/hero.jpg"
          layout="fill"
          objectFit="cover"
          className="z-10 opacity-[0.15]"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex items-center p-16">
          <div>
            <h1 className="text-white max-w-4xl text-3xl md:text-4xl lg:text-6xl font-light leading-tight">
              Ihr kompetenter Partner in Sachen Immobilien und Fensterbau{" "}
            </h1>
            <div className="mt-4 block md:flex space-y-4 md:space-y-0 md:space-x-6 text-lg md:text-xl">
              <button className="px-6 py-2 bg-[#a9a9a9] rounded-md ">Kontaktieren</button>
              <button className="px-6 py-2 border-[#a9a9a9] border-[1px] rounded-md text-[#a9a9a9]">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="leistungen"
        className="secondSection min-h-screen bg-white bg-[url('/thirdSection.png')] bg-fixed bg-cover bg-bottom pt-16"
      >
        <div className="p-16 w-full ">
          <h1 className="text-2xl md:text-4xl lg:text-7xl font-headLine">Beratung, Immobilien & mehr</h1>
          <div className="h-px bg-black max-w-sm my-4"></div>
          <p className="text-xl md:text-2xl lg:text-3xl">Unsere Kompetenzen</p>
        </div>
        <div className=" p-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14">
          <div className="bg-white/90 shadow-xl p-6 rounded-lg min-h-[40vh]">
            <Badge description="Immobilien" style="bg-[#038F5F]" />
            <div className=" text-light text-md lg:text-xl flex flex-col space-y-8 mt-8 h-full p-6">
              <p>Beratung</p>
              <p>Vermietung</p>
              <p>Verkauf</p>
              <p>Finanzierung</p>
            </div>
          </div>
          <div className="bg-white/90 shadow-xl p-6 rounded-lg ">
            <Badge description="Fenster / Türen" />
            <div className="text-light  text-md lg:text-xl flex flex-col space-y-8 mt-8 h-full p-6">
              <p>Herstellung</p>
              <p>Montage</p>
              <p> in PVC</p>
              <p>ALU und mehr</p>
            </div>
          </div>
          <div className="bg-white/90 shadow-xl p-6 rounded-lg">
            <Badge description="Bauleistungen" />
            <div className="text-light  text-md lg:text-xl flex flex-col space-y-8 mt-8 h-full p-6">
              <p>Sanierung</p>
              <p>Denkmahlschutz</p>
              <p>Einzelleistung</p>
              <p>GU</p>
            </div>
          </div>
          <div className="rounded-md flex items-end text-3xl justify-center font-thin">
            <div className="group">
              <button className="text-xl  md:text-2xl lg:text-3xl xl:text-4xl font-normal">Im Detail</button>
              <div className="h-[2px] bg-black w-[20px] group-hover:ease-in transition  group-hover:w-full duration-200"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="thirdSection min-h-screen flex items-center  bg-gradient-to-br from-[#746751] to-[#2F1E14] pt-16">
        <div className="p-4 lg:p-16 w-full">
          <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-headLine">Das Fenster.</h1>
          <div className="border-t-[1px] border-white/50 border-b-[1px] mt-6 py-8 md:gap-6 lg:gap-8 px-8 grid grid-cols-12">
            <div className="col-span-12 md:col-span-7 text-white   text-md md:text-lg lg:text-4xl">
              <p className="font-thin lg:max-w-2xl ">
                Fenster sind Fassadenelemente welche zu Ihrem Haus und Ihren Ansprüchen passen sollen.
              </p>
              <p className="font-thin lg:max-w-2xl my-8 ">
                Deshalb sind wir froh Ihnen unsere Erfahrungen mit der ganzen Palette an Fenstern unterbreiten zu können
                und sind uns sicher, dass wir die geeigneten Lösungen für Sie finden.
              </p>
              <button
                onClick={() => router.push("/unsere_fenster")}
                className="px-6 py-2 text-sm md:text-md lg:text-2xl font-light bg-[#39291D] rounded-md text-white"
              >
                Zu unseren Modellen
              </button>
            </div>
            <div className="col-span-12 h-72 w-full md:h-auto md:w-auto  md:col-span-5 mt-8 md:mt-0">
              <div className="relative  h-full">
                <Image src="/fenster.jpg" className="rounded-md shadow-xl" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fourthSection min-h-screen bg-white pt-16 relative">
        <div className="p-16 w-full ">
          <h1 className="text-2xl md:text-4xl lg:text-7x font-headLine">Wir lieben was wir tun.</h1>
          <p className="text-sm lg:text-lg ml-4">*eine kleine aber feine Selektion unserer Arbeit</p>
        </div>
        <div className="refrenzenContainer grid grid-cols-12 gap-6 p-16">
          <div className="col-span-12 md:col-span-6 h-[450px]  rounded-lg shadow-xl">
            <Carousel showStatus={false} showThumbs={false} className="h-[450px] ">
              <ReferenzElement
                blurDataUrl="/hero.jpg"
                highQualityUrl="/hero.jpg"
                objektName="Feuerbach , Bauträgerprojekt "
                objektTyp="Bauträger"
                key={1}
              />
              <ReferenzElement
                blurDataUrl="/hero.jpg"
                highQualityUrl="/hero.jpg"
                objektName="Feuerbach , Bauträgerprojekt "
                objektTyp="Bauträger"
                key={1}
              />
            </Carousel>
          </div>
        </div>
      </div>
      <section id="kontakt" className="mb-32 text-gray-800 text-center bg-white">
        <div className="px-6 py-12 md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 flex items-center">
              <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0 z-10">
                <div
                  className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                  style={{ background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)" }}
                >
                  <h2 className="text-3xl font-bold mb-12">Kontaktieren Sie uns</h2>
                  <form>
                    <div className="form-group mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput7"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <input
                        type="email"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <textarea
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlTextarea13"
                        rows={3}
                        placeholder="Nachricht"
                      ></textarea>
                    </div>
                    <div className="form-group form-check text-center mb-6">
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                        id="exampleCheck87"
                      />
                      <label className="form-check-label inline-block text-gray-800">Kopie an mich senden</label>
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Anfragen
                    </button>
                  </form>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0 ">
                <div className="relative h-[700px] -z-1 shadow-lg rounded-lg bg-red-50">
                  <iframe
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAVtxo8hrBpDe9QvT7lodyVASeLnMJ7bfA
                    &q=Gursch+Stuttgart+Feuerbach"
                    className=" left-0 top-0 bottom-0 -z-1 w-full h-full  absolute rounded-lg "
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
