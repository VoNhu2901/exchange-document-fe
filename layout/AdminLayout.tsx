import { Seo } from '@/components'
import { useAuth } from '@/hooks'
import { LayoutProps } from '@/models'
import {
	DashboardOutlined,
	DownOutlined,
	FileDoneOutlined,
	FormOutlined,
	AppstoreAddOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PieChartOutlined,
	SmileOutlined,
	TeamOutlined,
} from '@ant-design/icons'
import { Button, Dropdown, Layout, Menu, MenuProps, Space, Typography, message, theme } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { Auth } from '@/components/common'
import styles from '../styles/Layout.module.css'

const { Header, Content, Footer, Sider } = Layout
type MenuItem = Required<MenuProps>['items'][number]

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem
}

export const AdminLayout = ({ children }: LayoutProps): React.ReactElement => {
	const router = useRouter()
	const { profile, logout } = useAuth({ revalidateOnMount: false })
	// STATE OF ANTD
	const [isSending, setIsSending] = useState<boolean>(false)
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer },
	} = theme.useToken()
	// STATR CUSTOM
	type CurrentItem = {
		index: number
		key: string
	}
	const [currentMenuItem, setCurrentMenuItem] = useState<CurrentItem>({
		index: 0,
		key: '',
	})
	// MENU LIST
	const itemsMenu: MenuItem[] = [
		getItem(
			'Dashboard',
			'/admin',
			<Link href="/admin" passHref>
				<DashboardOutlined />
			</Link>
		),
		getItem(
			'Quản lý bài đăng',
			'/admin/post',
			<Link href="/admin/post" passHref>
				<FormOutlined />
			</Link>
		),
		getItem(
			'Quản lý danh mục',
			'/admin/category',
			<Link href="/admin/category" passHref>
				<AppstoreAddOutlined />
			</Link>
		),
		getItem(
			'Quản lý thành viên',
			'/admin/member',
			<Link href="/admin/member" passHref>
				<TeamOutlined />
			</Link>
		),
		getItem(
			'Xem hóa đơn',
			'/admin/bill',
			<Link href="/admin/bill" passHref>
				<FileDoneOutlined />
			</Link>
		),
		getItem(
			'Thống kê',
			'/admin/analytic',
			<Link href="/admin/analytic" passHref>
				<PieChartOutlined />
			</Link>
		),
	]
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<Button
					disabled={isSending}
					onClick={handleLogoutClick}
					style={{ width: '100%', border: 'none' }}
				>
					<SmileOutlined />
					Logout
				</Button>
			),
		},
	]
	// USEEFFECT
	useEffect(() => {
		if (window.innerWidth < 992) setCollapsed(true)
		else setCollapsed(false)
	}, [])

	useEffect(() => {
		for (let i = 0; i < itemsMenu.length; i++) {
			if (itemsMenu[i]?.key === router.asPath) {
				setCurrentMenuItem({
					index: i,
					key: `${itemsMenu[i]?.key}`,
				})
				return
			}
		}
	}, [router.asPath])
	// HANDLE EVENT
	async function handleLogoutClick() {
		try {
			await logout()
			setIsSending(true)
			logout()
			message.success({
				content: 'Logout successfully',
				duration: 3,
			})
			setIsSending(false)
			console.log('Redirect to login page')
			// router.push('/login')
		} catch (error) {
			console.log('Logout error: ' + error)
		}
	}

	return (
		<>
			<Seo
				title="Admin - Quản trị viên"
				description="Website dành cho sinh viên trường Đại học Sài Gòn trao đổi hoặc mua bán tài liệu học tập"
				url="https://exchange-document-fe.vercel.app"
				thumbnailUrl="https://drive.google.com/file/d/1Atx_f0i5laHbjXQeqtBj-TfbyODPtjI5/view"
			/>
			<Layout style={{ minHeight: '100vh' }}>
				<Sider
					trigger={null}
					collapsible
					collapsed={collapsed}
					breakpoint="lg"
					width="230"
					onBreakpoint={(broken: boolean): void => {
						if (broken) setCollapsed(true)
						else setCollapsed(false)
					}}
					style={{ minHeight: '100vh', overflowY: 'auto' }}
				>
					<Typography.Title
						level={5}
						style={{
							height: '32px',
							margin: '16px',
							backgroundColor: 'rgba(255, 255, 255, 0.3)',
							color: '#fff',
							fontSize: '14px',
							textAlign: 'center',
							lineHeight: '32px',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
						}}
					>
						Management
					</Typography.Title>
					<Menu
						theme="dark"
						mode="inline"
						selectedKeys={[`${currentMenuItem.key}`]}
						defaultSelectedKeys={[`${currentMenuItem.key}`]}
						items={itemsMenu}
					/>
				</Sider>
				<Layout>
					<Header
						style={{
							padding: '0 16px 0 0',
							background: colorBgContainer,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: styles['trigger'],
							onClick: () => setCollapsed(!collapsed),
						})}
						<Dropdown menu={{ items }}>
							<a onClick={(e) => e.preventDefault()}>
								<Space>
									Welcome to system
									<DownOutlined />
								</Space>
							</a>
						</Dropdown>
					</Header>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
							background: colorBgContainer,
						}}
					>
						<Auth>
							<div>{children}</div>
						</Auth>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Copyright &#169; {new Date().getFullYear()}. Powered by Vo Nhu and Minh Thuan. All right
						reserved.
					</Footer>
				</Layout>
			</Layout>
		</>
	)
}
