import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import React from 'react'

type Props = {}

const CheckoutPage: NextPageWithLayout = (props: Props) => {
	return <div>CheckoutPage</div>
}

CheckoutPage.Layout = MainLayout
export default CheckoutPage
