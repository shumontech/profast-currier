import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";


const regions = ["Dhaka", "Chattogram", "Khulna", "Rajshahi", "Sylhet"];

const serviceCenters = {
  Dhaka: ["Uttara", "Mirpur", "Dhanmondi"],
  Chattogram: ["Agrabad", "Pahartali"],
  Khulna: ["Sonadanga", "Khalishpur"],
  Rajshahi: ["Boalia", "Motihar"],
  Sylhet: ["Zindabazar", "Ambarkhana"],
};

const ParcelForm = () => {
  const { register, handleSubmit, watch } = useForm();

  const axiosSecure = UseAxiosSecure();

  const parcelType = watch("parcelType");
  const weight = watch("weight");
  const senderSC = watch("senderServiceCenter");
  const receiverSC = watch("receiverServiceCenter");
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");

  // 💰 COST CALCULATION
  const base = parcelType === "document" ? 60 : parcelType ? 100 : 0;
  const weightCharge = weight ? weight * 20 : 0;
  const locationCharge =
    senderSC && receiverSC && senderSC !== receiverSC ? 40 : 0;
  const total = base + weightCharge + locationCharge;

  const onSubmit = (data) => {
    Swal.fire({
      title: "Confirm Parcel",
      html: `<strong>Total Delivery Cost: ৳${total}</strong>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post('/parcels', data)
          .then(res => {
            console.log(res.data);
            Swal.fire("Success!", "Parcel submitted successfully", "success");
            console.log("Submitted Data:", data);
          })

      }
    });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-black">Send Your Parcel</h2>
        <p className="text-blue-400 mt-1">
          Fill the details below to proceed
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

        {/* PARCEL INFO */}
        <div className="border rounded-lg p-6 bg-base-200">
          <h3 className="text-lg font-medium mb-4">Parcel Info</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              className="select select-bordered"
              {...register("parcelType", { required: true })}
            >
              <option value="">Select Type</option>
              <option value="document">Document</option>
              <option value="non-document">Non Document</option>
            </select>

            <input
              className="input input-bordered"
              placeholder="Title"
              {...register("title", { required: true })}
            />

            {parcelType === "non-document" && (
              <input
                type="number"
                className="input input-bordered md:col-span-2"
                placeholder="Weight (kg)"
                {...register("weight")}
              />
            )}
          </div>
        </div>

        {/* SENDER INFO */}
        <div className="border rounded-lg p-6 bg-base-200">
          <h3 className="text-lg font-medium mb-4">Sender Info</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="input input-bordered"
              defaultValue="Arif Shumon"
              {...register("senderName", { required: true })}
            />

            <input
              className="input input-bordered"
              placeholder="Contact Number"
              {...register("senderContact", { required: true })}
            />

            <select
              className="select select-bordered"
              {...register("senderRegion", { required: true })}
            >
              <option value="">Select Region</option>
              {regions.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>

            <select
              className="select select-bordered"
              {...register("senderServiceCenter", { required: true })}
            >
              <option value="">Select Service Center</option>
              {serviceCenters[senderRegion]?.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* RECEIVER INFO */}
        <div className="border rounded-lg p-6 bg-base-200">
          <h3 className="text-lg font-medium mb-4">Receiver Info</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="input input-bordered"
              placeholder="Receiver Name"
              {...register("receiverName", { required: true })}
            />

            <input
              className="input input-bordered"
              placeholder="Contact Number"
              {...register("receiverContact", { required: true })}
            />

            <select
              className="select select-bordered"
              {...register("receiverRegion", { required: true })}
            >
              <option value="">Select Region</option>
              {regions.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>

            <select
              className="select select-bordered"
              {...register("receiverServiceCenter", { required: true })}
            >
              <option value="">Select Service Center</option>
              {serviceCenters[receiverRegion]?.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 💰 DELIVERY COST BREAKDOWN */}
        {total > 0 && (
          <div className="border rounded-lg p-6 bg-base-100">
            <h3 className="text-lg font-semibold mb-3">
              Delivery Cost Breakdown
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Base Charge</span>
                <span>৳{base}</span>
              </li>

              {weightCharge > 0 && (
                <li className="flex justify-between">
                  <span>Weight Charge</span>
                  <span>৳{weightCharge}</span>
                </li>
              )}

              {locationCharge > 0 && (
                <li className="flex justify-between">
                  <span>Service Center Charge</span>
                  <span>৳{locationCharge}</span>
                </li>
              )}

              <li className="flex justify-between font-bold border-t pt-2">
                <span>Total</span>
                <span>৳{total}</span>
              </li>
            </ul>
          </div>
        )}

        <div className="text-center">
          <button className="btn btn-primary px-12">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ParcelForm;
