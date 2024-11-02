import { Popover } from '@headlessui/react';

export default function TooltipButton() {
  return (
    <Popover className="relative">
      <Popover.Button className="rounded-[8px] font-normal text-white bg-[#FFA755] flex items-center p-3 px-5">
        <span>Причина</span>
      </Popover.Button>

      <Popover.Panel 
        className="absolute z-[100] w-[400px] border-[2px] border-dashed border-main p-2 mt-2 text-sm -translate-x-1/2 bg-white bg-gray-800 rounded-md shadow-lg left-1/2"
      >
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
        Причина отказа отеля
      </Popover.Panel>
    </Popover>
  );
}
