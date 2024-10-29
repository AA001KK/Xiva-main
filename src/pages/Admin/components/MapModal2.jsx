import React, { useState } from "react";
import MapComponent from "./Map";
// import { UserContext } from "./context/basketContext";
const MapModal = ({ changeHandlerInput, defLocation}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [locationMap, setLocationMap] = useState(""|| defLocation);
  const [locationSaved, setLocationSaved] = useState();
  console.log(locationMap);
  
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);


  const handleLocationSelect = (latlng) => {
    console.log("Selected location:", latlng);
    setLocationSaved(latlng);
    changeHandlerInput(
      "location",
      `https://www.google.com/maps?q=${latlng.lat},${latlng.lng}&z=15&output=embed`
    );
  };

  const savedClick = () => {
    closeModal();
    setLocationMap(
      `https://www.google.com/maps?q=${locationSaved.lat},${locationSaved.lng}&z=15&output=embed`
    );
  };

  return (
    <div>
      {locationMap ? (
        <div className="flex gap-4">
          <div
            className={`rounded-[6px] font-normal text-white flex
  bg-[#28a745] 
  transition-colors`}
          >
            <div className="p-[10px] px-[40px] border-r border-white">
              Tanlandi
            </div>
            <div className="p-[10px] px-[20px]">
              <i className="fa-solid fa-check"></i>
            </div>
          </div>
          <button
            onClick={openModal}
            className="rounded-[6px]  font-normal text-white bg-[#17a2b8] hover:bg-[#138496] flex transition-colors"
          >
            <div className="p-[10px] px-[40px] border-r border-white">
              O'zgartirish
            </div>
            <div className="p-[10px] px-[20px]">
              <i className="fa-solid fa-map-marker-alt"></i>
            </div>
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            openModal();
            console.log(123);
          }}
          className={`rounded-[6px] font-normal text-white flex
  bg-[#17a2b8] hover:bg-[#138496]
  transition-colors`}
        >
          <div className="p-[10px] px-[40px] border-r border-white">
            Manzilini xaritadan tanlang
          </div>
          <div className="p-[10px] px-[20px]">
            <i className="fa-solid fa-map-marker-alt"></i>
          </div>
        </button>
      )}
      <div
        onClick={() => closeBoxCard()}
        className={`fixed ${
          modalIsOpen == true ? "active " : "modalBackMap z-[-2]"
        }   flex   font-mono flex-wrap  items-center backdrop-filter justify-center top-0 bg-backgroundModal   left-0  bottom-0 w-full`}
      >
        <div
          className={` ${
            modalIsOpen == true
              ? " opacity-1 translate-x-0 all duration-[.3s]"
              : " opacity-0 all duration-[.2s]  translate-y-[200px]"
          } z-[1000] absolute xl:h-[70vh] 2xl:h-[80vh] bottom-0 sm:bottom-auto  sm:w-[80%] lg:w-[90%] max-h-[650px]  max-w-[1050px] rounded-br-none rounded-bl-none rounded-[16px] sm:rounded-bl-[22px] sm:rounded-[16px] md:rounded-[16px] gap-[25px]  sm:fixed  bg-[white]  sm:p-[15px] lg:p-[20px]`}
        >
          <h2 className="mb-4 text-xl font-bold">
            Mehmonhona manzilini tanlang
          </h2>

          <MapComponent
            defaultValue={locationSaved}
            onLocationSelect={handleLocationSelect}
          />
          <div className="flex py-[20px] gap-4 text-[17px] justify-end">
            <button
              onClick={savedClick}
              className={`rounded-[6px] font-normal text-white flex
               bg-[#007BFF] hover:bg-[#0056b3]
               transition-colors`}
            >
              <div className="p-[10px] px-[40px] border-r border-white">
                Saqlash
              </div>
              {/* <div className="p-[10px] px-[20px]">
              <i className="fa-solid fa-save"></i>
            </div> */}
            </button>
            <button
              onClick={closeModal}
              className={`rounded-[6px] font-normal text-white flex
    bg-[#6c757d] hover:bg-[#5a6268]
    transition-colors`}
            >
              <div className="p-[10px] px-[40px] border-r border-white">
                Orqaga qaytish
              </div>
        
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
