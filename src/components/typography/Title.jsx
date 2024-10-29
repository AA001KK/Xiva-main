import { useTranslation } from "react-i18next";

const Title = ({ text, classNameList, txt }) => {
  const {t} = useTranslation()
  return (
    <h1 className={`${classNameList}  text-[#1E1E1E]  font-medium`}>{t(txt) || text}</h1>
  );
};
export default Title;
