import { useState } from "react";
interface Testimonial {
    avatar: string;
    name: string;
    title: string;
    quote: string;
  }

export default () => {
    const testimonials: Testimonial[] = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Product designer",
      quote:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "DevOp engineer",
      quote:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati ",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const handleTestimonialClick = (event: React.MouseEvent<HTMLButtonElement>, idx: number): void => {
    event.preventDefault();
    setCurrentTestimonial(idx);
  };

  return (
    <>
      <h1 className="text-2xl ml-4 font-bold mt-4">Testimonials</h1>
      <section className="py-14 m-4 rounded-lg shadow-lg bg-cyan-950 ">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-white font-semibold pb-6">
              What people are saying
            </h3>
            <ul className="">
              {testimonials.map((item, idx) =>
                currentTestimonial === idx ? (
                  <li key={idx}>
                    <figure>
                      <blockquote>
                        <p className="text-white text-xl font-semibold sm:text-2xl">
                          “{item.quote}“
                        </p>
                      </blockquote>
                      <div className="mt-6">
                        <img
                          src={item.avatar}
                          className="w-16 h-16 mx-auto rounded-full"
                          alt={`${item.name}'s avatar`}
                        />
                        <div className="mt-3">
                          <span className="block text-white font-semibold">
                            {item.name}
                          </span>
                          <span className="block text-black text-sm mt-0.5">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </figure>
                  </li>
                ) : null
              )}
            </ul>
          </div>
          <div className="mt-6">
            <ul className="flex gap-x-3 justify-center">
              {testimonials.map((item, idx) => (
                <li key={idx}>
                  <button
                    className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-green-600 focus:ring ${
                      currentTestimonial === idx
                        ? "bg-green-600"
                        : "bg-gray-300"
                    }`}
                    onClick={(event) => handleTestimonialClick(event, idx)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};