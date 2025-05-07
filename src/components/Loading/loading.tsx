import './loading.css'

export function Loading(){
    return(
        <div className="flex justify-center items-center flex-col h-screen">
             <p className='text-2xl text-white font-medium m-4'>Carregando</p>
            <div className="loader">
               
            </div>
        </div>
    )
}