import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-orange-500 text-white'>

                <div className="container flex justify-between text-lg mx-8">
                    <Link to='/home' className="text-2xl font-bold hover:opacity-80">Farmácia Popular</Link>

                    <div className='font-bold flex gap-4'>
                        <Link to='/categorias' className='hover:opacity-80'>Categorias</Link>
                        <p className="hover:opacity-80">Produtos</p>
                        <p className="hover:opacity-80">Fale Conosco</p>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Navbar;