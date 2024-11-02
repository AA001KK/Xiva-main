import React, { useState } from 'react';

const ProductApprovalCheckbox = ({ product, onUpdateStatus }) => {
  const [status, setStatus] = useState(product.status);
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [rejectChecked, setRejectChecked] = useState(false);

  const handleConfirm = () => {
    setConfirmChecked(true);
    setRejectChecked(false);
    setStatus('confirmed');
    onUpdateStatus(product.type, 'confirmed');
  };

  const handleReject = () => {
    setRejectChecked(true);
    setConfirmChecked(false);
    setStatus('rejected');
    onUpdateStatus(product.type, 'rejected');
  };

  return (
    <div>
      <p>{product.name} ({product.type})</p>
      <p>Статус: {status}</p>
      <label>
        <input
          type="checkbox"
          checked={confirmChecked}
          onChange={handleConfirm}
          disabled={status !== 'pending'}
        />
        Подтвердить
      </label>
      <label style={{ marginLeft: '20px' }}>
        <input
          type="checkbox"
          checked={rejectChecked}
          onChange={handleReject}
          disabled={status !== 'pending'}
        />
        Отклонить
      </label>
    </div>
  );
};

export default ProductApprovalCheckbox;
