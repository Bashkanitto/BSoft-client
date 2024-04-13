import image1 from "/public/images/image1.png";
import image2 from "/public/images/image2.png";
import image3 from "/public/images/image3.png";
import image4 from "/public/images/image4.png";
const YourComponent = () => {
  return (
    <div className="flex flex-col items-start p-10 md:pt-0 md:mt-[-20px]">
      <h1 className="font-bold text-3xl md:text-3xl mb-10">
        Процесс отбора студентов
        <br />
        Процесс отбора студентов состоит из четырёх этапов:
      </h1>

      <div className="flex flex-wrap justify-between ">
        <div className=" md:w-5/12 mb-8 md:mb-0 relative">
          <h2 className="font-bold text-2xl">Тестирование на логику</h2>
          <p>
            Тестирование понимания основ программирования и абстрактных
            концепций выбранного направления разработки. Оцениваются базовые
            знания и понимание основных принципов программирования, а также
            способность абстрактно мыслить и применять концепции на практике.
          </p>
          <img
            src={image1}
            className="opacity-70 w-20 md:w-20 mt-3 md:mt-0 absolute bottom-[1px]"
            alt="Описание изображения 1"
          />
        </div>
        <div className=" md:w-5/12 mb-8 md:mb-0 relative">
          <h2 className="font-bold text-2xl">Знание английского языка</h2>
          <p>
            Тестирование знания английского языка, особенно чтение технической
            документации для программистов. Оценивается уровень владения
            английским языком, необходимый для работы программиста.
          </p>
          <img
            src={image2}
            className="opacity-50 w-20 md:w-20 mt-3 md:mt-0 absolute top-[20px]"
            alt="Описание изображения 2"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between ">
        <div className=" md:w-5/12 mb-8 md:mb-0 relative">
          <h2 className="font-bold text-2xl">Мотивационное письмо</h2>
          <p>
            Подготовка мотивационного письма, где студент объясняет свой выбор
            направления и мотивацию. Студент может поделиться целями, страстями
            и рассказать о своем будущем в выбранной области разработки.
          </p>
          <img
            src={image3}
            className="opacity-50 w-20 md:w-20 mt-3 md:mt-0 absolute top-[20px]"
            alt="Описание изображения 3"
          />
        </div>
        <div className=" md:w-5/12 mb-8 md:mb-0 relative">
          <h2 className="font-bold text-2xl">Интервью</h2>
          <p>
            Краткое онлайн-собеседование для знакомства и обсуждения интересов,
            проектов, амбиций и целей студента. Позволяет выбрать самых
            мотивированных и амбициозных студентов для программы.
          </p>
          <img
            src={image4}
            className="opacity-50 w-20 md:w-20 mt-3 md:mt-0 absolute top-[20px]"
            alt="Описание изображения 4"
          />
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
