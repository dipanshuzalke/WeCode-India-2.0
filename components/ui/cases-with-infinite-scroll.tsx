"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from 'next/image';

// Project type definition
export type Project = {
  id: string;
  title: string;
  summary: string;
};

export type CaseProps = {
  projects: Project[];
};

const demoImages = [
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
];

function Case({ projects }: CaseProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const timeout = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, [api, current]);

  return (
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-xl  md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Featured Web Development Projects
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="gap-x-12">
              {projects.map((project, index) => {
                const imageUrl = demoImages[index % demoImages.length];
                return (
                  <CarouselItem className="basis-1/4 lg:basis-1/6" key={project.id}>
                    <div className="relative shadow-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-6 h-70 w-60 overflow-hidden rounded-2xl flex flex-col justify-between items-center mx-auto gap-2">
                      <div className="w-full flex flex-col items-center gap-2">
                        <Image
                          src={imageUrl}
                          alt={project.title}
                          width={400}
                          height={112}
                          className="rounded-lg object-cover w-full h-28"
                          unoptimized
                        />
                        <h1 className="font-bold text-lg text-gray-900 dark:text-white mt-2 mb-1 text-center line-clamp-2">
                          {project.title}
                        </h1>
                        <p className="font-normal text-sm text-gray-600 dark:text-slate-400 mb-2 text-center line-clamp-2">
                          {project.summary}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };