import React from "react";
import tracking from "../../../../assets/Image/tracking/live-tracking.png";
import tracking2 from "../../../../assets/Image/tracking/safe-delivery.png";
import tracking3 from "../../../../assets/Image/tracking/location-merchant.png";


const features = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant updates.",
    image:tracking,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely. Our reliable process guarantees damage-free delivery every time.",
    image: tracking2,
  },
  {
    id: 3,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available round the clock to assist you with any queries or concerns.",
    image: tracking3,
  },
];

const ThreeColumnFeatures = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {features.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-base-200 p-8 rounded-xl"
            >
              {/* Left Image */}
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 object-contain"
                />
              </div>

              {/* Middle dashed line */}
              <div className="hidden md:flex justify-center">
                <div className="h-24 border-l-2 border-dashed border-gray-400"></div>
              </div>

              {/* Right Content */}
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnFeatures;
