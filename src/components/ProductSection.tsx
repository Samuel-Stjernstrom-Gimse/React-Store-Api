import { useEffect, useState } from 'react'
import { Product } from './Product/Product.tsx'
import { Hero } from './Product/Hero.tsx'

interface ProductData {
	id: number
	title: string
	price: string
	category: { name: string }
	description: string
	images: string[]
}

interface ProductSectionProps {
	addToCart: (product: ProductData) => void
	search: any
}

export const ProductSection = (props: ProductSectionProps) => {
	const [products, setProducts] = useState<ProductData[]>([])

	useEffect((): void => {
		getData().then()
	}, [])

	const getData = async (): Promise<void> => {
		try {
			const result: Response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=29')
			const data = await result.json()
			setProducts(data)
			console.log(data)
		} catch (error) {
			console.log('error')
		}
	}

	const filteredProducts: ProductData[] = products.filter((product: ProductData) => {
		const searchText: string = `${product.title} ${product.category} `.toLowerCase()
		const searchQuery = (props.search ?? '').toLowerCase()
		return searchText.includes(searchQuery)
	})

	return (
		<>
			<Hero />
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: '10px'
				}}
			>
				{filteredProducts.map((product: ProductData) => (
					<Product
						key={product.id}
						title={product.title}
						image={product.images[1]}
						price={product.price}
						description={product.description}
						category={product.category.name}
						addToCart={() => props.addToCart(product)}
					/>
				))}
			</div>
		</>
	)
}
