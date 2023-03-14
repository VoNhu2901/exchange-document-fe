import React, { useEffect, useState } from 'react'
import { over } from 'stompjs'
import SockJS from 'sockjs-client'

type Props = {}

var stompClient: any = null
export const ChatRoom = (props: Props) => {
	// let stompClient: any = null
	const [publicChats, setPublicChats] = useState<any>([])
	const [privateChats, setPrivateChats] = useState<any>(new Map())
	const [tab, setTab] = useState('CHATROOM')
	const [userData, setUserData] = useState({
		username: '',
		receivername: '',
		connected: false,
		message: '',
	})

	useEffect(() => {
		console.log(userData)
	}, [userData])

	const connect = () => {
		let Sock = new SockJS('http://localhost:8080/ws')
		stompClient = over(Sock)
		stompClient.connect({}, onConnected, onError)
	}

	const onConnected = () => {
		setUserData({ ...userData, connected: true })
		stompClient.subscribe('/chatroom/public', onMessageReceived)
		stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessage)
		userJoin()
	}

	const userJoin = () => {
		var chatMessage = {
			senderName: userData.username,
			status: 'JOIN',
		}
		stompClient.send('/app/message', {}, JSON.stringify(chatMessage))
	}

	const onMessageReceived = (payload: any) => {
		var payloadData = JSON.parse(payload.body)
		switch (payloadData.status) {
			case 'JOIN':
				if (!privateChats.get(payloadData.senderName)) {
					privateChats.set(payloadData.senderName, [])
					setPrivateChats(new Map(privateChats))
				}
				break
			case 'MESSAGE':
				publicChats.push(payloadData)
				setPublicChats([...publicChats])
				break
		}
	}

	const onPrivateMessage = (payload: any) => {
		console.log(payload)
		var payloadData = JSON.parse(payload.body)
		if (privateChats.get(payloadData.senderName)) {
			privateChats.get(payloadData.senderName).push(payloadData)
			setPrivateChats(new Map(privateChats))
		} else {
			let list = []
			list.push(payloadData)
			privateChats.set(payloadData.senderName, list)
			setPrivateChats(new Map(privateChats))
		}
	}

	const onError = (err: any) => {
		console.log(err)
	}

	const handleMessage = (event: any) => {
		const { value } = event.target
		setUserData({ ...userData, message: value })
	}
	const sendValue = () => {
		if (stompClient) {
			var chatMessage = {
				senderName: userData.username,
				message: userData.message,
				status: 'MESSAGE',
			}
			console.log(chatMessage)
			stompClient.send('/app/message', {}, JSON.stringify(chatMessage))
			setUserData({ ...userData, message: '' })
		}
	}

	const sendPrivateValue = () => {
		if (stompClient) {
			var chatMessage = {
				senderName: userData.username,
				receiverName: tab,
				message: userData.message,
				status: 'MESSAGE',
			}

			if (userData.username !== tab) {
				privateChats.get(tab).push(chatMessage)
				setPrivateChats(new Map(privateChats))
			}
			stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage))
			setUserData({ ...userData, message: '' })
		}
	}

	const handleUsername = (event: any) => {
		const { value } = event.target
		setUserData({ ...userData, username: value })
	}

	const registerUser = () => {
		connect()
	}
	return (
		<div className="my-5 bg-white w-[80rem] shadow-[0_2px_8px_0_rgba(0,0,0,0.3)] rounded-lg">
			{userData.connected ? (
				<div className="chat-box h-[45rem] p-3 mx-5 flex">
					<div className="member-list w-[20%]">
						<ul className="list-none p-0">
							<li
								onClick={() => {
									setTab('CHATROOM')
								}}
								className={`p-4 border-solid border rounded border-gray-light cursor-pointer m-2 shadow-[0_2px_8px_0_#add8e6] hover:bg-secondary/50 ${
									tab === 'CHATROOM' && 'bg-secondary text-white '
								}`}
							>
								Chatroom
							</li>
							{[...privateChats.keys()].map((name, index) => (
								<li
									onClick={() => {
										setTab(name)
									}}
									className={`p-4 border-solid border rounded border-gray-light cursor-pointer m-2 shadow-[0_2px_8px_0_#add8e6] hover:bg-secondary/50 ${
										tab === name && 'bg-secondary text-white'
									}`}
									key={index}
								>
									{name}
								</li>
							))}
						</ul>
					</div>
					{tab === 'CHATROOM' && (
						<div className="chat-content w-[80%] ml-4">
							<ul className="list-none p-0 chat-messages h-[80%] border-solid border rounded border-gray-light">
								{publicChats.map((chat: any, index: number) => (
									<li
										className={`message pb-2 w-auto flex shadow m-4 ${
											chat.senderName === userData.username && 'self justify-end'
										}`}
										key={index}
									>
										{chat.senderName !== userData.username && (
											<div className="avatar bg-blue-dark p-2 mx-2 rounded-sm text-white">
												{chat.senderName}
											</div>
										)}
										<div className="message-data p-3">{chat.message}</div>
										{chat.senderName === userData.username && (
											<div className="avatar self bg-gray-light p-2 mx-2 rounded-sm">
												{chat.senderName}
											</div>
										)}
									</li>
								))}
							</ul>

							<div className="send-message w-full flex gap-4">
								<input
									type="text"
									className="input-message p-3 text-xl w-[90%] rounded-full"
									placeholder="enter the message"
									value={userData.message}
									onChange={handleMessage}
								/>
								<button
									type="button"
									className="send-button w-[10%] rounded-xl cursor-pointer border-none p-3 bg-green text-white text-xl font-bold"
									onClick={sendValue}
								>
									send
								</button>
							</div>
						</div>
					)}
					{tab !== 'CHATROOM' && (
						<div className="chat-content w-[80%] ml-4">
							<ul className="list-none p-0 chat-messages h-[80%] border-solid border rounded border-gray-light">
								{[...privateChats.get(tab)].map((chat, index) => (
									<li
										className={`message pb-2 w-auto flex shadow m-4 ${
											chat.senderName === userData.username && 'self justify-end'
										}`}
										key={index}
									>
										{chat.senderName !== userData.username && (
											<div className="avatar bg-blue-dark p-2 mx-2 rounded-sm text-white">
												{chat.senderName}
											</div>
										)}
										<div className="message-data p-3">{chat.message}</div>
										{chat.senderName === userData.username && (
											<div className="avatar self bg-gray-light p-2 mx-2 rounded-sm">
												{chat.senderName}
											</div>
										)}
									</li>
								))}
							</ul>

							<div className="send-message w-full flex gap-4">
								<input
									type="text"
									className="input-message p-3 text-xl w-[90%] rounded-full"
									placeholder="enter the message"
									value={userData.message}
									onChange={handleMessage}
								/>
								<button
									type="button"
									className="send-button w-[10%] rounded-xl cursor-pointer border-none p-3 bg-green text-white text-xl font-bold"
									onClick={sendPrivateValue}
								>
									send
								</button>
							</div>
						</div>
					)}
				</div>
			) : (
				<div className="register fixed p-10 shadow-[0_2px_8px_0_rgba(0,0,0,0.3)] top-[35%] left-[40%] flex">
					<input
						id="user-name"
						placeholder="Enter your name"
						className="p-3 text-xl"
						name="userName"
						value={userData.username}
						onChange={handleUsername}
						// margin="normal"
					/>
					<button
						type="button"
						className="border-none p-3 bg-green text-white text-xl font-bold"
						onClick={registerUser}
					>
						connect
					</button>
				</div>
			)}
		</div>
	)
}
