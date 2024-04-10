const Contact = () => {
  return (
    <section
      id="contact"
      className=" container-full lg:container mx-auto transition-all duration-300  flex flex-col gap-5 p-2 md:p-10"
    >
      <div className="rounded-2xl border border-slate-950 md:border-stone-50  md:p-5 flex flex-col gap-5 bg-opacity-20 p-20 h-[240px]">
        <h5 className="text-3xl font-bold text-center">
          <span> Наши Контакты</span>
        </h5>
        <p className="text-lg font-bold text-center">
          Email: smavyip@gmail.com
        </p>
        <p className="text-lg font-bold text-center">
          Адрес: Улица Ниеткалиева 118
        </p>
        <p className="text-lg font-bold text-center">
          Телефон: +7(771) 145 57 48
        </p>
      </div>
      <div
        className="rounded-2xl border border-slate-950 md:border-stone-50 p-0 md:p-5 flex flex-col gap-10 bg-opacity-20 "
        style={{ backgroundImage: `url(${"/images/imgFormBg.png"})` }}
      >
        <h5 className="text-2xl font-bold lg:text-4xl w-full sm:w-2/3 md:w-1/2 mb-4 flex">
          Мы свяжемся с вами как только сможем в течении 24 часов.
        </h5>
        <form className="md:w-2/3 flex flex-col gap-6 w-full">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <input type="text" name="name" placeholder="Имя" />
            <input type="tel" name="name" placeholder="Номер телефона" />
          </div>
          <button
            type="submit"
            className="bg-white rounded-lg text-black block w-full h-10 text-sm"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
