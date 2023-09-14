import Link from 'next/link'
import Logo from './components/logo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-96 h-96 bg-[#262626] py-2 px-6 rounded-md flex flex-col gap-6 items-center justify-center text-[#bdbdbd]">
        <Logo/>
        <div className="flex flex-col gap-2 w-full">
          <Link href="https://wa.me/5561992254797" target='_blank' className="border border-gray-700 hover:border-[#bdbdbd] hover:shadow-sm hover:shadow-[#bdbdbd] hover:bg-[#bdbdbd] hover:text-gray-900 transition-colors rounded-lg p-4 w-full text-center">Whastapp</Link>
          <Link href="/products" className="border border-gray-700 hover:border-[#bdbdbd] hover:shadow-sm hover:shadow-[#bdbdbd] hover:bg-[#bdbdbd] hover:text-gray-900 transition-colors rounded-lg p-4 w-full text-center">Produtos</Link>
          <Link href="https://goo.gl/maps/ZCfS9U722g1AUZ456" target='_blank' className="border border-gray-700 hover:border-[#bdbdbd] hover:shadow-sm hover:shadow-[#bdbdbd] hover:bg-[#bdbdbd] hover:text-gray-900 transition-colors rounded-lg p-4 w-full text-center">Localização</Link>
          <Link href="https://wa.me/556174011955" target='_blank' className="border border-gray-700 hover:border-[#bdbdbd] hover:shadow-sm hover:shadow-[#bdbdbd] hover:bg-[#bdbdbd] hover:text-gray-900 transition-colors rounded-lg p-4 w-full text-center">Serviços</Link>
        </div>
      </div>
    </main>
  )
}
