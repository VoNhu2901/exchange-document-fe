import { ChatRoom } from '@/components'
import { MainLayout } from '@/layout'
import { NextPageWithLayout } from '@/models'

type Props = {}

const ChatPage: NextPageWithLayout = (props: Props) => {
	return (
		<>
			<ChatRoom />
		</>
	)
}

ChatPage.Layout = MainLayout
export default ChatPage
