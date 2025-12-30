import {
    FaTruckFast,
    FaLocationDot,
    FaBoxOpen,
    FaWarehouse,
    FaHeadset,
    FaShieldHalved,
} from "react-icons/fa6";

const services = [
    {
        id: 1,
        title: "Express and Standard Delivery",
        description:
            "Quick and reliable delivery service ensuring your parcels arrive on time.",
        icon: FaTruckFast,
    },
    {
        id: 2,
        title: "Nationwide Delivery",
        description:
            "Track your shipment live with real-time location updates.",
        icon: FaLocationDot,
    },
    {
        id: 3,
        title: "Fullfillment & Solution",
        description:
            "We ensure safe and secure packaging for all types of shipments.",
        icon: FaBoxOpen,
    },
    {
        id: 4,
        title: "Cash on Home Delivery",
        description:
            "Modern storage solutions for short and long-term needs.",
        icon: FaWarehouse,
    },
    {
        id: 5,
        title: "Corporate Service/ Contract in Logistics",
        description:
            "Our support team is always ready to help you anytime.",
        icon: FaHeadset,
    },
    {
        id: 6,
        title: "Parcel Return",
        description:
            "Fully insured and trusted courier service for peace of mind.",
        icon: FaShieldHalved,
    },
];

const OurServices = () => {
    return (
        <section className="py-20 bg-base-200">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-500">
                        Enjoy fast reliable courier service with us with real time tracking
                        with zero hassle. From personal package to huge shipment. We deliver
                        on time, Every time.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300"
                            >
                                {/* <div className="card-body text-center items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-2xl text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {service.description}
                  </p>
                </div> */}
                                <div
                                    key={service.id}
                                    className="card bg-base-100 shadow-md 
             hover:bg-[rgb(227,244,173)] 
             hover:shadow-xl 
             transition duration-300 group"
                                >
                                    <div className="card-body text-center items-center">
                                        <div className="w-14 h-14 rounded-full bg-primary/10 
                    flex items-center justify-center mb-4
                    group-hover:bg-white transition">
                                            <Icon className="text-2xl text-primary" />
                                        </div>

                                        <h3 className="text-xl font-semibold mb-2">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-500 text-sm">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>




                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
