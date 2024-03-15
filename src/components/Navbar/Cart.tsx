import React, { Dispatch, SetStateAction } from 'react'
import { ProductProps } from '../Product/Product.tsx'

interface CartProps {
	cart: ProductProps[]
	cartShow: 'hidden' | 'visible'
	setCart: Dispatch<SetStateAction<ProductProps[]>>
}

export const Cart: React.FC<CartProps> = (props: CartProps) => {
	let price: number = 0

	props.cart.forEach((item: ProductProps): void => {
		price += parseInt(item.price)
	})

	const handleRemoveItem = (index: number): void => {
		const updatedCart: ProductProps[] = props.cart.filter((_: ProductProps, i: number): boolean => i !== index)
		props.setCart(updatedCart)
	}

	return (
		<div
			style={{
				visibility: props.cartShow,
				position: 'fixed',
				top: '0',
				right: '0',
				overflow: 'scroll',
				height: '50vh',
				color: 'gray',
				backgroundImage: 'url(src/assets/img/lines.svg)',
				backgroundSize: 'cover',
				backgroundBlendMode: 'lighten',
				boxShadow: '1px 0 10px black',
				zIndex: '3',
				width: '30rem',
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				backgroundColor: 'rgb(14,14,14)',
				paddingTop: '3rem'
			}}
		>
			<h1
				style={{
					textAlign: 'center',
					position: 'fixed',
					top: '0',
					fontSize: '1rem',
					width: '30rem'
				}}
			>
				Cart total = ${price}
			</h1>
			{props.cart.map((item: ProductProps, index: number) => (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						paddingBottom: '2rem'
					}}
					key={item.title}
				>
					<div
						style={{
							width: '23rem',
							margin: '0',
							padding: 5,
							borderRadius: '12px',
							backgroundColor: 'rgb(30,30,30)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-around'
						}}
					>
						<img style={{ height: '2rem', borderRadius: '6px' }} src={item.images[1]} alt="" />
						<h1 style={{ fontSize: 12, color: 'white' }}>{item.title}</h1>
						<h2 style={{ fontSize: 14 }}>${item.price}</h2>
						<button
							style={{
								fontSize: '0.7rem',
								padding: '0',
								backgroundColor: 'red',
								borderRadius: '5px',
								height: '2rem'
							}}
							onClick={() => handleRemoveItem(index)}
						>
							remove item
						</button>
					</div>
				</div>
			))}
		</div>
	)
}
