import { useRef } from "react";
import { Link } from "react-router-dom";
import Mihtila from "../assets/images/mithila.png";
import Jdwom from "../assets/images/jdwomens.jpeg";
import closing from "../assets/events/closingCeremony.jpg";
import selfDefence from "../assets/events/selfDefence.jpg";
import eveTeasing from "../assets/events/eveteasing.jpg";
import plant from "../assets/events/plant.jpeg";
import rally from "../assets/events/rally.jpeg";
import handmade from "../assets/events/handmade.jpg";
import flag from "../assets/events/flag.jpeg";

const Events = () => {
  const scrollRef = useRef(null);

  const events = [
    {
      id: 1,
      image: Jdwom,
      title: "Felicitation Ceremony",
      date: "30th Jan,2025",
      venue: "J.D. Women's College, Patna",
      department: "Maa Prema Foundation",
    },
    {
      id: 2,
      image: Mihtila,
      title: "Workshop on Mithila Painting",
      date: "1st-28th Feb,2025",
      venue: "NIT Patna",
      department: "Maa Prema Foundation",
    },
    {
      id: 3,
      image: flag,
      title: "Flag Hoisting Ceremony",
      date: "15-08-2024",
      venue: "Patna City",
      department: "Maa Prema Foundation",
    },
    {
      id: 4,
      image: rally,
      title: "Aajadi Ka Amrit Mahotsav, Tiranga Rally",
      date: "15-07-2024",
      venue: "Pirapur Mathura, Vaishali",
      department: "Maa Prema Foundation",
    },
    {
      id: 5,
      image: handmade,
      title: "Mithila Painting & Handmade Craft workshop",
      date: "22-05-2024",
      venue: "J.D. Women's College, Patna",
      department: "Maa Prema Foundation",
    },
    {
      id: 6,
      image: plant,
      title: "Plantation Drive",
      date: "21-03-2024",
      venue: "Patna City",
      department: "Maa Prema Foundation",
    },
    {
      id: 7,
      image: closing,
      title: "Closing Ceremony of Self Defence Training",
      date: "25-09-2019",
      venue: "Deeplela Complex, Kadamkuan, Patna",
      department: "Maa Prema Foundation",
    },
    {
      id: 8,
      image: selfDefence,
      title: "Self Defence Training ",
      date: "24-07-2018",
      venue: "J.D. Women's College, Patna",
      department: "R.P.M College Patna City",
    },
    {
      id: 9,
      image: eveTeasing,
      title: "Self Defence Training for Eve Teasing",
      date: "12-03-2018",
      venue: "J.D. Women's College, Patna",
      department: "Maa Prema Foundation",
    },
    // Add more events as needed
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-10 md:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12" data-aos="fade-up">
          <p className="text-orange-500 font-medium mb-2">
            MAA PREMA FOUNDATION
          </p>
          <h2 className="text-5xl font-bold text-[#1e3a8a]">
            Events<span className="text-orange-500">.</span>
          </h2>
        </div>

        {/* Events Container */}
        <div
          className="relative bg-gray-200 rounded-3xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Scrollable Container */}

          
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 p-5 scroll-smooth hide-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="flex-none w-[300px] md:w-[300px] bg-white rounded-lg overflow-hidden shadow-lg p-2"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[200px]  rounded-xl"
                  />
                  <div className="p-4">
                    <div className="text-sm text-orange-500  mb-1">
                      {event.department}
                    </div>
                    <h3 className="text-base font-bold text-[#1e3a8a] mb-1">
                      {event.title}
                    </h3>
                    <div className="flex justify-between text-gray-600  text-sm">
                      <div className="text-left">
                        <span className="font-semibold">Date: </span>
                        {event.date}
                      </div>
                      <div className="text-right ">
                        <span className="font-semibold">Venue: </span>
                        {event.venue}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
       
        </div>

        {/* View All Button */}
        <div className="flex justify-end">
              <div className="mx-2 my-4">
                <Link
                  to="/events"
                  className="bg-[#1e3a8a]  text-white px-6 py-2 rounded-lg hover:bg-[#2c54d8] transition-colors"
                >
                  View All
                </Link>
              </div>
            </div>
      </div>
    </section>
  );
};

export default Events;
