import { Breadcrumb } from 'antd'
import Link from 'next/link'
import { BreadScrumbListProps } from './breadscrumbType'

export const BreadcrumbItem: React.FC<BreadScrumbListProps> = ({ items }) => {
	return (
		<Breadcrumb>
			{items.map((item) => (
				<>
					<Breadcrumb.Item key={item.id}>
						<Link href={item.link}>{item.name}</Link>
					</Breadcrumb.Item>
				</>
			))}
		</Breadcrumb>
	)
}
