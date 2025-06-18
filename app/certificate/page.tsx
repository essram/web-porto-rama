"use client";
import Navbar from "@/components/navbar/page";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io"; 
import { arrayCertificate } from "../../data/certificate";

interface PageProps {
  searchParams: {
    category?: string
  }
}

export default function CertificatesPage({ searchParams }: PageProps) {
  const category = searchParams.category;
  const filteredPorto = category
    ? arrayCertificate.filter((porto) => porto.category.toLowerCase() === category.toLowerCase())
    : arrayCertificate;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (img: string) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };


  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <main className="px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48">
        <h2 className="text-5xl font-bold tracking-tight text-center text-white mb-10 pt-16 sm:pt-24">
          My Certificates
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 pb-16 sm:pb-24">
          {filteredPorto.map((porto, index) => (
            <div key={index} className="group relative">
              <div
                className="w-full overflow-hidden rounded-md bg-gray-200 hover:transition-all group-hover:opacity-75 hover:scale-110 cursor-pointer"
                onClick={() => openModal(porto.image)}
              >
                <Image
                  alt={porto.name}
                  src={porto.image}
                  width={500}
                  height={300}
                  unoptimized
                  className="object-cover object-center w-full h-[200px] rounded-md"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md text-blue-400 font-bold">{porto.name}</h3>
                  <p className="mt-1 text-sm text-gray-300">{porto.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="relative max-w-3xl w-full p-4">
              <button
                onClick={closeModal}
                className="absolute top-4 left-4 text-white text-2xl bg-gray-700 rounded-full p-2 hover:bg-gray-600"
              >
                <IoIosArrowBack />
              </button>
              <Image
                src={selectedImage}
                alt="Full View"
                width={800}
                height={500}
                unoptimized
                className="rounded-lg mx-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
