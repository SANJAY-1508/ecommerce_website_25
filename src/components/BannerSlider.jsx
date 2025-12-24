import { useEffect, useState } from "react";
import banner1 from "../assets/images/category/banner_1.jpeg"
import banner2 from "../assets/images/category/banner_2.jpeg"
const banners = [
  {
    id: 1,
    image:banner1,
    // title: "Welcome to Our Website",
    // subtitle: "Build modern apps with React",
  }
];

export default function FadeBannerCarousel() {
  const [current, setCurrent] = useState(1);

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="fade-carousel">
        {banners.map((item, index) => (
          <div
            key={item.id}
            className={`fade-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="fade-content">
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}

    
        <div className="fade-dots">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`fade-dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
