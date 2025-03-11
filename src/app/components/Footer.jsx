export const Footer = ({ text, text1, handleOnclick, count }) => {
  return (
    <div className="flex justify-center gap-2 ">
      {count > 1 && (
        <button
          onClick={handleOnclick}
          className="w-[128px] h-[32px] rounded-[10px] p-3 flex  border-2 border-gray-500  text-black justify-center items-center"
        >
          Back
        </button>
      )}

      <button
        id="nextButton"
        onClick={handleOnclick}
        className="w-full bg-gray-950 h-[28px] flex p-4 text-white justify-center items-center rounded-[10px]"
      >
        {text}
      </button>
    </div>
  );
};
