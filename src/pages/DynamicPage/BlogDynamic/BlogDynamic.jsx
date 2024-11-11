import React from "react";
import Clock from "/src/assets/blogs/clock.svg";
import User from "/src/assets/blogs/user.svg";
import Img1 from "/src/assets/blogs/img1.png";
import Img2 from "/src/assets/blogs/img2.png";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useTranslation } from "react-i18next";
import { date_formatter } from "../../../components/helpers/date_formatter";
const BlogDynamic = () => {
  const { id } = useParams();
  const { data: blog, loading } = useFetch(`blogs/blog/${id}`);
  const {
    i18n: { language: lang },
    t,
  } = useTranslation();


  return (
    !loading && (
      <div className=" container pb-[100px] mx-auto">
        <div className="lg:flex items-center  justify-between mt-[50px]">
          <div>
            <div className="title font-playfair max-w-[677px] text-main text-[70px]">
              {blog[lang]?.title}
            </div>

            <div className="flex text-gray items-center text-[16px] gap-[15px]">
              <div className="flex gap-2 item-center">
                <img src={Clock} className="w-[25px]" alt="" />
                <p className="mt-1">E’lon qilingan: 20-iyun, 2024yil</p>
              </div>
              <div className="flex gap-2 item-center">
                <img src={User} className="w-[25px]" alt="" />
                <p className="mt-1">
                  {blog.author?.first_name} {blog.author?.first_name}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4  w-[766px] h-[520px]  rounded-[12px] bg-white shadow-shadowKombo">
            <img
              src={blog?.image}
              className="object-cover w-full h-full "
              alt=""
            />
          </div>
        </div>
        <div
          className="mt-[50px]"
          dangerouslySetInnerHTML={{ __html: blog[lang]?.more }}
        />
        <div className="title font-mono text-[20px]">
          {blog[lang]?.description}
        </div>
        {/* <div className="my-[50px] font-medium   text-[19px]">
          Orol dengizi – Oʻrta Osiyodagi eng katta berk koʻl. Maʼmuriy jihatdan
          Orol dengizining yarmidan koʻproq janubi-gʻarbiy qismi Oʻzbekiston,
          shimoli-sharqiy qismi Qozogʻiston hududida joylashgan. Oʻtgan asrning
          60-yillarigacha Orol dengizi maydoni orollari bilan oʻrtacha 68,0 ming
          km² ni tashkil etgan. Kattaligi jihatidan dunyoda toʻrtinchi (Kaspiy
          dengizi, Amerikadagi Yuqori koʻl va Afrikadagi Viktoriya koʻlidan
          keyin), Yevrosiyo materigida (Kaspiydan keyin) ikkinchi oʻrinda edi.
        </div>
        <div className="p-4 h-[600px] w-[1100px] mx-auto    rounded-[12px] bg-white shadow-shadowKombo">
          <div className="rounded-[12px] overflow-hidden w-full h-full">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              controls
              className={"rounded-md"}
              url={`https://www.youtube.com/watch?v=wh25oA_SEQk`}
            />
          </div>
        </div>

        <div className="my-[50px] font-medium   text-[19px]">
          Afrikadagi Viktoriya koʻlidan keyin, Yevrosiyo materigida (Kaspiydan
          keyin) ikkinchi oʻrinda edi. Dengiz shimoli-sharqdan janubi-gʻarbga
          choʻzilgan, uz. 428 km, eng keng joyi 235 km (45° shahrik.) boʻlgan.
          Havzasining maydoni 690 ming km², suvining hajmi 1000 km³, oʻrtacha
          chuq. 16,5 m atrofida oʻzgarib turgan. Havzasining kattaligi uchun
          dengiz deb atalgan. Orol dengizi yuqori pliotsenda Yer poʻstining
          egilgan yeridagi botiqda hosil boʻlgan.
        </div>
        <div className="flex gap-[60px]">
          <div className="w-1/2">
            <img
              src={Img1}
              className="w-full h-full object-cover rounded-[20px]"
              alt=""
            />
          </div>
          <div className="w-1/2">
            <img
              src={Img2}
              className="w-full h-full object-cover rounded-[20px]"
              alt=""
            />
          </div>
        </div>
        <div className="my-[50px]  font-medium   text-[19px]">
          Dengiz shimoli-sharqdan janubi-gʻarbga choʻzilgan, uz. 428 km, eng
          keng joyi 235 km (45° shahrik.) boʻlgan. Havzasining maydoni 690 ming
          km², suvining hajmi 1000 km³, oʻrtacha chuq. 16,5 m atrofida oʻzgarib
          turgan. Havzasining kattaligi uchun dengiz deb atalgan. Orol dengizi
          yuqori pliotsenda Yer poʻstining egilgan yeridagi botiqda hosil
          boʻlgan.
        </div> */}
      </div>
    )
  );
};

export default BlogDynamic;
