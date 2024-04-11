import { coursesList, stackList } from "./Constants";
import { SectionName } from "./SectionName";

const Courses = () => {
  const openPdf = (pdfSrc) => {
    window.open(pdfSrc, "_blank");
  };

  return (
    <section
      id="courses"
      className="container-full lg:container mx-auto transition-all duration-300 flex flex-col gap-5 p-2 md:p-10"
    >
      <div className="devide flex flex-col md:flex-row">
        <div className="devide-item">
          <SectionName number={"02"}>Мы Предлагаем Курсы</SectionName>
          <p className="w-full md:w-4/5 text-center md:text-start mb-4">
            Здесь вы найдете широкий выбор обучающих программ, позволяющих
            расширить ваши знания и навыки в области информационных технологий.
            Независимо от вашего уровня подготовки и профессионального опыта, мы
            предлагаем курсы, отвечающие самым актуальным требованиям
            современной индустрии.
          </p>
        </div>
        <div className="stackBtns flex flex-wrap gap-3 w-full md:w-5/6 h-[70px] mb-10">
          {/* stack btns here  */}
          {stackList.map((item) => (
            <button
              className="border rounded-lg flex p-2 items-center gap-2 h-[30px]"
              key={item}
            >
              <img className="w-[20px]" src={item.img} alt={item.name} />
              {item.name}
            </button>
          ))}
        </div>
      </div>
      {/* images here */}

      <div className="courses-items justify-center lg:justify-between flex flex-wrap gap-10">
        {coursesList.map((item) => (
          <div key={item.name} className="relative flex flex-col items-center">
            <img
              className="w-[250px] h-[250px] rounded-2xl mb-4"
              src={item.img}
              alt="stackItem"
            />
            <div className="flex gap-2">
              <button
                className="border rounded-lg p-1 text-sm hover:bg-white hover:text-black transition duration-500"
                onClick={() => openPdf(item.pdfSrc)}
              >
                {item.name}
              </button>
            </div>
            <p className="w-[300px] h-[150px] p-3 m-3 border rounded-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
