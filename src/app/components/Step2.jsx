import { Footer } from "./Footer";
import { Input1 } from "./Input1";
import { Header } from "./Header";
export const Step2 = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-[400px] justify-between">
        <div className="flex flex-col h-[300px] justify-around">
          <Input1 placeholder="  Placeholder" text="Email" />
          <Input1 placeholder="  Placeholder" text="Phone number" />
          <Input1 placeholder="  Placeholder" text="Password" />
          <Input1 placeholder="  Placeholder" text="Confirm password" />
        </div>

        <Footer text="continue 1/3 >" text1="< back" />
      </div>
    </div>
  );
};
