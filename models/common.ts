import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
export interface LayoutProps {
	children: ReactNode
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	// eslint-disable-next-line no-unused-vars
	Layout?: ({ children }: LayoutProps) => ReactElement
	isPrivate?: boolean
}

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}
