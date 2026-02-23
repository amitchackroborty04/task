// import React from "react";
// import { Button } from "../ui/button";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <section>
//       <div className="max-w-7xl mx-auto">
//         <div>
//           <h1 className="text-[223px] font bold uppercase text-center ">
//             Do it <span className="text-[#4A69E2]">right</span>{" "}
//           </h1>
//           <div
//           className=" rounded-[64px]"
//             style={{
//               backgroundImage: `url(${"/hero.jpg"})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//            <div className="flex justify-between pt-[476px] pb-12 pl-12 ">
//              <div className="">

//             <h3 className="text-white text-[74px] font-semibold">NIKE AIR MAX</h3>
//             <p className="text-[rgb(231,231,227)] text-2xl font-semibold w-[490px]">Nike introducing the new air max for everyone's comfort</p>
//             <Button className="bg-[#4A69E2] text-base font-semibold px-5 hover:bg-[#4A69E2]/90 h-[48px] rounded-[8px] hover:scale-95 duration-300 mt-6">Shop now</Button>
//             </div>
//             <div className="pr-12">
//                 <Image src={"/shose.png"} alt="hero" width={1000} height={1000} className="w-[160px] h-[336px]"/>
//             </div>
//            </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div>
          {/* Heading */}
          <h1 className="
            text-center uppercase font-bold
            text-[44px] sm:text-[96px] md:text-[140px] lg:text-[203px] text-nowrap
          ">
            Do it <span className="text-[#4A69E2]">right</span>
          </h1>

          {/* Background Card */}
          <div
            className="rounded-[32px] lg:rounded-[64px]"
            style={{
              backgroundImage: `url(${"/hero.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="
                flex flex-col lg:flex-row
                justify-between
                pt-[220px] sm:pt-[320px] md:pt-[380px] lg:pt-[476px]
                pb-8 lg:pb-12
                px-6 lg:pl-12 lg:pr-12
              "
            >
              {/* Text */}
              <div>
                <h3 className="
                  text-white font-semibold
                  text-[32px] sm:text-[44px] md:text-[56px] lg:text-[74px]
                ">
                  NIKE AIR MAX
                </h3>

                <p className="
                  text-[rgb(231,231,227)] font-semibold
                  text-base sm:text-lg md:text-xl lg:text-2xl
                  max-w-full lg:w-[490px]
                  mt-2
                ">
                  Nike introducing the new air max for everyone's comfort
                </p>

                <Button className="
                  bg-[#4A69E2]
                  text-base font-semibold
                  px-5 h-[48px]
                  rounded-[8px]
                  hover:bg-[#4A69E2]/90
                  hover:scale-95 duration-300
                  mt-6
                ">
                  Shop now
                </Button>
              </div>

              {/* Image */}
              <div className="
                mt-10 lg:mt-0
                flex justify-center lg:justify-end
              ">
                <Image
                  src={"/shose.png"}
                  alt="hero"
                  width={1000}
                  height={1000}
                  className="
                    w-[120px] sm:w-[140px] lg:w-[160px]
                    h-auto lg:h-[336px]
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;