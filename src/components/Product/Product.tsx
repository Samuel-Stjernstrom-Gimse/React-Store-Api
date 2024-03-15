import { useState } from 'react'
import './Product.css'

export type ProductProps = {
	title: string
	images: string[]
	price: string
	description: string
	category: string
	addToCart: () => void
}

export const Product = (props: ProductProps) => {
	const [readMore, setReadMore] = useState<boolean>(true)
	const [pictureNum, setPictureNum] = useState(0)

	const handleReadMore = (): void => {
		setReadMore(!readMore)
	}

	const handlePictureNum = () => {
		setPictureNum((prevNum: number): number => (pictureNum === props.images.length - 1 ? 0 : prevNum + 1))
	}

	const shortDescription: string = props.description.slice(0, 20)

	return (
		<div
			style={{
				width: '25rem',
				backgroundColor: 'rgb(23,23,23)',
				marginTop: '2rem',
				padding: '1rem',
				color: 'gray',
				borderRadius: '1rem',
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				justifyContent: 'center'
			}}
		>
			<img
				onClick={handlePictureNum}
				className={'img'}
				style={{
					height: '20rem',
					width: '20rem',
					objectFit: 'cover',
					borderRadius: '20px',
					border: '2px solid black'
				}}
				src={props.images[pictureNum]}
				alt=""
			/>

			<h1
				style={{
					fontFamily: 'Arial',
					textAlign: 'left',
					height: '4rem',
					color: 'white',
					fontSize: '1.3rem',
					fontWeight: 'bolder',
					width: '18rem'
				}}
			>
				{props.title}
			</h1>
			<h5 style={{ margin: 0 }}>{props.category}</h5>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-around',
					gap: '3rem'
				}}
			>
				<h2>${props.price}</h2>
				<button className={'button'} onClick={props.addToCart}>
					Add To Cart
				</button>
			</div>

			{readMore ? (
				<p>
					{shortDescription}....
					<span style={{ textAlign: 'left', color: 'white', cursor: 'pointer' }} onClick={handleReadMore}>
						{' '}
						read more
					</span>
				</p>
			) : (
				<p style={{ width: '20rem', textAlign: 'left' }}>
					{props.description}
					<span style={{ color: 'white', cursor: 'pointer' }} onClick={handleReadMore}>
						{' '}
						read less
					</span>
				</p>
			)}
		</div>
	)
}
