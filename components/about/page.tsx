import React from "react";
import Image from "next/image";
import FotoGua from "../../public/images/1.png";
import Instagram from "../../public/images/Instagram.svg";
import Github from "../../public/images/Github.svg";
import Twitter from "../../public/images/Twitter.svg";
import Linkedin from "../../public/images/Linkedin.svg";

export default function About() {
  return (
    <main className="bg-gray-800 h-full text-gray-500">
      {/* Main Content */}
      <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900">
        {/* Hero Section */}
        <div className="w-9/12 flex h-screen items-center mx-auto">
          <div className="basis-1/2">
            <div className="flex items-center">
              <svg className="stroke-gray-400 stroke-2 h-5 w-5">
                <line x1={0} y1={10} x2={10} y2={10} />
              </svg>
              <h2 className="uppercase text-xs font-extralight tracking-spasi ml-2">
                my name is
              </h2>
            </div>
            <h3 className="font-bold text-4xl text-white">
              <span>Rama</span>
              <span className="text-blue-700"> Esa V.</span>
            </h3>
            <p className="font-light capitalize text-justify">
              I am passionate about programming languages and eager to embark on
              a career in software or application development. With my
              educational background and skills in the IT field, I am prepared
              to contribute my time and competencies effectively
            </p>
            <div className="flex flex-row mt-5 space-x-3">
              {/* Icon */}
              <a href="https://instagram.com/raamaesa" target="_blank">
                <Image
                  className="w-6 h-6"
                  src={Instagram}
                  alt="Instagram"
                  width={0}
                  height={0}
                />
              </a>
              <a href="https://github.com/essram" target="_blank">
                <Image
                  className="w-6 h-6"
                  src={Github}
                  alt="GitHub"
                  width={0}
                  height={0}
                />
              </a>
              <a href="https://twitter.com" target="_blank">
                <Image
                  className="w-6 h-6"
                  src={Twitter}
                  alt="Twitter"
                  width={0}
                  height={0}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/rama-esa-vahiba-659614287"
                target="_blank"
              >
                <Image
                  className="w-6 h-6"
                  src={Linkedin}
                  alt="LinkedIn"
                  width={0}
                  height={0}
                />
              </a>
            </div>
          </div>

          <div className="basis-1/2 flex justify-end">
            {/* Foto */}
            <Image
              src={FotoGua}
              alt="anjai"
              width={380}
              height={380}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
