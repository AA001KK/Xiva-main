import { useTranslation } from "react-i18next";

const Criterion = ({ text, txt }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-2">
      <span className="animate-pulse    inline-block    w-[12px] h-[12px] rounded-[50%] bg-main"></span>
      <p className="text-desc text-[16px] xl:text-[18px] font-mono">
        {t(txt) || text}
      </p>
    </div>
  );
};
export default Criterion;
