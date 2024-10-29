import { Disclosure } from "@headlessui/react";
import RangeFilter from "./RangeFilter";
import FiltersStars from "./FiltersStars";
import DefaultBtn from "../../components/buttons/DefaultBtn";

function DropdownButton() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Disclosure defaultOpen={false}>
        {({ open }) => (
          <>
            {/* Кнопка будет скрыта на больших экранах */}
            <Disclosure.Button className="flex items-center justify-between px-4 py-2 text-sm font-medium bg-blue-500 rounded-md white hover:bg-blue-600 md:hidden">
              <span>{open ? "Скрыть фильтры" : "Показать фильтры"}</span>
              <span className={open ? "transform rotate-180" : ""}>▼</span>
            </Disclosure.Button>

            {/* Панель будет всегда видна на ПК (md) и скрыта на мобильных устройствах */}
            <Disclosure.Panel className="hidden mt-2 md:block">
              <div className="p-4 bg-gray-100 rounded-md">
                {/* Здесь можно вставить компоненты фильтров */}
                <RangeFilter
                  price={filteredPrice}
                  setPrice={setFilteredPrice}
                />
                <FiltersStars
                  selectedStar={selectedStar}
                  setSelectedStar={setSelectedStar}
                />

                <DefaultBtn txt={"main.buttons.filter"} click={filtering} />
              </div>
            </Disclosure.Panel>

            {/* На мобильных устройствах контент скрыт и доступен только при клике */}
            {open && (
              <div className="md:hidden">
                <div className="p-4 bg-gray-100 rounded-md">
                  {/* Здесь компоненты фильтров для мобильных устройств */}
                  <RangeFilter
                    price={filteredPrice}
                    setPrice={setFilteredPrice}
                  />
                  <FiltersStars
                    selectedStar={selectedStar}
                    setSelectedStar={setSelectedStar}
                  />

                  <DefaultBtn txt={"main.buttons.filter"} click={filtering} />
                </div>
              </div>
            )}
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default DropdownButton;
