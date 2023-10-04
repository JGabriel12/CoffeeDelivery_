import { Input } from '../../../../components/Input'
import { AddressFormContainer } from './style'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input placeholder="CEP" className="cep" type="number" />
      <Input placeholder="Rua" className="street" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </AddressFormContainer>
  )
}
