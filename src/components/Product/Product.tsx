import { MouseEventHandler, useState } from 'react'
import './Product.css'
import { ProductModal } from './ProductModal.tsx'

export type ProductProps = {
	title: string
	images: string[]
	price: string
	description: string
	category: string
	addToCart: MouseEventHandler<HTMLButtonElement>
}

export const Product = (props: ProductProps) => {
	const [readMore, setReadMore] = useState<boolean>(true)
	const [pictureNum, setPictureNum] = useState(0)
	const [showModal, setShowModal] = useState(false)

	const handleReadMore = (): void => {
		setReadMore(!readMore)
	}

	const handlePictureNum = () => {
		setPictureNum((prevNum: number): number => (pictureNum === props.images.length - 1 ? 0 : prevNum + 1))
	}

	const handleModal = () => {
		setShowModal(!showModal)
	}

	const shortDescription: string = props.description.slice(0, 20)

	return (
		<>
			{!showModal ? (
				<div className={'card-p'}>
					<img onClick={handlePictureNum} className={'img'} src={props.images[pictureNum]} alt="" />

					<h1 onClick={handleModal} className={'title-p'}>
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
						<h2 style={{ color: 'white' }}>${props.price}</h2>
						<button className={'button'} onClick={props.addToCart}>
							Add To Cart
						</button>
					</div>

					{readMore ? (
						<p>
							{shortDescription}....
							<span
								style={{ textAlign: 'left', color: 'white', cursor: 'pointer' }}
								onClick={handleReadMore}
							>
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
			) : (
				<ProductModal
					images={props.images}
					category={props.category}
					title={props.title}
					price={props.price}
					description={props.description}
					addToCart={props.addToCart}
					handleModal={handleModal}
				/>
			)}
		</>
	)
}
