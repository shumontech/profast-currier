import React from "react";
import illustration from "../../../../assets/Image/tracking/location-merchant.png";

const MerchantCustomerSection = () => {
  return (
    <section className="py-20 bg-base-100 m-0">
      <div className="container mx-auto px-4">
        {/* Main Card */}
        <div
          className="
            relative overflow-hidden
            bg-[#09383b]
            rounded-3xl
            p-10 md:p-14
            grid grid-cols-1 md:grid-cols-2
            items-center
            gap-10  
          "
        >
          {/* TOP GLOW / WAVE GRADIENT */}
          <div
            className="
              absolute -top-20 -right-20
              w-[500px] h-[500px]
              bg-gradient-to-br
              from-[#7fd9db]/40
              via-[#4faeb1]/20
              to-transparent
              rounded-full
              blur-3xl
            "
          ></div>

          {/* LEFT CONTENT */}
          <div className="relative z-10 text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-snug">
              Merchant and Customer Satisfaction <br />
              is Our First Priority
            </h2>

            <p className="text-white/80 mb-8 max-w-lg">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Profast Courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>

            {/* Buttons */}
            <div className="flex gap-5 flex-wrap">
              <button className="px-6 py-3 rounded-full bg-[#cae975] text-[#09383b] font-semibold hover:bg-[#b7d95c] transition">
                Become a Merchant
              </button>

              <button className="px-6 py-3 rounded-full border border-[#cae975] text-[#cae975] hover:bg-[#cae975] hover:text-[#09383b] transition font-semibold">
                Earn with Profast Courier
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative z-10 flex justify-center md:justify-end">
            <img
              src={illustration}
              alt="Merchant Illustration"
              className="max-h-[260px] object-contain opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantCustomerSection;
