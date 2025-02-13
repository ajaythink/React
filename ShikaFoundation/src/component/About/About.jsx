import Image1 from "../../assets/HomeBanner/Banner4-1.jpg.webp";
export default function About() {
  return (
    <>
      <img src={Image1} alt="Image" />
      <div className="px-2 py-10 lg:px-10 text-xl text-justify text-gray-800">
        <p>
          Smile Foundation was initiated in 2002 when a group of friends came
          together with the intention of giving back to the society. They were
          inspired by the thought and philosophy of Peter Senge, the founder of
          the Society for Organizational Learning who has propagated that
          “sustainability, social equality and the environment are now business
          problems…” and corporate leaders can’t expect governments to solve
          them alone.
        </p>
        <p className="mt-2 lg:mt-5">
          What triggered these thoughts was the liberalisation of the Indian
          economy in the 1990’s which brought with it immense opportunities.
          Business revived, and India became not just a market, but also an
          investment prospect for the developed world. Disposable incomes and
          early settlements became a living reality for the working
          middle-class. For the first time in India, professionals could think
          beyond making a living, and contribute towards the society.
        </p>
      </div>
    </>
  );
}
