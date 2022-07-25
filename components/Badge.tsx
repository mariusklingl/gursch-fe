export default function Badge({
  description,
  style,
}: {
  description: string;
  style?: string;
}) {
  return (
    <div
      className={` px-6 py-2 rounded-full text-white text-md inline ${
        style === "referenz" ? "bg-black/70 font-light" : "bg-[#038F5F]"
      }`}
    >
      {description}
    </div>
  );
}
