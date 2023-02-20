import { RoutListProps } from '@/components/header/models'
import { ROUTE_LIST } from '@/utils/data/route'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
type Props = {}

export const Header = (props: Props) => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<h3 className="underline">remove styling with module.css replace by tailwincss</h3>
					<h1 className={styles.logo}>Exchange SGU</h1>
					<div className={styles.right}>
						<div className={styles.menu}>
							<Menu routes={ROUTE_LIST}></Menu>
						</div>
						<div className={styles.search}></div>
					</div>
				</div>
			</header>
		</>
	)
}

const Menu: React.FC<RoutListProps> = ({ routes }) => {
	return (
		<>
			<ul style={{ listStyle: 'none' }}>
				{routes.map((router) => (
					<li key={router.id}>
						<Link href={router.path} className={styles.link}>
							{router.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
