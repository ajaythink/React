export default function Media() {
  return (
    <div>
      <div className="md:m-6 lg:m-10">
        <div className="w-100  bg-green-50 p-10 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase ">
            Campaign
          </h1>
          <nav className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4 uppercase">
              <a
                href="/"
                className="text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                Home
              </a>
              <span
                aria-hidden="true"
                className="text-sm font-medium text-gray-500"
              >
                /
              </span>
              <a
                href="/about"
                className="text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                About
              </a>
              <span
                aria-hidden="true"
                className="text-sm font-medium text-gray-500"
              >
                /
              </span>
              <a
                href="#"
                aria-current="page"
                className="text-sm font-medium text-indigo-600"
              >
                Media
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {MediaData.map((data) => (
            <div
              key={data.id}
              className="shadow shadow-green-800 rounded-lg  max-w-82 "
            >
              <div className="overflow-hidden h-60">
                {/* image */}
                <img
                  src={data.image}
                  alt="image"
                  className="rounded-t-lg w-full"
                />
              </div>
              <div className="p-2">
                <h2 className="font-bold py-2">{data.title}</h2>
                <p className="text-black/70 pb-5">{data.description}</p>
                <button className="border border-green-800 text-green-500 hover:bg-green-50 focus:ring-4 focus:ring-green-300 rounded-lg px-4 py-2 focus:outline-none">
                  know more
                </button>
              </div>
            </div>
          ))}
          {/* <div className="shadow shadow-green-800 rounded-lg  max-w-82 ">
            <div className="overflow-hidden">
              
              <img
                src="https://www.smilefoundationindia.org/wp-content/uploads/2023/07/335402732_1259490817982831_3007439416990310991_n-1536x1024.jpg.webp"
                alt="image"
                className="rounded-t-lg w-full" 
              />
            </div>
            <div className="p-2">
              <h2 className="font-bold py-2">
                Shell NXplorers Junior Programme Launch
              </h2>
              <p className="text-black/70 pb-5">
                Smile Foundation is delighted to launch the Shell NXplorers
                Junior programme for students of classes 6th and 7th from 120
              </p>
              <button className="border border-green-800 text-green-500 hover:bg-green-50 focus:ring-4 focus:ring-green-300 rounded-lg px-4 py-2 focus:outline-none">
                know more
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

const MediaData = [
  {
    id: 1,
    title: "Shell NXplorers Junior Programme Launch",
    description:
      "Smile Foundation is delighted to launch the Shell NXplorers Junior programme for students of classes 6th and 7th from 120",
    image:
      "https://www.smilefoundationindia.org/wp-content/uploads/2023/07/335402732_1259490817982831_3007439416990310991_n-1536x1024.jpg.webp",
  },
  {
    id: 5,
    title: "Shell NXplorers Junior Programme Launch",
    description:
      "Smile Foundation is delighted to launch the Shell NXplorers Junior programme for students of classes 6th and 7th from 120",
    image:
      "https://www.smilefoundationindia.org/wp-content/uploads/2023/07/335402732_1259490817982831_3007439416990310991_n-1536x1024.jpg.webp",
  },
  {
    id: 4,
    title: "Shell NXplorers Junior Programme Launch",
    description:
      "Smile Foundation is delighted to launch the Shell NXplorers Junior programme for students of classes 6th and 7th from 120",
    image:
      "src/assets/media/pedh_Lagaye_paryawarn_bachaye_news_paper1.jpg",
  },
  {
    id: 2,
    title: "Shell NXplorers Junior Programme Launch",
    description:
      "Smile Foundation is delighted to launch the Shell NXplorers Junior programme for students of classes 6th and 7th from 120",
    image:
      "src/assets/media/pedh_Lagaye_paryawarn_bachaye_news_paper.jpg",
  },
  {
    id: 3,
    title: "Shell NXplorers Junior Programme Launch",
    description:
      "Smile Foundation is delighted to launch the Shell NXplorers Junior programme for students of classes 6th and 7th from 120",
    image:
      "src/assets/logo.png",
  },
];
 