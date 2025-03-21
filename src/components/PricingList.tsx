import { check } from "../assets/indext";
import { pricing } from "../constants";
import Button from "./Button";
import "../index.css";

interface PricingItem {
  id: number; 
  title: string;
  description: string;
  price?: number;
  features: string[];
}

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => {
        const parsedItem: PricingItem = {
          ...item,
          id: Number(item.id), 
          price: item.price ? Number(item.price) : undefined, 
        };

        return (
          <div
            key={parsedItem.id}
            className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4"
          >
            <h4 className="h4 mb-4">{parsedItem.title}</h4>
            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {parsedItem.description}
            </p>
            <div className="flex items-center h-[5.5rem] mb-6">
              {parsedItem.price !== undefined && (
                <>
                  <div className="h3">$</div>
                  <div className="text-[5.5rem] leading-none font-bold">
                    {parsedItem.price}
                  </div>
                </>
              )}
            </div>
            <Button
              className="w-full mb-6"
              href={
                parsedItem.price ? "/pricing" : "mailto:contact@jsmastery.pro"
              }
              white={!!parsedItem.price}
            >
              {parsedItem.price ? "Get started" : "Contact us"}
            </Button>
            <ul>
              {parsedItem.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default PricingList;
