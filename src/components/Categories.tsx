import { Dispatch, SetStateAction } from 'react'
import './Categories.css'

type Props = {
	setCategories: Dispatch<SetStateAction<string>>
	categories: string
}

export const Categories = (props: Props) => {
	const handleCategories = (categories: string) => {
		return () => {
			props.setCategories(categories)
		}
	}

	return (
		<>
			<div
				style={{
					display: 'flex',
					cursor: 'pointer',
					width: '100%',
					justifyContent: 'center',
					gap: '4rem',
					marginTop: '2rem'
				}}
			>
				<h3
					style={
						props.categories === 'Clothes'
							? { backgroundColor: '#8400fd' }
							: { backgroundColor: 'transparent' }
					}
					className={'cat'}
					onClick={handleCategories('Clothes')}
				>
					Clothes
				</h3>
				<h3
					style={
						props.categories === 'Electronics'
							? { backgroundColor: '#8400fd' }
							: { backgroundColor: 'transparent' }
					}
					className={'cat'}
					onClick={handleCategories('Electronics')}
				>
					Electronics
				</h3>
				<h3
					style={
						props.categories === 'Furniture'
							? { backgroundColor: '#8400fd' }
							: { backgroundColor: 'transparent' }
					}
					className={'cat'}
					onClick={handleCategories('Furniture')}
				>
					Furniture
				</h3>
				<h3
					style={
						props.categories === 'Shoes'
							? { backgroundColor: '#8400fd' }
							: { backgroundColor: 'transparent' }
					}
					className={'cat'}
					onClick={handleCategories('Shoes')}
				>
					Shoes
				</h3>
				<h3
					style={
						props.categories === 'Miscellaneous'
							? { backgroundColor: '#8400fd' }
							: { backgroundColor: 'transparent' }
					}
					className={'cat'}
					onClick={handleCategories('Miscellaneous')}
				>
					Miscellaneous
				</h3>
				<h3
					style={
						props.categories === 'All' ? { backgroundColor: '#8400fd' } : { backgroundColor: 'transparent' }
					}
					className={'cat'}
					onClick={handleCategories('All')}
				>
					All
				</h3>
			</div>
		</>
	)
}
