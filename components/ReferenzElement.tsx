import Image from "next/image";
import Badge from "./Badge";

interface Props {
  highQualityUrl: string;
  objektTyp: string;
  objektName: string;
  blurDataUrl: string;
}

export default function ReferenzElement({
  highQualityUrl,
  objektTyp,
  objektName,
  blurDataUrl,
}: Props) {
  console.log(blurDataUrl, highQualityUrl);
  return (
    <div className="h-[450px] group relative">
      <div className="z-30 absolute top-0 left-0 right-0 flex p-4 invisible group-hover:visible">
        <Badge style="referenz" description={objektTyp} />
      </div>
      <div className="z-30 absolute bottom-0 left-0 right-0 flex p-4 invisible group-hover:visible bg-black/70 rounded-b-lg text-white font-thin">
        {objektName}
      </div>
      <Image
        layout="fill"
        src={highQualityUrl}
        blurDataURL={blurDataUrl}
        className="h-[450px] rounded-md object-cover"
      />
    </div>
  );
}
