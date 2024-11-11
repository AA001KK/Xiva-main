//

import React, { useState } from "react";
import editToast from "../toasters/EditToast";
import TooltipButton from "../messages/TooltipButton";

const ProductApproval = ({ product, orderId, onUpdateStatus }) => {
  const [status, setStatus] = useState(product.canceled);
  const [isDisabled, setIsDisabled] = useState(false);
  const [cancelMsg, setCancelMsg] = useState(product.message)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const handleConfirm = async (btnStatus, reason = "") => {
    setIsDisabled(true);
    let object = {};
    if (reason.length) {
      object = {
        cancel: btnStatus,
        message: reason,
      };
      setCancelMsg(reason)

    } else {
      object = {
        cancel: btnStatus,
      };
    }

    const { data, error } = await editToast(
      `orders/order/${orderId}/cancel/${product.item._id}`,
      null,
      null,
      object,
      false, "kkkkk"
    );

    if (!error) {
      setStatus(data.cancel);
    }
    setIsDisabled(false);
    setIsModalOpen(false); // Закрываем модальное окно после отправки
  };

  const openCancelModal = () => setIsModalOpen(true);

  const handleCancel = (e) => {
    e.preventDefault()
    if (cancelReason.trim()) {
      handleConfirm(true, cancelReason);
      setCancelReason(""); // Очищаем причину после отправки
    }
  };


  return (
    <div className="  lg:text-[16px] text-[15px]">
      <div className="mb-2">
      <h1 className="text-grayLight ">
        Xolati:{" "}
        <span className="text-blue font-medium">
          {!status ? "Qabul qilindi" : "Rad etildi"}
        </span>
      </h1>
      {product.type == "hotel" && status ?<TooltipButton  message={cancelMsg}/>
      :"" }
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleConfirm(!status)}
          disabled={isDisabled || !status}
          className={` ${
            !status || isDisabled
              ? "bg-[#B0BEC5] cursor-not-allowed"
              : " bg-green"
          } py-[5px] text-white rounded-[5px] px-[15px]`}
        >
          Qabul qilish
        </button>
        <button
          onClick={() =>
            product.type == "hotel" ? openCancelModal() : handleConfirm(!status)
          }
          className={` ${
            status || isDisabled
              ? "bg-[#B0BEC5] cursor-not-allowed"
              : " bg-red"
          } py-[5px] text-white rounded-[5px] px-[15px]`}
        >
          Rad etish
        </button>
      </div>

      {/* Модальное окно для ввода причины отмены */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form onSubmit={handleCancel}  className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">
              Rad etilish sababini kiriting:
            </h2>
            <textarea
              value={cancelReason}
              required
              onChange={(e) => setCancelReason(e.target.value)}
              placeholder="Izoh kiriting..."
              className="w-full h-48 p-2 border rounded-sm mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="py-2 px-4 bg-gray text-white rounded-md"
              >
                Orqaga
              </button>
              <button
                type="submit"
                className={`py-2 px-4  text-white rounded-md disabled:bg-gray-300  ${
            status || isDisabled
              ? "bg-[#B0BEC5] cursor-not-allowed"
              : " bg-red"
          }`}
              >
                Yuborish
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductApproval;
