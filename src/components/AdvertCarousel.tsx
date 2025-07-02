import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import AdvertCard from "./AdvertCard";
import type { Advert } from "../commons/Advert";

export function AdvertCarousel() {
    const[adverts, setAdverts] = useState<Advert[]>([]);

    useEffect(() => {
      fetch("/api/adverts")
      .then((res) => {
        if(!res.ok) {
            throw new Error("Network response was not ok")
        }
        return res.json();
      })
      .then((data)=> setAdverts(data));
    }, []);

    if (!adverts.length) return <div className="text-red-500">Error loading adverts.</div>;

return (
    <Carousel className="rounded-xl">
     {adverts.map((advert) => (
         <div key={advert.id}>
         <AdvertCard data={advert} />
         </div>
        
     ))}
    </Carousel>
)
}