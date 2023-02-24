import { Spin } from 'antd'

export const Loading = () => {
	return (
		<div className="fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-[#f2f2f2] z-50">
			<div className="flex justify-center items-center h-screen">
				<Spin tip="Loading" size="large" />
			</div>
		</div>
	)
}
