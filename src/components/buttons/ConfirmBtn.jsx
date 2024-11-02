const ConfirmBtn = ({ text, click }) => {
  return (
    <button
      onClick={click}
      disabled={false}
      className={`rounded-[6px] text-[16px] overflow-hidden cursor-default font-normal text-white flex bg-[#28a745]  transition-colors`}
    >
      <div className="p-[8px] px-[20px] border-r border-white">{text}</div>
    </button>
  );
};

export default ConfirmBtn;
