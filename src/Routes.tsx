import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'

import { HomePage } from './pages/home'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { OrderConfirmed } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/orderConfirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}
