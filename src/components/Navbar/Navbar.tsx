import './Navbar.css'

type Props = {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	cart: any
	setSearch: any
}

export const Navbar = (props: Props) => {
	const handleIsOpen = () => {
		props.setIsOpen(!props.isOpen)
	}

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
		props.setSearch(event.target.value)
	}

	return (
		<>
			<div
				style={{
					width: '100vw',
					height: '4rem',
					margin: 0,
					position: 'fixed',
					top: 0,
					left: 0,
					display: 'flex',
					alignItems: 'center',
					color: 'grey',
					gap: '10rem',
					backgroundColor: 'rgb(11,11,11)',
					backgroundImage: 'url(src/assets/images/lines.svg)',
					backgroundSize: 'cover',
					zIndex: '2',
					paddingLeft: '1rem'
				}}
			>
				<div
					onClick={() => window.location.reload()}
					style={{ display: 'flex', height: '3rem', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
				>
					<img
						className={'spin-animation'}
						style={{ height: '2.5rem' }}
						src="/src/assets/images/logos_react.svg"
						alt=""
					/>
					<h1 style={{ color: 'white', fontSize: '3rem' }}>REACT STORE</h1>
				</div>
				<input
					placeholder={'search'}
					type={'text'}
					style={{
						backgroundColor: 'transparent',
						color: 'grey',
						fontSize: '1rem',
						border: '1px solid gray',
						borderRadius: '1rem',
						padding: '4px',
						paddingLeft: '1rem'
					}}
					onChange={handleSearch}
				/>
				<div
					style={{
						position: 'relative',
						height: '3rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<img
						onClick={handleIsOpen}
						style={{ height: '1.5rem', cursor: 'pointer' }}
						src="/src/assets/images/cart.svg"
						alt="Cart"
					/>
					<h3
						style={{
							textAlign: 'center',
							color: 'white',
							position: 'absolute',
							top: '20%',
							right: '-70%',
							fontSize: '0.6rem',
							backgroundColor: 'red',
							aspectRatio: '1/1',
							width: '1rem',
							height: '1rem',
							borderRadius: '50%'
						}}
					>
						{props.cart.length}
					</h3>
				</div>
			</div>
			{props.isOpen ? (
				<div
					onClick={handleIsOpen}
					style={{ position: 'fixed', left: '0', top: '0', zIndex: '1', width: '100vw', height: '100vh' }}
				></div>
			) : null}
		</>
	)
}
