import { LayoutProps } from '@/models'

export interface IEmptyLayoutProps {}

export function EmptyLayout({ children }: LayoutProps) {
	return <div>{children}</div>
}
