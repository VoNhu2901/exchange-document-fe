import { useAuth } from '@/hooks'
import { AdminLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'
import React from 'react'

type Props = {}

const PostAdminPage: NextPageWithLayout = (props: Props) => {
	const { profile } = useAuth()
	return <div>PostAdminPage: {JSON.stringify(profile)}</div>
}

PostAdminPage.Layout = AdminLayout
export default PostAdminPage
