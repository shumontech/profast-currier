import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import UseAuth from '../../../../../hooks/UseAuth';
import UseAxiosSecure from '../../../../../hooks/UseAxiosSecure';

const MyParcels = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const {
    data: parcels = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['my-parcels', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels?email=${user.email}`
      );
      return res.data;
    },
  });

  // ✅ DELETE HANDLER
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This parcel will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(
          `/parcels/${id}`
        );

        if (res.data.deletedCount > 0) {
          Swal.fire(
            'Deleted!',
            'Parcel has been deleted successfully.',
            'success'
          );
          refetch(); // 🔥 table auto update
        }
      }
    });
  };

  if (isLoading) {
    return (
      <span className="loading loading-spinner loading-lg"></span>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Created</th>
            <th>Cost</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {parcels.map((parcel, index) => (
            <tr key={parcel._id}>
              <th>{index + 1}</th>

              <td>{parcel.title}</td>
              <td className="capitalize">
                {parcel.parcelType}
              </td>

              <td>
                <p className="font-semibold">
                  {parcel.senderName}
                </p>
                <p className="text-sm text-gray-500">
                  {parcel.senderContact}
                </p>
              </td>

              <td>
                <p className="font-semibold">
                  {parcel.receiverName}
                </p>
                <p className="text-sm text-gray-500">
                  {parcel.receiverContact}
                </p>
              </td>

              {/* Created Date */}
              <td className="text-sm">
                {parcel.createdAt
                  ? new Date(
                      parcel.createdAt
                    ).toLocaleDateString()
                  : 'N/A'}
              </td>

              {/* Cost */}
              <td className="font-semibold">
                ৳ {parcel.cost || 0}
              </td>

              {/* Payment */}
              <td>
                {parcel.paymentStatus === 'paid' ? (
                  <span className="badge badge-success">
                    Paid
                  </span>
                ) : (
                  <span className="badge badge-error">
                    Unpaid
                  </span>
                )}
              </td>

              {/* Actions */}
              <td>
                <div className="flex gap-2">
                  <button className="btn btn-xs btn-info">
                    View
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(parcel._id)
                    }
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>

                  <button className="btn btn-xs btn-warning">
                    Hide
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyParcels;
