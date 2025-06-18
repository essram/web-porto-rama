import Image from "next/image";
import Link from "next/link";
import { arrayPorto } from "../../data/portofolio";
import Navbar from "../../components/navbar/page";

export default function Portofolio({ searchParams }): {
  searchParams: {
    category?: string;
  };
} {
  const category = searchParams.category;
  const filteredPorto = category
    ? arrayPorto.filter(
        (porto) => porto.category.toLowerCase() === category.toLowerCase()
      )
    : arrayPorto;
  return (
    <div className="bg-gray-950">
      <Navbar />
      <main className="container mx-auto">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-screen">
          <h2 className="text-5xl font-bold tracking-tight text-center text-white">
            My Portofolios
          </h2>
          <div className="mt-4 mb-6 flex justify-center space-x-4">
            <Link
              href="/portofolio"
              className={` hover:text-blue-400 hover:transition-all ${
                !category ? "font-bold text-blue-400" : "text-white"
              }`}
            >
              All
            </Link>
            <Link
              href="/portofolio?category=website"
              className={` hover:text-blue-400 hover:transition-all ${
                category === "website"
                  ? "font-bold text-blue-400"
                  : "text-white"
              }`}
            >
              Website Development
            </Link>
            <Link
              href="/portofolio?category=uiux"
              className={` hover:text-blue-400 hover:transition-all ${
                category === "uiux" ? "font-bold text-blue-400" : "text-white"
              }`}
            >
              UI/UX
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredPorto.map((porto, index) => (
              <div key={index} className="group relative">
                <Link href={`/portofolio/${porto.id}`}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:transition-all group-hover:opacity-75 lg:h-80">
                    <Image
                      alt={porto.name}
                      src={porto.image}
                      width={100}
                      height={100}
                      unoptimized
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-md text-blue-400 font-bold">
                        {porto.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-300">
                        {porto.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
