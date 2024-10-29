const SaveBtn = ({ text, add, classNameList, click }) => {
  return (
    <button
      onClick={click}
      disabled={false}
      className={`rounded-[6px] text-[16px]  font-normal text-white flex ${
        !true
          ? "bg-[#B0BEC5] cursor-not-allowed"
          : "bg-[#007BFF] hover:bg-[#0056b3]"
      } transition-colors`}
    >
      <div className="p-[8px] px-[20px] border-r border-white">{text}</div>
      <div className="p-[8px] px-[15px]">
        <i className="fa-solid fa-save"></i>
      </div>
    </button>
  );
};
export default SaveBtn;
