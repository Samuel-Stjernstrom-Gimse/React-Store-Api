import { useEffect, useState } from 'react'
import { Product } from './Product/Product.tsx'
import { Categories } from './Categories.tsx'
import { UnifiedProductType } from '../pages/Home.tsx'

export interface ProductData {
	id: number
	title: string
	price: string
	category: { name: string }
	description: string
	images: string[]
}

interface ProductSectionProps {
	addToCart: (product: UnifiedProductType) => void
	search: string | undefined
	cartOpen: boolean
}

export const ProductSection = (props: ProductSectionProps) => {
	const [products, setProducts] = useState<ProductData[]>([])
	const [categories, setCategories] = useState('All')

	useEffect((): void => {
		getData().then()
	}, [])

	const getData = async (): Promise<void> => {
		try {
			const result: Response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=200')
			const data = await result.json()
			setProducts(data)
		} catch (error) {
			console.log('error')
		}
	}

	const filteredProducts: ProductData[] = products.filter((product: ProductData) => {
		const searchText: string = `${product.title} ${product.category} `.toLowerCase()
		const searchQuery = (props.search ?? '').toLowerCase()
		return searchText.includes(searchQuery)
	})

	const filteredAndPossiblySortedArray: ProductData[] = filteredProducts.filter(
		(product: ProductData) => categories === 'All' || product.category.name === categories
	)

	return (
		<>
			<Categories setCategories={setCategories} categories={categories} />
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: '10px'
				}}
			>
				{filteredAndPossiblySortedArray.map((product: ProductData) => (
					<Product
						title={product.title}
						images={product.images}
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
