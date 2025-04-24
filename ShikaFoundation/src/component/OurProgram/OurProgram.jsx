import Education from "../../assets/OurProgrammes/Education.png";
import Health from "../../assets/OurProgrammes/Health.png";
import Disaster from "../../assets/OurProgrammes/disaster(1).png";
import Women from "../../assets/OurProgrammes/Women.png";

function OurProgram() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold text-center p-5">
          Our Programmes
        </h1>
        <div className="grid md:grid-cols-2 p-5 gap-10 md:p-14 md:gap-20">
          {OurProgramData.map((data) => (
            <div className="flex rounded-lg" key={data.id}>
              <img
                src={data.img}
                alt="Edutcation Icon"
                className="h-[100px] w-[100px]"
              />
              <div className="p-3">
                <p className="text-2xl md:text-3xl lg:text-3xl text-green-400 underline uppercase font-bold pb-5" style={{color: data.titlecolor}}>
                  {data.title}
                </p>
                <p className="text-black/75 sm:text-xl">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProgram;

const OurProgramData = [
  {
    id: 1,
    title: "Education",
    subtitle: "Education, nutrition and holistic development of children ",
    img: Education,
    titlecolor: "#b2ffcb",
  },
  {
    id: 2,
    title: "Health",
    subtitle:
      "Empowering adolescent girls & women through community engagement",
    img: Health,
    titlecolor: "#f797be",
  },
  {
    id: 3,
    title: "Women Empowerment",
    subtitle:
      "Helping community-based organizations become locally sustainable",
    img: Women,
    titlecolor: "#8392d7",
  },

  {
    id: 5,
    title: "Disaster Response",
    subtitle: "Providing immediate relief and long-term recovery support",
    img: Disaster,
    titlecolor: "#e2c3a2",
  },
];
