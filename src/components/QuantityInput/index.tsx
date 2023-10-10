import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityContainer } from './style'

interface QuantityInputProps {
  size?: 'medium' | 'small'
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium'
}: QuantityInputProps) {
  return (
    <QuantityContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityContainer>
  )
}
