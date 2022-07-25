import { NextComponentType, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Header() {
  const router = useRouter();
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="flex p-4 justify-between">
        <Image src="/logo.webp" height={80} width={200} />
        <Image
          onClick={() => router.push("/#kontakt")}
          className="shaddow-xl "
          src="/chat.svg"
          height={45}
          width={45}
        />
      </div>
    </header>
  );
}
