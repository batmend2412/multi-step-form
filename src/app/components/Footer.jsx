export const Footer = ({
  text,
  backOnclick,
  handleOnclick,
  backCount,
  hideCount,
}) => {
  return (
    <div className="flex justify-center gap-2 ">
      {backCount > 1 && (
        <button
          onClick={backOnclick}
          className="w-[128px] h-[32px] rounded-[10px] p-3 flex  border-2 border-gray-500  text-black justify-center items-center"
        >
          Back
        </button>
      )}
      {hideCount < 4 && (
        <button
          id="nextButton"
          type="submit"
          onClick={handleOnclick}
          className="w-full bg-gray-950 h-[28px] flex p-4 text-white justify-center items-center rounded-[10px]"
        >
          {text}
        </button>
      )}
    </div>
  );
};
