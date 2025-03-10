import { Input1 } from "./Input1";
export const Step1 = () => {
  return (
    <div className="flex flex-col h-full">
      <Input1 placeholder="    name..." text="Firstname" isError={true} />
      <Input1 placeholder="    name..." text="Lastname" />
      <Input1 placeholder="    name..." text="Username" />
    </div>
  );
};
