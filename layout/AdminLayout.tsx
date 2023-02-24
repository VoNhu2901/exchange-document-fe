import { Seo } from '@/components'
import { Auth } from '@/components/common'
import { useAuth } from '@/hooks'
import { LayoutProps } from '@/models'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface IAdminLayoutProps {}

export function AdminLayout({ children }: LayoutProps) {
	const router = useRouter()
	const { profile, logout } = useAuth({ revalidateOnMount: false })

	async function handleLogoutClick() {
		try {
			await logout()
			console.log('Redirect to login page')
			router.push('/login')
		} catch (error) {
			console.log('Logout error: ' + error)
		}
	}

	return (
		<Auth>
			<Seo
				title="Admin - Quản trị viên"
				description="Website dành cho sinh viên trường Đại học Sài Gòn trao đổi hoặc mua bán tài liệu học tập"
<<<<<<< HEAD
				url="https://exchange-document-fe.vercel.app/"
=======
				url="exchange-document-fe.vercel.app"
>>>>>>> e16bf181751310bf528b891f4f04ce7f5ec8ea7d
				thumbnailUrl="https://drive.google.com/file/d/1Atx_f0i5laHbjXQeqtBj-TfbyODPtjI5/view"
			/>
			<h1>Admin Layout</h1>
			<p>Profile: {JSON.stringify(profile)}</p>
			<div>sidebar</div>
			<button onClick={handleLogoutClick}>Logout</button>
			<ul>
				<li>
					<Link href="/admin">Dashboard</Link>
				</li>
				<li>
					<Link href="/admin/account">Account</Link>
				</li>
				<li>
					<Link href="/admin/slider">Slider</Link>
				</li>
				<li>
					<Link href="/admin/post">Post</Link>
				</li>
				<li>
					<Link href="/admin/bill">Bill</Link>
				</li>
			</ul>

			<body className="mx-32">{children}</body>
		</Auth>
	)
}
