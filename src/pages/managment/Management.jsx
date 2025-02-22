import React, { useEffect, useState } from "react";
import bgimg from "../../assets/image3.jpeg";
import axios from "axios";

export default function Management() {
  const [shippingData, setShippingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  useEffect(() => {
    async function fetchShippingData() {
      try {
        let { data } = await axios.get(
          "http://127.0.0.1:3000/api/v1/shipping/u/user",
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (data.status === "success") {
          setShippingData(data.data);
        } else {
          setError("Failed to fetch shipping data.");
        }
      } catch (e) {
        setError("Error fetching data.");
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    fetchShippingData();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(shippingData.length / itemsPerPage);

  // Slice data for current page
  const currentData = shippingData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <img
        src={bgimg}
        alt=""
        className="w-full h-screen -z-20 absolute top-0 object-cover"
      />
      <div className="bg-black w-full h-screen -z-10 absolute opacity-60 top-0" />
      <div className="h-28 w-full bg-gradient-to-b from-transparent to-[#0054A6]" />
      <div className="relative bg-[#0054A6]">
        <div className="pt-6" />
        <div className="mx-8 pt-20 bg-white rounded-xl relative overflow-hidden p-6">
          <h2 className="text-2xl font-bold text-center text-[#0054A6] mb-6">
            إدارة الشحنات
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">جاري التحميل...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">رقم التتبع</th>
                    <th className="border border-gray-300 p-2">اسم المستلم</th>
                    <th className="border border-gray-300 p-2">العنوان</th>
                    <th className="border border-gray-300 p-2">الهاتف</th>
                    <th className="border border-gray-300 p-2">الوزن (كجم)</th>
                    <th className="border border-gray-300 p-2">الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.length > 0 ? (
                    currentData.map((shipment) => (
                      <tr key={shipment._id} className="text-center">
                        <td className="border border-gray-300 p-2">
                          {shipment.trackingNumber}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {shipment.receiverName}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {shipment.receiverAddress}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {shipment.receiverPhone}
                        </td>
                        <td className="border border-gray-300 p-2">
                          {shipment.weight.toFixed(1)}
                        </td>
                        <td className="border border-gray-300 p-2">
                          <span
                            className={`px-2 py-1 rounded-md text-white ${
                              shipment.status === "delivered"
                                ? "bg-green-500"
                                : shipment.status === "pending"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            }`}
                          >
                            {shipment.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center p-4 text-gray-500">
                        لا توجد شحنات متاحة
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination Controls */}
              <div className="flex justify-center items-center gap-4 mt-4">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === 1
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  السابق
                </button>

                <span className="text-lg font-semibold">
                  {currentPage} / {totalPages}
                </span>

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === totalPages
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  التالي
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
