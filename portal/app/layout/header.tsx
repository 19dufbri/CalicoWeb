import { NavLink } from 'react-router';
import './header.css'

const tabs = [
  { label: "Home", path: "/" },
  { label: "Contact", path: "/contact" },
]

export function BrandHeader() {
  return (
    <header className='site-header'>
      <img id='site-logo' src='/logo.png'/>
      <h1 className='fg-1'>Calico Goods</h1>
      <nav>
        {tabs.map(tab => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end
            className={({ isActive }) => isActive ? "site-tab site-tab-active" : "site-tab"}
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}