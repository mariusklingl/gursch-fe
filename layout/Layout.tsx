import { ReactNode, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { IoIosCloseCircle } from "react-icons/io";
import InProgressBanner from "../components/InProgressBanner";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="relative">
      <InProgressBanner />
      <Header />
      <NavBar />
      <main>{children}</main>

      <Footer />
    </div>
  );
}
