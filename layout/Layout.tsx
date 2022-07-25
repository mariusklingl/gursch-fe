import { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="relative">
      <Header />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
