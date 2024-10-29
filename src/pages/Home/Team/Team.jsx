import SectionDesign from "../../../components/typography/SectionDesign";
import Title from "../../../components/typography/Title";

import TeamCard from "./TeamCard";
const team = [
  {
    id: 1,
    img: "../home/team1.jpg",
    whatsapp: "https://w",
    facebook: "https://w",
    email: "https://w",
  },
  {
    id: 2,
    img: "../home/team1.jpg",
    whatsapp: "https://w",
    facebook: "https://w",
    email: "https://w",
  },
  {
    id: 3,
    img: "../home/team1.jpg",
    whatsapp: "https://w",
    facebook: "https://w",
    email: "https://w",
  },
];
const Team = () => {
  return (
    <div className="lg:my-[100px] lg:mt-[150px] container mx-auto  flex flex-col items-center">
      <SectionDesign text={"Team"} />
      <Title
        classNameList={
          " text-[25px] md:text-[30px] xl:text-[40px] text-center  font-playfair "
        }
        txt={`sectionsData.teamSection.title`}
      />
      <div className="flex flex-wrap md:flex-row   mt-[30px] w-full  justify-center gap-[50px]">
        {team.map((item, id) => (
          <TeamCard key={id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Team;
