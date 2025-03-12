import { Footer } from "./Footer";
import { Input1 } from "./Input1";
import { Header } from "./Header";
export const Step2 = ({
  handleOnclick,
  conCount,
  backOnclick,
  handleOnChange,
}) => {
  return (
    <form onSubmit={handleOnclick}>
      <Header />
      <div className="flex flex-col h-[400px] justify-between">
        <div className="flex flex-col h-[300px] justify-around">
          <Input1
            placeholder="  Placeholder"
            text="Email"
            handleOnChange={handleOnChange}
          />
          <Input1
            placeholder="  Placeholder"
            text="Phone number"
            handleOnChange={handleOnChange}
          />
          <Input1
            placeholder="  Placeholder"
            text="Password"
            handleOnChange={handleOnChange}
          />
          <Input1
            placeholder="  Placeholder"
            text="Confirm password"
            handleOnChange={handleOnChange}
          />
        </div>

        <Footer
          text={`continue ${conCount}/3 `}
          backCount={2}
          backOnclick={backOnclick}
        />
      </div>
    </form>
  );
};
