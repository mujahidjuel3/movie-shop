import Logo from '../assets/logo.svg'
import Ring from '../assets/ring.svg'
import Moon from '../assets/Icons/moon.svg'
import Sun from '../assets/Icons/sun.svg'
import Shopping from '../assets/shopping-cart.svg'
import { useContext, useState } from 'react'
import CartDetails from '../cine/CartDetails'
import { MovieContext, ThemeContext } from '../context'

const Header = () => {

	const [showCart, setShowCart] = useState(false)
	const {state} =useContext(MovieContext)
	const { darkMode, setDarkMode} = useContext(ThemeContext)

	console.log(state.cartData)

	function handleCartShow() {
		setShowCart(true)
	}
  return (
    <header>
		{
			showCart && <CartDetails onClose={()=>setShowCart(false)}/>
		}
		<nav className="container flex items-center justify-between space-x-10 py-6">
			<a href="index.html">
				<img src={Logo} width="139" height="26" alt="logo" />
			</a>

			<ul className="flex items-center space-x-5">
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={Ring} width="24" height="24" alt="ring" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#" 
					onClick={() => setDarkMode(darkMode => !darkMode)}>
						<img src={darkMode ? Sun : Moon} width="24" height="24" alt="moon" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#"
					onClick={handleCartShow}>
						<img src={Shopping} width="24" height="24" alt="cart" />
						{
							state.cartData.length > 0 && (
								<span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
									{state.cartData.length}
								</span>
							)
						}
					</a>
				</li>
			</ul>
		</nav>
	</header>
  )
}

export default Header