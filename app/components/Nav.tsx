import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { path: '/', name: 'home' },
  { path: '/work', name: 'work' },
  { path: '/shop', name: 'shop' },
  { path: '/about', name: 'about' },
]

const Nav = () => {
  const path = usePathname()
  return (
    <nav>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path}-link ${link.path === path && 'active'}`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
