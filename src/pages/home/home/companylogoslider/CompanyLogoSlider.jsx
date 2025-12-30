const logos = [
  "/logos/../../../src/assets/Image/brands/amazon.png",
  "/logos/../../../src/assets/Image/brands/amazon_vector.png",
  "/logos/../../../src/assets/Image/brands//casio.png",
  "/logos/../../../src/assets/Image/brands/moonstar.png",
  "/logos/../../../src/assets/Image/brands/randstad.png",
  "/logos/../../../src/assets/Image/brands/star.png",
  "/logos/../../../src/assets/Image/brands/start_people.png",
  
];

const CompanyLogoSlider = () => {



    
  return (
    <section className="py-20 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          Trusted by Leading Companies
        </h2>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-14 h-10 animate-logo-slider">
            {/* duplicate for infinite effect */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[160px]"
              >
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-12 object-contain transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogoSlider;
