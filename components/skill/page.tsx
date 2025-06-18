import Image from "next/image";
import Crown from "../../public/images/crown.svg";
import App from "../../public/images/app.svg";
import Globe from "../../public/images/globe.svg";
import imgTicket from "../../public/images/train-ticket.png";
import imgEcommerce from "../../public/images/ecommerce.png";
import imgTravel from "../../public/images/travel.png";
import imgFooder from "../../public/images/fooder-home.png";



export default function Skill() {
  return (
    <main>
  {/* Services Section */}
  <section
    className="bg-gradient-to-br from-slate-100 via-slate-50 to-white pt-20 pb-20"
    id="services"
  >
    <div className="w-9/12 mx-auto">
      <div className="flex flex-col items-center">
        {/* Title */}
        <div>
          <div className="flex items-center">
            <svg className="stroke-gray-400 stroke-2 h-5 w-5">
              <line x1={0} y1={10} x2={10} y2={10} />
            </svg>
            <h2 className="uppercase text-xs font-extralight tracking-spasi ml-2">
              Services
            </h2>
          </div>
          <h3 className="text-3xl">Specialized in</h3>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-3 gap-10 py-10">
          {[
            {
              icon: Crown,
              title: "UI/UX Design",
              desc: "Turn what you have in mind of a digital product into reality. For any platform you consider.",
            },
            {
              icon: App,
              title: "Application Development",
              desc: "Standard designing, building, and implementing your application with documentation.",
            },
            {
              icon: Globe,
              title: "Web Development",
              desc: "Create and maintain your websites and also take care of its performance and traffic capacity.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="shadow-lg rounded-lg bg-white flex flex-col items-center py-10 px-10"
            >
              <div className="h-10 w-10 p-2 bg-blue-100 rounded-2xl">
                <Image
                  className="w-full"
                  src={item.icon}
                  alt=""
                  width={0}
                  height={0}
                />
              </div>
              <h4 className="text-black mt-5">{item.title}</h4>
              <p className="text-center font-extralight text-sm mt-2 text-gray-500 capitalize">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Portfolio Section */}
  <section
    id="portofolios"
    className="py-40 bg-gradient-to-br from-gray-950 via-gray-900 to-black"
  >
    <div className="w-9/12 mx-auto">
      {/* Title */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <svg className="stroke-gray-400 stroke-2 h-5 w-5">
            <line x1={0} y1={10} x2={10} y2={10} />
          </svg>
          <h2 className="uppercase text-xs font-extralight tracking-spasi ml-2">
            My Works
          </h2>
        </div>
        <h3 className="text-3xl text-white capitalize">Featured Portfolios</h3>
      </div>

      {/* Portfolio Cards */}
      <div className="grid grid-cols-4 gap-20 mt-20">
        {[
          { img: imgTicket, title: "Train Ticket", stack: "Next JS" },
          { img: imgFooder, title: "Food Ordering", stack: "Next JS" },
          { img: imgEcommerce, title: "Ecommerce", stack: "Tailwind CSS" },
          { img: imgTravel, title: "Travel", stack: "Bootstrap" },
        ].map((item, i) => (
          <div key={i} className="rounded-lg shadow-lg overflow-hidden">
            <Image
              className="object-cover h-48 opacity-50"
              src={item.img}
              alt=""
              width={0}
              height={0}
            />
            <div className="bg-white py-2 px-4">
              <h4 className="text-sm font-medium text-gray-800">
                {item.title}
              </h4>
              <h5 className="text-sm font-mono">{item.stack}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</main>

  );
}
