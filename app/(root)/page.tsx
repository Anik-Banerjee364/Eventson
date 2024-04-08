import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-yellow-50 bg-dotted-pattern bg-contain-py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
        <h1 className="h1-bold">
          Create, Manage, Celebrate your Events!
        </h1>
        <p className="p-regular-20 md:p-regular-24">
          You can create various events of the college and manage efficiently!
        </p>
        <Button size="lg" asChild className="button w-full md:w-fit">
          <Link href="#events">
            Explore Now
          </Link>
        </Button>
        </div>
        <Image src="/assets/images/iiest.png" alt='Hero-image' width={1000} height={1000} className="max-h-[70vh]
        object-contain object-center 2xl:max-h-[50vh]
        
        "/>
        </div>
      </section>
    </>
  );
}
