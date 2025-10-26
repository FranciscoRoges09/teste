export interface PixData {
  code: string
  qrcode_base64: string
}

export interface BuyerData {
  name: string
  email: string
  document?: string
}

export interface TransactionResponse {
  data: {
    id: string
    external_id: string
    status: string
    amount: number
    payment_method: string
    pix?: PixData
    buyer: BuyerData
    created_at: string
  }
}

export interface PaymentCheckResponse {
  data: {
    id: string
    external_id: string
    status: string
    amount: number
    payment_method: string
  }
}
