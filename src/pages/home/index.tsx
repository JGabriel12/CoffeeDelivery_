import { OurCoffees } from './components/OurCoffees'
import { Intro } from './components/intro'
import { HomeContainer } from './style'

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}
