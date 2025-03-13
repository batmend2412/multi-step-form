import { Footer } from "./Footer";
import { Input1 } from "./Input1";
import { Header } from "./Header";
export const Step1 = ({ handleOnclick, conCount, handleOnChange, isError }) => {
  return (
    <form onSubmit={handleOnclick}>
      <Header
        headertext="Please provide all current information accurately."
        headertext1="Join Us! 😎"
      />
      <div className="flex flex-col h-[400px] justify-between">
        <div className="flex flex-col h-[230px] justify-around">
          <Input1
            placeholder="  Placeholder"
            text="Firstname"
            handleOnChange={handleOnChange}
            isError={isError}
          />
          <Input1
            placeholder="  Placeholder"
            text="Lastname"
            handleOnChange={handleOnChange}
          />
          <Input1
            placeholder="  Placeholder"
            text="Username"
            handleOnChange={handleOnChange}
          />
        </div>

        <Footer text={`continue ${conCount}/3`} hideCount={1} />
      </div>
    </form>
  );
};
