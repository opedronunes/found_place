import Image from "next/image";
import Link from "next/link";

export default function Products(){
    return(
        <div className="flex items-center justify-center flex-col container mx-auto p-4">
            <div className="flex gap-2 w-full items-center justify-center py-4 border border-zinc-700 rounded-2xl bg-zinc-900">
                <Link className="py-1 px-3 rounded-md hover:underline hover:underline-offset-8 hover:decoration-gray-400" href={'/'}>Links</Link>
                <Link className="py-1 px-3 rounded-md hover:underline hover:underline-offset-8 hover:decoration-gray-400" href={'/about'}>Quem somos</Link>
                <Link className="py-1 px-3 rounded-md hover:underline hover:underline-offset-8 hover:decoration-gray-400" href={'/contacts'}>Contatos</Link>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container py-12 mx-auto">
                    <h3 className="mb-5 title-font text-2xl font-medium text-gray-400 border-b-[1px] border-gray-800">Nossos Produtos</h3>
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="images/3.jpg" />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-400 mt-6 mb-3">MacBook</h2>
                            <p className="leading-relaxed text-base">Tecnologia de ponta com os melhores Macbook's da atualidade.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="images/2.jpg" />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-400 mt-6 mb-3">Ipad</h2>
                            <p className="leading-relaxed text-base">Procurando produtividade? A linha de Ipad pode ser sua melhor escolha!</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="images/1.jpg" />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-400 mt-6 mb-3">Iphone</h2>
                            <p className="leading-relaxed text-base">Celulares Apple novos e seminovos, com o melhor preço da região.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="images/4.jpg" />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-400 mt-6 mb-3">Acessórios</h2>
                            <p className="leading-relaxed text-base">Temos acessórios para todos os produtos Apple.</p>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="images/1.jpg" />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-400 mt-6 mb-3">Serviços</h2>
                            <p className="leading-relaxed text-base">Traga seu Notebook para avaliarmos o problema e saia com a solução, qualidade e compromisso.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}