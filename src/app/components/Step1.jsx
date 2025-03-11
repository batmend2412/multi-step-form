import { Footer } from "./Footer";
import { Input1 } from "./Input1";
import { Header } from "./Header";
export const Step1 = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-[400px] justify-between">
        <div className="flex flex-col h-[230px] justify-around">
          <Input1 placeholder="  Placeholder" text="Firstname" />
          <Input1 placeholder="  Placeholder" text="Lastname" />
          <Input1 placeholder="  Placeholder" text="Username" />
        </div>

        <Footer text="continue 1/3 >" text1="< back" count={2} />
      </div>
    </div>
  );
};
