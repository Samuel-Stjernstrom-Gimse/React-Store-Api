type Props = {
	image: string
}

export const Hero = (props: Props) => {
	return (
		<>
			<div>
				<img src={props.image} alt="" />
				<img src="" alt="" />
				<img src="" alt="" />
			</div>
		</>
	)
}
