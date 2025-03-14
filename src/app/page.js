"use client";
import { Next } from "./components";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { useState } from "react";

export default function Home() {
  const initialFormValues = {
    Firstname: "",
    Username: "",
    Lastname: "",
    Password: "",
    Email: "",
    Phonenumber: "",
    Dateofbirth: "",
  };
  const [count, setCount] = useState(0);
  const [data, setData] = useState(initialFormValues);
  const [error, setError] = useState(false);
  const CurrentStep = [Step1, Step2, Step3, Next][count];
  const checkValidation = () => {
    if (data.Firstname.length < 8) {
      setError(true);
    }
    return false;
  };
  const stepCount = (event) => {
    event.preventDefault();

    if (!checkValidation()) {
      if (count >= 3) {
        return;
      }
      setCount(count + 1);
    }
  };

  const stepCountBack = (event) => {
    event.preventDefault();

    setCount(count - 1);
  };
  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setData((prev) => ({ ...data, [name]: value }));
    console.log(data);
  };
  return (
    <div className="h-screen flex justify-center items-center  bg-stone-200">
      <div className="w-fit h-[591px] bg-stone-50 p-6 ">
        <CurrentStep
          handleOnclick={stepCount}
          conCount={count + 1}
          backOnclick={stepCountBack}
          handleOnChange={handleInputChange}
          name={initialFormValues}
        />
      </div>
    </div>
  );
}
