import { useTranslation } from "react-i18next";

const DefaultBtn = ({ text, classNameList, click, loading, more, txt }) => {
  const {t} = useTranslation()
  return (
    <button
      onClick={click}
      disabled={loading}
      type="submit"
      className={`flex text-white md:text-white flex-col items-center justify-center relative py-[8px]  px-[18px] select-none text-[14px]  md:text-[17px] md:rounded-[8px] rounded-[6px]   2xl:py-[10px] xl:py-[8px] xl:px-[20px]  xl:rounded-[8px]  font-mono  bg-main ${classNameList}`}
      {...more}
    >
      {loading && (
        <svg
          className="absolute text-gray-200 dark:text-gray-600 fill-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 38 38"
          stroke="#fff"
        >
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)" stroke-width="4">
              <circle stroke-opacity=".5" cx="18" cy="18" r="16" />
              <path d="M34 20c0-9.94-7.08-20-20-17.5">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1200ms"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      )}
      <span className={`opacity-${loading ? "0" : "1"}`}>
        {text || t(txt)}
      </span>
    </button>
  );
};
export default DefaultBtn;
