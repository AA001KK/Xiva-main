import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonBLog = () => {
  return (
    <div className="ps-[20px] flex-1">
      <p className="text-main uppercase  text-[20px] my-[10px]">Sayohat</p>
      <div className="text-[30px] uppercase  font-proppins">
        <Skeleton />
      </div>
      <div className="flex items-center my-[20px] gap-[30px] text-[#939393]  text-[16px] ">
        <div className="flex items-center gap-2">
          <Skeleton />
        </div>
        <div className="flex items-center gap-2">
          <img src={Calendar} alt="" />
          <DateComponent date={item.createdAt} />
        </div>
        <div className="flex items-center gap-2">
          <img src={User} alt="" />
          {item?.author?.first_name}
          <span> {item?.author?.last_name}</span>
        </div>
      </div>
      <h1 className="text-grayBlog  text-[18px]">{item[lang].description}</h1>
    </div>
  );
};

export default SkeletonBLog;
