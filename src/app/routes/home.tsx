import logo from '@/assets/logo.svg'
import { Head } from '@/components/seo'

const HomeRoute = () => {
  return (
    <>
      <Head description="Welcome to React Tutorial" />
      <div className="flex h-screen items-center bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">React Tutorial</span>
          </h2>
          <img src={logo} alt="react" />
          <p>Showcasing Best Practices For Building React Applications</p>
        </div>
      </div>
    </>
  )
}

export default HomeRoute
