import { CreditCard } from 'phosphor-react'
import { PaymentMethodContainer } from './style'

export function PaymentMethodInput() {
  return (
    <PaymentMethodContainer>
      <CreditCard size={16} />
      Cartão de crédito
    </PaymentMethodContainer>
  )
}
