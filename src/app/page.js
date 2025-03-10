import Image from "next/image";
import { Header } from "./components/Header";
import { Step1 } from "./components/Step1";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-stone-200">
      <div className="w-[416px] h-[591px] bg-stone-50 p-6">
        <Header></Header>
        <Step1></Step1>
      </div>
    </div>
  );
}
