/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

import image1 from "../assets/images/category/copier.png";
import image2 from "../assets/images/category/custom.webp";
import image3 from "../assets/images/category/gift.webp";
import image4 from "../assets/images/category/paper.webp";
import image5 from "../assets/images/category/gift.webp";
import image6 from "../assets/images/category/paper.webp";
import image7 from "../assets/images/category/gift.webp";
import image8 from "../assets/images/category/paper.webp";
const slides = [
  {
    id: 1,
    name: " Copier Box",
    image: image1,
    // radius: "60% 40% 70% 30% / 40% 60% 30% 70%",
 bgColor: "linear-gradient(135deg, #ff0000ff 0%, #ffb300ff 100%)",
    textColor: "#000",
  },
  {
    id: 2,
    name: "Custom Box",
    image: image2,
    // radius: "20px 80px 40px 100px",
    bgColor: "linear-gradient(135deg, #902065ff 0%, #fbe816ff 100%)",
    textColor: "#000",
  },
  {
    id: 3,
    name: "Gift Box",
    image: image3,
    // radius: "100px 30px 120px 50px",
    bgColor: "linear-gradient(135deg, #ff0000ff 0%, #ffb300ff 100%)",
    textColor: "#000",
  },
  {
    id: 4,
    name: "PaperBox",
    image: image4,
    // radius: "50% 50% 30% 70% / 60% 40% 70% 30%",
    bgColor:"linear-gradient(135deg, #ff0000ff 0%, #ffb300ff 100%)",
    textColor: "#000",
  },
  {
    id: 5,
    name: "PaperBox",
    image: image5,
    // radius: "50% 50% 30% 70% / 60% 40% 70% 30%",
 bgColor: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)",
    textColor: "#000",
  },
  {
    id: 6,
    name: "PaperBox",
    image: image6,
    // radius: "50% 50% 30% 70% / 60% 40% 70% 30%",
    bgColor: "linear-gradient(135deg, #f75f1eff 0%, #FFD200 100%)",
    textColor: "#000",
  },
    {
    id: 7,
    name: "PaperBox",
    image: image7,
    // radius: "50% 50% 30% 70% / 60% 40% 70% 30%",
 bgColor: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)",
    textColor: "#000",
  },
  {
    id: 8,
    name: "PaperBox",
    image: image8,
    // radius: "50% 50% 30% 70% / 60% 40% 70% 30%",
    bgColor: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)",
    textColor: "#000",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);

  /* Responsive: Updated for 5 items */
  useEffect(() => {
    const handleResize = () => {
     setItemsPerView(window.innerWidth >= 992 ? 5 : 1);
      setIndex(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Auto play */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  /* Infinite loop handler */
  useEffect(() => {
    if (index === slides.length) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
      }, 600); 
    } else {
      setEnableTransition(true);
    }
  }, [index, slides.length]);

  /* Clone slides based on itemsPerView */
  const sliderItems = [...slides, ...slides.slice(0, itemsPerView)];

  return (
    <section className="slider-wrapper1">
      <div className="slider-container1">
        <div
          className="slider-track1"
          style={{
            // Math: Track width is (total items / visible items) * 100
            width: `${(sliderItems.length / itemsPerView) * 100}%`,
            // Math: Move by exactly one item width per index
            transform: `translateX(-${(30 / sliderItems.length) * index}%)`,
            transition: enableTransition ? "transform 0.6s ease" : "none",
          }}
        >
          {sliderItems.map((item, i) => (
            <div 
              key={i} 
              className="slider-slide1"
              style={{ width: `${30 / sliderItems.length}%` }}
            >
              <div className="slider-image-wrapper1">
                <img src={item.image} alt={item.name} className="slider-image" />
              </div>
              <p className="slider-name1" style={{ background: item.bgColor, color: item.textColor }}>
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
