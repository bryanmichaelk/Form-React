export default function Radio({ label, input, required }) {
	const isRequired = required ? '*' : ''

	return (
		<div className='flex flex-col gap-2'>
			<label className='font-semibold text-lg text-left'>
				{label} <span className='text-red-600'>{isRequired}</span>
			</label>
			<div className='flex flex-col sm:flex-row items-start gap-2 sm:gap-8 sm:items-center justify-center'>
				{input.map((i, key) => {
					return (
						<div className='flex items-center gap-2' key={key}>
							<input type='radio' name={label} value={i} className='text-lg' />
							<label htmlFor={i}>{i}</label>
						</div>
					)
				})}
			</div>
		</div>
	)
}
