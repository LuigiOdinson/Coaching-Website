import React from 'react'
import formatCurrency from '../../helpers/formatCurrency'

export default function BookingSummary({selectedOption, selectedSlots}) {
  const pricePerSession = selectedOption?.pricePerSession || 0;
  const totalPrice = selectedSlots.length * pricePerSession;

  return (
    <div className="booking-summary">
      <div className="booking-summary-content">
        <div>تعداد کل جلسات: <span>{selectedSlots.length}</span></div>
        <div>مبلغ کل: <span>{formatCurrency(totalPrice, false)}</span></div>
      </div>

      <button 
      className="button reserve-booking-button"
      disabled={selectedSlots.length === 0 || selectedOption === null}>
        رزرو جلسات
      </button>
    </div>
  )
}
