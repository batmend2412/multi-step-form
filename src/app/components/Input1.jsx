export const Input1 = ({ text, placeholder, isError }) => {
  return (
    <div className="w-[416ox]  gap-1 flex flex-col">
      <label className="text-[14px] font-semibold text-[#334155]">
        {text} <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="border bolder-1 rounded-[5px] focus-visible:outline-blue-800 p-1"
      />
      {isError && <p className="text-red-600">Error</p>}
    </div>
  );
};
