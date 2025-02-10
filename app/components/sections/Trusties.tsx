import Image from "next/image";

function Trusties() {
  const images = [
    "image209.png", "image187.png", "image210.png", "image214.png",
    "image215.png", "image218.png", "image219.png", "image227.png",
    "image233.png", "realms.png", "gib.png", "image63.png",
    "image182.png", "image188.png", "image207.png", "image208.png",
    "image212.png", "image213.png", "image217.png", "image222.png",
    "image223.png", "image225.png", "image226.png", "image230.png",
    "image211.png", "image216.png", "image220.png", "image231.png",
    "image234.png", "image228.png", "image232.png", "image224.png",
    "image229.png"
  ];

  return (
    <div className="w-screen h-40 flex justify-center items-center text-white pt-20 md:mt-0 mt-[35px]">
      <div className="w-screen md:w-[1300px] flex flex-col items-center pt-12 overflow-hidden">
        <h6 className="text-white text-sm font-semibold mb-4">
          We&apos;ve been trusted by <em className="font-light font-editorial-new">founders</em> from
        </h6>
        <div className="w-full scroller">
          <div className="relative w-max h-64 pt-4">
            <div className="flex scroller__inner">
              {images.map((src, index) => (
                <Image
                  key={index}
                  src={`/${src}`} 
                  alt={`Trusted company ${index + 1}`}
                  className="w-12 h-12 flex-shrink-0 object-cover mr-4"
                  width={48} height={48}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusties;
