import { useNavigate } from "react-router-dom";
import CardCategoria from "../cardcategoria/CardCategoria";
import { useEffect, useState } from "react";
import type { Categoria } from "../../../models/Categoria";
import { buscar } from "../../../service/Service";
import { SyncLoader } from "react-spinners";

function ListaCategorias() {

    // const navigate = useNavigate();
    // const [isLoading, setIsLoading] = useState<boolean>(false);

    // const [categorias, setCategorias] = useState<Categoria[]>([]);

    // useEffect(() => {
    //     buscarCategorias();
    // }, [categorias.length]);

    // async function buscarCategorias() {
    //     try {
    //         await buscar('/categorias', setCategorias);
    //     } catch (error: any) {
    //         if (error.toString().includes('401')) {
    //         };
    //     }
    // }

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <CardCategoria />
                    </div>
                </div>
            </div>
        </>
    )

}
export default ListaCategorias;