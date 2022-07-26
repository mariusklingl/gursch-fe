import { useEffect, useState } from "react";

export default function InProgressBanner() {
  const [banner, setBanner] = useState<boolean>(false);

  useEffect(() => {
    setBanner(localStorage.getItem("banner") ? JSON.parse(localStorage.getItem("banner")!) : true);
  });

  function handleClick() {
    console.log("hier", banner);
    localStorage.setItem("banner", JSON.stringify(false));
    setBanner(false);
  }

  return (
    <>
      {banner === true ? (
        <div className={` fixed flex flex-col left-0 right-0  font-light top-0 bg-white z-30 p-5 shadow-xl`}>
          <p>
            <strong>Unsere Webseite befindet sich aktuell noch im Aufbau.</strong> Inhalte und Referenzen werden stetig
            ergänzt. Zudem verwenden wir ausschließlich technisch notwenige Cookies, um Ihnen unseren Service anbieten
            zu können.
          </p>
          <div className="w-full ">
            <button onClick={handleClick} className="bg-[#038F5F] px-3 py-1 rounded-sm mt-4 text-white">
              Alles klar!
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
