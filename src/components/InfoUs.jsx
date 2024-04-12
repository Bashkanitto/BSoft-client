import { useRef } from "react";

const InfoUs = () => {
  const infoRef = useRef(null);

  return (
    <section
      id="info"
      ref={infoRef}
      className="shadow-md rounded-lg p-6"
      style={{}}
    >
      <div className="text-center mx-auto px-4">
        <section className="my-4">
          <h2 className="text-3xl font-bold mb-4">О нас</h2>
          <p className="text-lg mb-4 w-full">
            BSoft IT School – филиал Smavy School, открытый в 2021 году,
            специализируется на комплексных и передовых курсах по информационным
            технологиям. Обратив внимание на различный уровень подготовки
            студентов из предыдущих потоков обучения, наши основатели создали
            BSoft как вводный курс, который послужит основой для более
            продвинутых программ обучения в школе Smavy. Наши курсы ведут
            опытные наставники и преподаватели с опытом работы более 7 лет,
            обеспечивая индивидуальный подход к каждому студенту. Мы также
            предлагаем перспективные возможности трудоустройства и контрактные
            проекты в области высоких технологий для наших успешных участников.
          </p>
        </section>
      </div>
    </section>
  );
};

export default InfoUs;
