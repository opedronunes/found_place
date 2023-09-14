import Image from "next/image";
import Link from "next/link";

export default function Products(){
    return(
        <div className="flex items-center justify-center flex-col container mx-auto p-4">
            <div className="flex gap-2 w-full items-center justify-center py-4 border border-zinc-700 rounded-2xl bg-zinc-900">
                <Link className="py-1 px-3 rounded-md hover:underline hover:underline-offset-8 hover:decoration-gray-400" href={'/'}>Links</Link>
                <Link className="py-1 px-3 rounded-md hover:underline hover:underline-offset-8 hover:decoration-gray-400" href={'/products'}>Produtos</Link>
                <Link className="py-1 px-3 rounded-md hover:underline hover:underline-offset-8 hover:decoration-gray-400" href={'/contacts'}>Contatos</Link>

            </div>
            <section id="quemsomos" className="w-full">
                <div className="py-10 flex justify-center flex-col">
                    <div>
                        <h3 className="mb-5 title-font text-2xl font-medium text-gray-400 border-b-[1px] border-gray-800">Quem somos?</h3>
                    </div>
                    <div className="md:text-2xl font-semibold text-center text-md text-gray-200">
                        <h4>Somos uma empresa Especializada Apple.<br/>Aqui, garantimos a sua melhor experiência Apple!</h4>
                    </div>
                </div>
                <div className="text-gray-600 body-font py-10"> 
                        <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-200">2.7K</h2>
                            <p className="leading-relaxed">Vendas</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-200">1.8K</h2>
                            <p className="leading-relaxed">Clientes</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-200">35</h2>
                            <p className="leading-relaxed">Produtos</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-200">4</h2>
                            <p className="leading-relaxed">Filiais</p>
                        </div>
                        </div>
                </div>
            </section>
            
        </div>
    )
}