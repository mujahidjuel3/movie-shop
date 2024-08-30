import React from 'react'
import Trending from '../assets/Icons/trending.svg'
import NewRelease from '../assets/Icons/newRelease.svg'
import Commingsoon from '../assets/Icons/commingSoon.svg'
import Favourites from '../assets/Icons/favourite.svg'
import Watchlater from '../assets/Icons/watchLater.svg'

const Sidebar = () => {
  return (
    <aside>
				<ul className="space-y-2">
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
							<img src={Trending} width="24" height="24" alt="trending" />
							<span>Trending</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={NewRelease} width="24" height="24" alt="newrelease" />
							<span>New Releases</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={Commingsoon} width="24" height="24" alt="commingsoon" />
							<span>Coming Soon</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={Favourites} width="24" height="24" alt="favourite" />
							<span>Favourites</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={Watchlater} width="24" height="24" alt="watchlater" />
							<span>Watch Later</span>
						</a>
					</li>
				</ul>
			</aside>
  )
}

export default Sidebar