import { AdminLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import Link from 'next/link'

import React from 'react'

const AdminPage: NextPageWithLayout = () => {
	return (
		<>
			<h1>Xin chao ADMIN 😀</h1>
			<p>Dashboard Page</p>
		</>
	)
}

AdminPage.Layout = AdminLayout
export default AdminPage
