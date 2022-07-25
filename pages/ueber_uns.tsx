import type { NextPage } from "next";
import Image from "next/image";

const UeberUns: NextPage = () => {
  return (
    <div>
      <div className="min-h-screen pb-24">
        <div className="pt-32">
          <h1 className="text-3xl text-center font-light">Gursch Immobilien und Fensterbau GmbH</h1>
        </div>
        <div className="flex bg-[#038F5F] pt-5 mt-6 justify-between">
          <Image src={"/mirko.png"} height={194} width={240} />
          <div className="flex flex-col text-white justify-evenly mr-5">
            <p className="text-3xl md:text-5xl font-normal">Mirko Gursch</p>
            <p className="text-xl md:text-3xl font-light">Geschäftsführer</p>
            <p className="text-lg md:text-2xl font-light">Stuttgart, BW</p>
          </div>
        </div>
        <div className="px-10">
          <div className="mt-6">
            <h2 className="text-xl md:text-3xl">Über mich</h2>
            <div className="mx-10 gap-8 grid grid-cols-1 md:grid-cols-3 text-center mt-4">
              <div className="shadow-xl p-5 rounded-md">Dipl. Sachverst. f. Grundstücksbewertung (DIA)</div>
              <div className="shadow-xl p-5 roundedn-md">Diplom Immobilienwirt (DIA)</div>
              <div className="shadow-xl p-5 rounded-md">Fachwirt in der Grundstücks- & Wohnungswirtschaft (IHK)</div>
            </div>
          </div>
          <div className="mt-12 text-xs md:text-lg font-light">
            <h2 className="text-xl md:text-3xl font-normal">Über die Firma</h2>
            <p className="italic  mt-4">
              Beratung, Verkauf & Vermietung im Immobilienbereich, Generalunternehmer kompletter Sanierungen, Lieferung
              & Montage von Fenstern aus teilweise eigener Produktion.
            </p>
            <p className="mt-4">
              Die Firma Gursch Immobilien und Fensterbau GmbH hat über 25 Jahre Erfahrung im Immobilienbereich als
              Bauträger, Makler, Projektentwickler, Generalunternehmer und Initiator. Hervorgegangen aus der Firma
              Confidenz GmbH wurde die Gursch Immobilien & Fensterbau GmbH am 11.12.2014 gegründet. Verschiedene
              Referenzen sehen Sie im entsprechenden Button, sowie dem Link zu unserer Facebook-Seite.
            </p>
            <p className="mt-4">
              Wir beraten umfassend und kompetent im Ankauf, Verkauf, Vermietung, sowie bei anstehenden oder notwendigen
              Sanierungs- und Bauleistungen im Immobilienbereich. Durch die eigene Herstellung von Fenstern und Türen
              haben sich in der Vergangenheit sehr gute Synergieeffekte entwickelt, welche unseren Kunden und natürlich
              auch uns gewisse Vorteile bringen. Wir bieten somit viele Serviceleistungen aus einer Hand mit
              Zuverlässigkeit und Qualität!
            </p>
            <p className="mt-4">
              Durch die handwerkliche Basis und den bautechnischen Sachverstand werden somit bei der Preisfindung und
              Besichtigung von Immobilien wesentliche Dinge unter die Lupe genommen, fachlich und entsprechend
              lösungsorientiert mit den Interessenten oder Verkäufern besprochen. Durch unsere langjährigen Partner in
              sämtlichen Gewerken, koordinieren und entwickeln wir Ihre Bauvorhaben und führen diese gegen Festpreis
              aus, so dass sie sich als Kunde nicht mit Baubetreuung, Handwerkerterminen, Abnahmen, Preisen usw.
              auseinandersetzen müssen.
            </p>
            <p className="mt-4">
              Wir nehmen Ihnen das Risiko unkalkulierbarer Kosten ab, so dass Sie im Rahmen Ihrer finanziellen
              Gegebenheiten die besprochenen Leistungen gegen Festpreis bekommen. Unser Ziel ist es im gegenseitigen
              Interesse die Unvorhersehbarkeit zusätzlich entstehender Kosten in der Ausführung zu minimieren. Dies ist
              schon oftmals Bestandteil bei Verkaufsgesprächen, was zur fundierten Entscheidungsfindung für unsere
              Kunden sehr wichtig ist. Auch beraten wir bzgl. steuerlicher Auswirkungen und unterstützen Sie gern bei
              der Suche nach der geeigneten Finanzierung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UeberUns;
