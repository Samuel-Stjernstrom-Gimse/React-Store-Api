import { ProductProps } from '../components/Product/Product.tsx'
import { Navbar } from '../components/Navbar/Navbar.tsx'
import { ProductData, ProductSection } from '../components/ProductSection.tsx'
import { Cart } from '../components/Navbar/Cart.tsx'
import { useEffect, useState } from 'react'
export type UnifiedProductType = ProductProps | ProductData
export const Home = () => {
	const [cart, setCart] = useState<UnifiedProductType[]>([])
	const [cartOpen, setCartOpen] = useState<boolean>(false)
	const [search, setSearch] = useState<string>()

	useEffect(() => {
		const storedCart = localStorage.getItem('cart')
		if (storedCart) {
			setCart(JSON.parse(storedCart))
		}
	}, [])

	const addToCart = (product: UnifiedProductType) => {
		setCart((prevCart) => [...prevCart, product])
		localStorage.setItem('cart', JSON.stringify([...cart, product]))
	}

	const cartShow: 'hidden' | 'visible' = cartOpen ? 'visible' : 'hidden'

	return (
		<>
			<Navbar isOpen={cartOpen} setIsOpen={setCartOpen} cart={cart} setSearch={setSearch} />
			<ProductSection cartOpen={cartOpen} addToCart={addToCart} search={search} />
			<Cart cart={cart} cartShow={cartShow} setCart={setCart} />
		</>
	)
}
