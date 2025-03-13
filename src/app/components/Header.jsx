export const Header = ({ headertext, headertext1 }) => {
  return (
    <div className="w-[416ox] h-[129px]">
      <img src="/Main 1.svg" alt="" />
      <h1 className="text-[#202124] font-semibold ">{headertext1}</h1>
      <p className="text-[#8E8E8E]">{headertext}</p>
    </div>
  );
};
