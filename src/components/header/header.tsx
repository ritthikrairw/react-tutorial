import { paths } from '@/config/paths'
import { Link } from 'react-router'

export type HeaderProps = {}

// const links = [
//   {
//     label: 'Home',
//     href: paths.home.path,
//   },
//   {
//     label: 'About',
//     href: paths.about.path,
//   },
// ]

export const Header = (_: HeaderProps) => {
  return (
    <header className="bg-black text-white p-6 rounded-2xl shadow-2xl">
      This is the header
    </header>
  )
}
