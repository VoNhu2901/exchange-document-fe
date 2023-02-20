import { Control, useController } from 'react-hook-form'

type InputFieldProps = {
	name: string
	label?: string
	control: Control<any>
	type: string
}

export const InputField = ({ name, label, control, type, ...rest }: InputFieldProps) => {
	const {
		field: { onChange, onBlur, value, ref },
		fieldState: { error },
	} = useController({ name, control })

	return (
		<div className="mb-4">
			<input
				type={type}
				className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
				id="exampleFormControlInput1"
				placeholder={name}
				name={name}
				value={value}
				ref={ref}
				onChange={onChange}
				onBlur={onBlur}
				{...rest}
			/>
			<p className="text-red-600">{error?.message}</p>
		</div>
	)
}
