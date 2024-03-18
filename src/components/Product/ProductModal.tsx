import { MouseEventHandler, useState } from 'react'
import './Product.css'

export type ProductModalProps = {
	title: string
	images: string[]
	price: string
	description: string
	category: string
	addToCart: MouseEventHandler<HTMLButtonElement>
	handleModal: () => void
}

export const ProductModal = (props: ProductModalProps) => {
	const [pictureNum, setPictureNum] = useState(0)

	const handlePictureNum = () => {
		setPictureNum((prevNum: number): number => (pictureNum === props.images.length - 1 ? 0 : prevNum + 1))
	}

	return (
		<>
			<div
				style={{
					position: 'fixed',
					width: '100vw',
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					top: '4rem',
					left: '0',
					backgroundColor: 'rgba(0, 0, 0, 0.7)',
					zIndex: '100',
					paddingBottom: '10rem'
				}}
			>
				<div
					onClick={props.handleModal}
					style={{ position: 'fixed', width: '100vw', height: '100vh', top: 0, left: '0' }}
				></div>
				<div
					style={{
						backgroundColor: 'rgb(33,33,33)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						padding: '2rem',
						marginBottom: '6rem',
						gap: '2rem',
						borderRadius: '1rem',
						position: 'relative',
						zIndex: '101'
					}}
				>
					<h1
						onClick={props.handleModal}
						style={{
							position: 'absolute',
							right: '1rem',
							top: '0%',
							fontSize: '1rem',
							maxHeight: '1rem',
							cursor: 'pointer',
							color: 'gray'
						}}
					>
						X
					</h1>
					<div>
						<img
							onClick={handlePictureNum}
							className={'img'}
							style={{
								height: '30rem',
								width: '30rem',
								objectFit: 'cover',
								borderRadius: '20px',
								border: '2px solid black'
							}}
							src={props.images[pictureNum]}
							alt=""
						/>
					</div>
					<div>
						<h2>{props.title}</h2>
						<h5>{props.category}</h5>
						<h2>${props.price}</h2>
						<p style={{ textAlign: 'left', width: '20rem', marginBottom: '2rem' }}>{props.description}</p>
						<button className={'button'} onClick={props.addToCart}>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
