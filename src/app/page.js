import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center  bg-stone-200">
      <div className="w-fit h-[591px] bg-stone-50 p-6 ">
        <Step1 />
      </div>
    </div>
  );
}
