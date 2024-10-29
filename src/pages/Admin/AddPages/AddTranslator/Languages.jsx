import React, { useState, useEffect } from "react";

const TranslatorLanguages = ({
  translatorsLanguages,
  changeHandler,
  classNameList,
  defaultSelectedLanguages, // Передаем выбранные по умолчанию языки
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    defaultSelectedLanguages || []
  );

  
  // Инициализируем состояние выбранных языков при монтировании компонента
  useEffect(() => {
    changeHandler("languages", defaultSelectedLanguages);
  }, []);

  const selectLanguage = (item) => {
    let res;
    if (selectedLanguage.includes(item)) {
      res = selectedLanguage.filter((lang) => lang != item);
    } else {
      res = [...selectedLanguage, item];
    }
    setSelectedLanguage(res);
    
    changeHandler("languages", res);
  };

  return (
    <div
      className={`mt-[30px] peer px-[10px] border-grayLight border border-dashed focus:border-main outline-none rounded-[10px] py-[10px] ${classNameList}`}
    >
      <div className="grid py-[10px] gap-[20px] grid-cols-3 grid-rows-3">
        {translatorsLanguages?.map((item, idx) => (
          <div key={idx} className="max-w-[145px]">
            <input
              onClick={() => selectLanguage(String(idx + 1))}
              type="checkbox"
              className="hidden peer"
              id={item.language}
              defaultChecked={selectedLanguage.includes(idx + 1)}
            />
            <label
              htmlFor={item.language}
              key={idx}
              className="px-[20px] peer-checked:border-main rounded-md peer-checked:border-solid capitalize gap-[10px] flex justify-center items-center py-[12px] border border-dashed border-grayLight text-[16px]"
            >
              <img
                src={item.image}
                className="w-[30px] rounded-[3px] h-[20px] object-cover"
                alt=""
              />
             {item.language}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TranslatorLanguages;
