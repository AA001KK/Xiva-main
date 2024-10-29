import { Popover } from '@headlessui/react';

export default function TooltipButton({message}) {
  return (
    <Popover className="relative">
      <Popover.Button className="rounded-[8px] font-normal text-main flex items-center ">
        <span>Rad etilish sababi</span>
      </Popover.Button>

      <Popover.Panel 
        className="absolute left-1/2 z-[100] min-h-[150px]  -translate-x-1/2 mt-2 w-full lg:w-96 p-2 bg-gray-800 text-blue border border-main border-dashed bg-white text-sm rounded-md shadow-lg"
      >
       {message}
      </Popover.Panel>
    </Popover>
  );
}
