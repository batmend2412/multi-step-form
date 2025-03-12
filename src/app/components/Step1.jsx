import { Footer } from "./Footer";
import { Input1 } from "./Input1";
import { Header } from "./Header";
export const Step1 = ({ handleOnclick, conCount, handleOnChange }) => {
  return (
    <form onSubmit={handleOnclick}>
      <Header />
      <div className="flex flex-col h-[400px] justify-between">
        <div className="flex flex-col h-[230px] justify-around">
          <Input1
            placeholder="  Placeholder"
            text="Firstname"
            handleOnChange={handleOnChange}
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

        <Footer text={`continue ${conCount}/3`} />
      </div>
    </form>
  );
};
