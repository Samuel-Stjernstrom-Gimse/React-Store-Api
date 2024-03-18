import React, { Dispatch, SetStateAction } from 'react'
import './Navbar.css'
import { UnifiedProductType } from '../../pages/Home.tsx'

interface CartProps {
	cart: UnifiedProductType[]
	cartShow: 'hidden' | 'visible'
	setCart: Dispatch<SetStateAction<UnifiedProductType[]>>
}

export const Cart: React.FC<CartProps> = (props: CartProps) => {
	let price: number = 0

	props.cart.forEach((item: UnifiedProductType): void => {
		price += parseInt(item.price)
	})

	const handleRemoveItem = (index: number): void => {
		const updatedCart: UnifiedProductType[] = props.cart.filter(
			(_: UnifiedProductType, i: number): boolean => i !== index
		)
		props.setCart(updatedCart)
		localStorage.setItem('cart', JSON.stringify(updatedCart))
	}

	return (
		<div className={'box'} style={{ visibility: props.cartShow }}>
			<h1 className={'title-cart'}>
				Total <span style={{ color: 'rgb(190,190,190)' }}>${price}</span>
			</h1>
			{props.cart.map((item: UnifiedProductType, index: number) => (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						paddingBottom: '2rem'
					}}
					key={item.title}
				>
					<div className={'container-cart'}>
						<img style={{ height: '2rem', borderRadius: '6px' }} src={item.images[1]} alt="" />
						<h1 style={{ fontSize: 12, color: 'white' }}>{item.title.slice(0, 20)}</h1>
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
