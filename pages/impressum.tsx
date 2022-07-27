import type { NextPage } from "next";
import Image from "next/image";

const Impressum: NextPage = () => {
  return (
    <div className="pt-24 px-5 pb-20">
      <div>
        <h1 className="text-3xl text-center">Impressum</h1>
      </div>
      <div className="mt-4 text-md">
        <div>Gursch Immobilien & Fensterbau GmbH</div>
        <div className="mt-2">Geschäftführer Mirko Gursch</div>
        <div className="mt-2"> Amtsgericht Stuttgart</div>
        <div>HRB 751 058</div>
        <div>USt-IdNr. DE 297 805 153</div>

        <div className="mt-2">Sankt-Pöltener-Straße 62</div>
        <div>70469 Stuttgart</div>

        <div className="mt-2">Fon +49 (0)711 – 76 75 4 – 0</div>
        <div>Fax +49 (0)711 – 76 75 4 – 20</div>
        <div>Mobil +49 (0)171 – 73 73 73 8</div>
        <div>Email mail@gursch-gmbh.de</div>
      </div>
      <div className="mt-6">
        <div>
          <h5>Disclaimer</h5>
          <p>1. Haftungsbeschränkung</p>
          <p>
            Die Webseite wurde mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt dennoch
            keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte und
            Informationen. Die Nutzung der Webseiteninhalte erfolgt auf eigene Gefahr. Allein durch die Nutzung der
            Website kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.
          </p>
        </div>
      </div>
      <div>
        <div>
          <p>2. Verlinkungen</p>
          <p>
            Die Webseite enthält Verlinkungen zu anderen Webseiten („externe Links“). Diese Webseiten unterliegen der
            Haftung der jeweiligen Seitenbetreiber. Bei Verknüpfung der externen Links waren keine Rechtsverstöße
            ersichtlich. Auf die aktuelle und künftige Gestaltung der verlinkten Seiten hat der Anbieter keinen
            Einfluss. Die permanente Überprüfung der externen Links ist für den Anbieter ohne konkrete Hinweise auf
            Rechtsverstöße nicht zumutbar. Bei Bekanntwerden von Rechtsverstößen werden die betroffenen externen Links
            unverzüglich gelöscht.
          </p>
        </div>
      </div>
      <div>
        <div>
          <p>3. Urheberrecht / Leistungsschutzrecht</p>
          <p>
            Die auf dieser Webseite durch den Anbieter veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht
            und Leistungsschutzrecht. Alle vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung
            bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt vor
            allem für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von
            Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Dabei sind Inhalte und Rechte
            Dritter als solche gekennzeichnet. Das unerlaubte Kopieren der Webseiteninhalte oder der kompletten Webseite
            ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen,
            privaten und nicht kommerziellen Gebrauch ist erlaubt. Diese Website darf ohne schriftliche Erlaubnis nicht
            durch Dritte in Frames oder iFrames dargestellt werden.
          </p>
        </div>
      </div>
      <div>
        <div>
          <p>4. Datenschutz</p>
          <p>
            Mit dem Besuch dieser Webseite können Informationen über den Zugriff gespeichert werden. Diese Daten wie
            Uhrzeit, Datum und die betrachtete Seite gehören nicht zu den personenbezogenen Daten, sondern sind
            anonymisiert. Dies werden nur aus statistischen Zwecken erfasst. Eine Weitergabe an Dritte, zu kommerziellen
            oder nichtkommerziellen Zwecken, erfolgt nicht. Der Anbieter weist ausdrücklich darauf hin, dass die
            Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen und nicht
            lückenlos vor dem Zugriff durch Dritte geschützt werden kann. Die Verwendung der Kontaktdaten des Impressums
            zur gewerblichen Werbung ist ausdrücklich nicht erwünscht, es sei denn der Anbieter hatte zuvor seine
            schriftliche Einwilligung erteilt oder es besteht bereits eine Geschäftsbeziehung. Der Anbieter und alle auf
            dieser Website genannten Personen widersprechen hiermit jeder kommerziellen Verwendung und Weitergabe ihrer
            Daten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
