import Image from "next/image";
import IconLocation from "../../public/images/location.svg";
import IconPhone from "../../public/images/phone.svg";
import IconEmail from "../../public/images/email.svg";
import Navbar from "../navbar/page";
export default function Contact() {
  return (
    <div>
    <div id="contacts" className="bg-white pt-40 h-fit pb-16">
      {" "}
      {/**contact */}
      <div className="mx-auto w-9/12 flex flex-row items-center">
        <div className="basis-1/2 ">
          <div>
            <div className="flex items-center">
              <svg className="stroke-gray-400 stroke-2 h-5 w-5">
                <line x1={0} y1={10} x2={10} y2={10} />
              </svg>{" "}
              {/* Deskripsi  */}
              <h2 className="uppercase text-xs font-extralight tracking-spasi text-gray-800">
                Inquiry
              </h2>
            </div>
            <h3 className="text-3xl text-gray-800">Contact Me</h3>
          </div>
          <form action="#" className="max-w-md mt-10">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold"
                htmlFor="Name"
              >
                Name
              </label>
              <input
                className="bg-blue-100 rounded-md px-4 py-2 w-full focus:ring-blue-950"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-blue-100 rounded-md px-4 py-2 w-full focus:ring-blue-950"
                type="email"
                name=""
                id=""
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold"
                htmlFor="Message"
              >
                Message
              </label>
              <textarea
                className="bg-blue-100 rounded-md px-4 py-2 w-full focus:ring-blue-950"
                name=""
                id=""
                cols={30}
                rows={4}
              />
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full"
                type="submit"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
        <div className="basis-1/2 ml-10">
          <div className="flex flex-row gap-5 p-5">
            <div className="h-10 w-10 p-2 bg-blue-100 rounded-2xl">
              <Image className="w-full" src={IconLocation} alt="" />
            </div>
            <div>
              <h4 className="text-lg text-gray-800 font-medium">Addres</h4>
              <h5 className="font-thin text-gray-800">
                Gg IX Sawojajar, Kec. Kedungkandang, Malang, Indonesia
              </h5>
            </div>
          </div>
          <div className="flex flex-row gap-5 p-5">
            <div className="h-10 w-10 p-2 bg-blue-100 rounded-2xl">
              <Image className="w-full" src={IconPhone} alt="" />
            </div>
            <div>
              <h4 className="text-lg text-gray-800 font-medium">Phone Call</h4>
              <h5 className="font-thin text-gray-800">(+62) 81336518277</h5>
            </div>
          </div>
          <div className="flex flex-row gap-5 p-5">
            <div className="h-10 w-10 p-2 bg-blue-100 rounded-2xl">
              <Image className="w-full" src={IconEmail} alt="" />
            </div>
            <div>
              <h4 className="text-lg text-gray-800 font-medium">E-Mail</h4>
              <h5 className="font-thin text-gray-800">esarama22@gmail.com</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
