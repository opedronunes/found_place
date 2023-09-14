import Image from "next/image";
import Link from "next/link";

export default function Products(){
    return(
        <div className="flex items-center justify-center flex-col container mx-auto p-4">
            <div className="flex gap-2 w-full items-center justify-center py-4 border border-zinc-700 rounded-2xl bg-zinc-900">
                <Link className="py-1 px-3 rounded-md hover:underline hover:underline-offset-8 hover:decoration-gray-400" href={'/'}>Links</Link>
                <Link className="py-1 px-3 rounded-md hover:underline hover:underline-offset-8 hover:decoration-gray-400" href={'/products'}>Produtos</Link>
                <Link className="py-1 px-3 rounded-md hover:underline hover:underline-offset-8 hover:decoration-gray-400" href={'/about'}>Quem somos</Link>
            </div>
            
            <div className="flex text-gray-600 items-center flex-col gap-3 mt-5">
                <div className="w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5840.604807398392!2d-47.95343117105212!3d-15.798157213723453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a30580a42db8f%3A0x9db9df59755f73f8!2sSIA%20Trecho%207%20Feira%20dos%20Importados%20-%20Guar%C3%A1%2C%20Bras%C3%ADlia%20-%20DF%2C%2071200-100!5e0!3m2!1spt-BR!2sbr!4v1694654407980!5m2!1spt-BR!2sbr" className="border-0 w-full h-60 rounded"  loading="lazy"></iframe>
                </div>
                <p className="text-sm text-center md:text-lg">Feira dos importados de Brasília - Conjunto B, Loja 53/55. Conjunto D, Loja 40.</p>
            </div>
        </div>
    )
}