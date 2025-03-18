import { useEffect, useState, RefObject } from "react";
import { MouseParallax } from "react-just-parallax";
import PlusSvg from "../../assets/svg/PlusSvg";

type ParallaxProps = {
  parallaxRef?: RefObject<HTMLDivElement>;
};

export const Gradient: React.FC = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine: React.FC = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

const Rings: React.FC = () => {
  return (
    <>
      {["65.875rem", "51.375rem", "36.125rem", "23.125rem"].map((size, index) => (
        <div
          key={index}
          className={`absolute top-1/2 left-1/2 w-[${size}] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2`}
        />
      ))}
    </>
  );
};

export const BackgroundCircles: React.FC<ParallaxProps> = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings />
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        {[
          { rotate: 46, size: "w-2 h-2", marginTop: "-mt-36" },
          { rotate: -56, size: "w-4 h-4", marginTop: "-mt-32" },
          { rotate: 54, size: "w-4 h-4", marginTop: "mt-[12.9rem]", hidden: "hidden xl:block" },
          { rotate: -65, size: "w-3 h-3", marginTop: "mt-52" },
          { rotate: -85, size: "w-6 h-6", marginTop: "-mt-3" },
          { rotate: 70, size: "w-6 h-6", marginTop: "-mt-3" }
        ].map((ball, index) => (
          <div key={index} className={`absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[${ball.rotate}deg]`}>
            <div
              className={`${ball.size} -ml-1 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${ball.marginTop} ${ball.hidden || ""} ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            />
          </div>
        ))}
      </MouseParallax>
    </div>
  );
};
