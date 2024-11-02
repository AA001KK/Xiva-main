import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../redux/slice/cart_slice";
import Experience from "/translators/customer-review.svg";
import Lang_level from "/translators/lang_level.svg";
import TranslatorLangs from "../../pages/Translators/Languages";
import DeleteItemSwal from "../buttons/deleteItemSwal";
import { useTranslation } from "react-i18next";
import check from "/src/assets/check.png";
import area from "/src/assets/hotels/area.svg";
import bed from "/src/assets/hotels/bed.png";
import child_bed from "/src/assets/hotels/child_bed.svg";
import peoples from "/src/assets/hotels/peoples.svg";
import CalendarCart from "../Hotel/CalendarCart";
import driver from "/src/assets/driver2.png";

export default function Cart() {
  const cart = useSelector(getBasket);
  const { items } = cart;
  const { t } = useTranslation();

  const lang = localStorage.getItem("i18nextLng");
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    DeleteItemSwal(id, dispatch);
  };

  return items.map((item) => {
    let category = "";
    if (item.level == 1) {
      category = "Moshina";
    } else if (item.level == 2) {
      category = "Micro Avtobus";
    } else {
      category = "Avtobus";
    }
    switch (item.type) {
      case "hotel":
        return (
          <div className=" md:flex md:p-5 p-2  relative gap-6 border rounded-lg border-[#999] border-dashed  mb-8">
            <img
              className="md:w-[300px] bg-[#FFF1EA] w-full rounded-lg aspect-[3/2] object-cover"
              src={item.item.images[0]}
              alt="mehmonxona"
            />
            <div className="flex flex-col justify-between pb-2 gap-y-1">
              <div className="flex items-center justify-between mt-2 md:mt-0">
                <h2 className="md:text-[26px] text-[20px]  text-blue font-semibold">
                  {item.item.hotel[lang]?.hotel_name}
                </h2>
                <button
                  onClick={() => deleteItem(item.item._id)}
                  className="lg:rounded-[6px] rounded-[6px]  font-normal text-white bg-[#F72B50] text-[17px] flex "
                >
                  <div className="p-[10px] hidden lg:block px-[15px] border-r border-white ">
                    {t("main.buttons.cancel")}
                  </div>
                  <div className="md:p-[10px] p-[5px] px-[15px] md:px-[10px]">
                    <i className="fa-regular fa-trash-can"></i>
                  </div>
                </button>
              </div>
              <div className="flex justify-between w-full ">
                <div className="w-full ">
                  <h1 className=" text-main  capitalize font-mono font-semibold md:text-[20px] text-[14px]">
                    <span className="text-black capitalize">
                      {t("hotels.nameRooms")}
                    </span>{" "}
                    {item.item[lang]?.room_name}
                  </h1>
                  <div className="justify-between w-full 2xl:flex">
                    <div className="my-2">
                      <CalendarCart
                        defaultValue={item?.date}
                        id={item.item._id}
                      />
                    </div>
                    <div className="flex flex-col my-2 mt-4 md:my-0 md:mt-0 2xl:justify-end 2xl:items-end">
                      <div className="flex gap-1 font-mono text-grayLight text-[16px] 2xl:text-[18px]">
                        <h1>{t("hotels.price")}:</h1>
                        <span>{item.item.price} $</span>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <h1 className=" flex items-center leading-3  gap-2 text-[15px] 2xl:text-[18px] text-grayLight font-mono font-normal">
                          {t("hotels.totalPrice")}
                        </h1>

                        <span className="text-lg font-medium text-main">
                          <span>{item.days_quantity}</span> {t("hotels.day")}*{" "}
                          {item.item?.price}$ ={" "}
                          {item.days_quantity * item.item?.price}$
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-1 ">
                    <img src={child_bed} className="w-[35px]" alt="" />
                    <h1 className="font-mono text-grayLight">
                      {t("hotels.babybed")}
                    </h1>
                  </div>
                  <div className="flex items-center gap-3 mt-1 ">
                    <img src={bed} alt="" />
                    <h1 className="font-mono text-grayLight">
                      {t(
                        "roomBeds.bed" +
                          item.item.bed.type +
                          item.item.bed.count
                      )}
                    </h1>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-main ">
                    <img src={area} className="w-[30px]" alt="" />
                    <h1 className="font-mono text-grayLight">
                      <span>
                        {item.item.area} {t("hotels.area")}
                        <sup>2</sup>
                      </span>
                    </h1>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-main ">
                    <img
                      src={peoples}
                      className="w-[33px] object-cover"
                      alt=""
                    />
                    <h1 className="font-mono text-grayLight">
                      <span>
                        {t("hotels.max_people")}: {item.item.max_people}
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        break;
      case "car":
        return (
          <div className=" md:flex md:p-5 p-2  relative gap-6 border rounded-lg border-[#999] border-dashed   mb-8">
            <img
              className="md:w-[300px] bg-[#FFF1EA] w-full rounded-lg aspect-[3/2] object-cover"
              src={item.item.images[0]}
              alt="mehmonxona"
            />
            <div className="flex flex-col justify-between flex-1 pb-2 gap-y-2">
              <div className="flex items-center justify-between mt-2 md:mt-0 ">
                <h2 className="md:text-[26px] text-[20px]  text-blue font-semibold">
                  {item.item[lang]?.car_name}
                </h2>
                <button
                  onClick={() => deleteItem(item.item._id)}
                  className="lg:rounded-[6px] rounded-[6px]  font-normal text-white bg-[#F72B50] text-[17px] flex "
                >
                  <div className="p-[10px] hidden lg:block px-[15px] border-r border-white ">
                    {t("main.buttons.cancel")}
                  </div>
                  <div className="md:p-[10px] p-[5px] px-[15px] md:px-[10px]">
                    <i className="fa-regular fa-trash-can"></i>
                  </div>
                </button>
              </div>
              <div className="flex justify-between w-full ">
                <div className="w-full ">
                  <div className="justify-between w-full 2xl:flex">
                    <div className="">
                      <CalendarCart
                        defaultValue={item?.date}
                        id={item.item._id}
                      />
                    </div>
                    <div className="flex flex-col my-2 mt-4 md:my-0 md:mt-0 2xl:justify-end 2xl:items-end">
                      <div className="flex gap-1 font-mono text-grayLight text-[16px] 2xl:text-[18px]">
                        <h1>{t("hotels.price")}:</h1>
                        <span>{item.item.price} $</span>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <h1 className=" flex items-center leading-3  gap-2 text-[15px] 2xl:text-[18px] text-grayLight font-mono font-normal">
                          {t("hotels.totalPrice")}
                        </h1>

                        <span className="text-lg font-medium text-main">
                          <span>{item.days_quantity}</span> {t("hotels.day")}*{" "}
                          {item.item?.price}$ ={" "}
                          {item.days_quantity * item.item?.price}$
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-1 ">
                <img
                  src={driver}
                  className="w-[15px] md:w-[20px]  object-cover"
                  alt=""
                />
                <h1 className="ml-2"> {t("cars.carDriver")}</h1>
              </div>
              <div className="flex items-center gap-3 mt-1 ">
                <img
                  src={check}
                  className=" w-[15px] md:w-[20px]  object-content"
                  alt=""
                />
                <h1 className="ml-2">
                  {t("cars.doors")}: {item.item.car_doors}
                </h1>
              </div>
              <div className="flex items-center gap-3 mt-1 ">
                <img
                  src={check}
                  className=" w-[15px] md:w-[20px]  object-content"
                  alt=""
                />
                <h1 className="ml-2">
                  {t("cars.seats")}: {item.item.car_seats}
                </h1>
              </div>
            </div>
          </div>
        );
        break;
      case "translator":
        return (
          <div className="md:flex lg:gap-6 gap-3  flex-col border-dashed  sm:flex-row border rounded-lg border-[#999]  p-3 lg:p-5 mb-8">
            <img
              className="md:w-[300px] bg-[#FFF1EA] w-full rounded-lg aspect-[3/2] object-cover"
              src={item.item.image}
              alt=""
            />
            <div className="flex flex-col items-center justify-between ">
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center justify-between mt-2 md:mt-0">
                  <h2 className="text-[26px] font-semibold ">
                    {item.item[lang]?.translator_name}
                  </h2>

                  <button
                    onClick={() => deleteItem(item.item._id)}
                    className="lg:rounded-[6px] rounded-[6px]  font-normal text-white bg-[#F72B50] text-[17px] flex "
                  >
                    <div className="p-[10px] hidden lg:block px-[15px] border-r border-white ">
                      {t("main.buttons.cancel")}
                    </div>
                    <div className="md:p-[10px] p-[5px] px-[15px] md:px-[10px]">
                      <i className="fa-regular fa-trash-can"></i>
                    </div>
                  </button>
                </div>
                <div className="justify-between w-full 2xl:flex">
                  <div className="">
                    <CalendarCart
                      defaultValue={item?.date}
                      id={item.item._id}
                    />
                  </div>
                  <div className="flex flex-col my-2 mt-4 md:my-0 md:mt-0 2xl:justify-end 2xl:items-end">
                    <div className="flex gap-1 font-mono text-grayLight text-[15px] 2xl:text-[18px]">
                      <h1>{t("hotels.price")}:</h1>
                      <span>{item.item.price} $</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <h1 className=" flex items-center leading-3  gap-2 text-[15px] 2xl:text-[18px] text-grayLight font-mono font-normal">
                        {t("hotels.totalPrice")}
                      </h1>

                      <span className="text-lg font-medium text-main">
                        <span>{item.days_quantity}</span> {t("hotels.day")}*{" "}
                        {item.item?.price}$ ={" "}
                        {item.days_quantity * item.item?.price}$
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={Experience}
                    className="w-[30px]  object-cover"
                    alt=""
                  />
                  <h1>
                    {item.item.experience}{" "}
                    {t("translators.translatorExperience")}
                  </h1>
                </div>
                <div className="flex items-center gap-2 ">
                  <img
                    src={Lang_level}
                    className="w-[30px]  object-cover"
                    alt=""
                  />
                  <h1>
                    {t("translators.translatorExperience")}{" "}
                    {item.item.lang_level}
                  </h1>
                </div>
                <TranslatorLangs translatorsLanguages={item.item.languages} />
                <div className="mt-1  hidden xl:flex   flex-wrap gap-2 items-center text-[14px] text-grayLight">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                    <div className="flex gap-2 font-mono font-normal">
                      <img
                        src={check}
                        className="  object-cover rounded-sm w-[17px] h-[17px]"
                        alt=""
                      />{" "}
                      <h1>{t("translators.museums.museum" + value)}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        break;
      default:
        break;
    }
  });
}
