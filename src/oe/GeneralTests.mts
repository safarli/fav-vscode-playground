type OrderStatus = 'ORDER_RECEIVED' | 'PREPARING' | 'READY_FOR_SHIPPING' | 'SHIPPED';
type PaymentType = 'CASH' | 'CASHLESS'

export const doAction = (o_status: OrderStatus) =>
	o_status === 'ORDER_RECEIVED' ? 'order received' :
		o_status === 'PREPARING' ? 'order preparing' :
			o_status === 'READY_FOR_SHIPPING' ? 'ready for shipping' :
				o_status === 'SHIPPED' ? 'shipped' : null


export const isRefundPossible = (o_status: OrderStatus, payment: PaymentType) =>
	o_status === 'ORDER_RECEIVED' && payment === 'CASH' ? 'CANNOT REFUND' : null