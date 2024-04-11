import { ArrowUpRight, AlignCenter } from "lucide-react";
import { useState } from "react";

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("info");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="container flex justify-between mx-auto h-[95px] items-center">
      <img src="/images/logo.png" alt="logo" />
      <nav className="hidden lg:flex gap-10 ">
        <a href="#main">Главная</a>
        <a href="#info" onClick={scrollToAbout}>
          О Нас
        </a>
        <a href="#courses">Курсы</a>
        <a href="#reviews">Отзывы</a>
        <a href="#price">Прайс</a>
        <a href="#team">Команда</a>
        <a href="#contact">Контакты</a>
      </nav>
      <nav
        onClick={handleMenuOpen}
        style={{ display: isMenuOpen ? "flex" : "none" }}
        className="mobileMenu absolute z-20 top-0 bg-slate-800 w-full flex-col items-center"
      >
        <a href="#main">Главная</a>
        <a href="#info" onClick={scrollToAbout}>
          О Нас
        </a>
        <a href="#courses">Курсы</a>
        <a href="#reviews">Отзывы</a>
        <a href="#price">Прайс</a>
        <a href="#team">Команда</a>
        <a href="#contact">Контакты</a>
      </nav>
      <button onClick={handleMenuOpen} className="flex lg:hidden">
        <AlignCenter />
      </button>
      <button
        className="border p-2 hover:bg-white hover:text-black transition rounded-lg text-sm flex gap-1 items-center"
        onClick={scrollToBottom}
      >
        Отправить запрос
        <ArrowUpRight className="bg-white rounded-full text-black w-4 h-4" />
      </button>
    </header>
  );
};

export default Header;
