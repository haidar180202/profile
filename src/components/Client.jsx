import React from "react";
import { clientsList } from "../data/clientsData";

const Client = () => {
  return (
    <section id="clients" className="bg-slate-800 pt-36 pb-32 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="mx-auto mb-16 text-center max-w-xl">
            <h4 className="mb-2 text-lg font-semibold tracking-wider text-primary uppercase">
              Clients & Ecosystems
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Enterprise Ecosystems
            </h2>
            <p className="text-md font-medium text-slate-300 md:text-lg leading-relaxed">
              Delivering high-reliability software architectures and responsive user interfaces that adapt seamlessly to industry-standard tech stacks and enterprise ecosystems.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            {clientsList.map((client) => (
              <a
                key={client.id}
                href={client.link}
                className="mx-4 max-w-[130px] py-4 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-110 lg:mx-6 xl:mx-8"
              >
                <img src={client.image} alt={client.name} loading="lazy" decoding="async" className="max-h-12 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
