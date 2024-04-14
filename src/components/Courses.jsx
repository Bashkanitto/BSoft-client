import { useState } from "react";
import { coursesList, stackList } from "./Constants";
import { SectionName } from "./SectionName";
import Modal from "./Modal";
import * as imagesData from "./images.json";
const dart =
  imagesData.folders.find((folder) => folder.name === "dart")?.images || [];
const html =
  imagesData.folders.find((folder) => folder.name === "html")?.images || [];
const java =
  imagesData.folders.find((folder) => folder.name === "java")?.images || [];

const Courses = () => {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(html);
  console.log(dart);
  console.log(java);
  const openModal = (button) => {
    if (button === "first") {
      setImages(html);
    } else if (button === "second") {
      setImages(dart);
    } else if (button === "third") {
      setImages(java);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          {stackList.map((item, index) => (
            <button
              key={index}
              className="border rounded-lg flex p-2 items-center gap-2 h-[30px]"
            >
              <img className="w-[20px]" src={item.img} alt={item.name} />
              {item.name}
            </button>
          ))}
        </div>
      </div>
      {/* images here */}

      <div className="p-4 rounded-lg">
        <div className="courses-items justify-center lg:justify-between flex flex-row flex-wrap gap-10">
          {coursesList.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center border p-4 rounded-lg text-lg w-full sm:w-[30%] md:w-[30%] lg:w-[30%]"
            >
              <img
                className="w-[250px] h-[250px] rounded-2xl mb-4"
                src={item.img}
                alt="stackItem"
              />
              <div className="flex gap-2">
                <span className="text-bold transition duration-500">
                  {item.name}
                </span>
              </div>
              <div className="flex flex-col gap-[5px] item-center">
                <span className="w-[320px] h-[170px]  m-3  text-center">
                  {item.description}
                </span>
                <span className="w-[320px] text-lg p-1 text-center">
                  {item.additional}
                </span>
              </div>
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-full transition duration-300 hover:text-purple-800 hover:bg-white"
                onClick={() => openModal(item.button)}
              >
                Силлабус
              </button>
            </div>
          ))}
          {isModalOpen && <Modal images={images} closeModal={closeModal} />}
        </div>
      </div>
    </section>
  );
};

export default Courses;
