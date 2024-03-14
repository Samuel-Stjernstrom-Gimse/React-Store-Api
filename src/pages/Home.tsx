import { ProductProps } from '../components/Product/Product.tsx'
import { Navbar } from '../components/Navbar/Navbar.tsx'
import { ProductSection } from '../components/ProductSection.tsx'
import { Cart } from '../components/Navbar/Cart.tsx'
import { useState } from 'react'

export const Home = () => {
	const [cart, setCart] = useState<ProductProps[]>([]) // State for cart
	const [cartOpen, setCartOpen] = useState<boolean>(false)
	const [search, setSearch] = useState<string>()

	const addToCart = (product: ProductProps) => {
		setCart([...cart, product])
	}

	const cartShow: 'hidden' | 'visible' = cartOpen ? 'visible' : 'hidden'
	return (
		<>
			<Navbar isOpen={cartOpen} setIsOpen={setCartOpen} cart={cart} setSearch={setSearch} />
			<ProductSection addToCart={addToCart} search={search} />
			<Cart cart={cart} cartShow={cartShow} setCart={setCart} />
		</>
	)
}
