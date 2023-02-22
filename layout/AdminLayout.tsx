import { LayoutProps } from '@/models'
import Link from 'next/link'

export interface IAdminLayoutProps {}

export function AdminLayout({ children }: LayoutProps) {
	return (
		<>
			<h1>Admin Layout</h1>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About Us</Link>
				</li>
				<li>
					<Link href="/blog/hello-world">Blog Post</Link>
				</li>
			</ul>

			<body className="mx-32">{children}</body>
		</>
	)
}
