function Home() {

    return (
        <>
            <div className="bg-orange-400 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            FarmaBem
                        </h2>

                        <p className='font-bold text-xl'>
                            Aqui você encontra tudo para sua saúde e bem estar!
                        </p>

                        <div className="flex justify-around gap-4">
                            {/* <ModalPostagem /> */}
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/2zvbvzaqt/Acne%20treatment-amico.png?updatedAt=1744812483586`%E2%81%A9"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            {/* <ListaPostagens /> */}
        </>
    )

}
export default Home;