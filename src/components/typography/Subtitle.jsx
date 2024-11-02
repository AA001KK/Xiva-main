import { useTranslation } from "react-i18next";

const Subtitle = ({ text, classNameList, txt }) => {
  const {t} = useTranslation()
  return (
    <p className={`text-[#1E1E1E]   ${classNameList} `}>{t(txt) || text}</p>
  );
};
export default Subtitle;
