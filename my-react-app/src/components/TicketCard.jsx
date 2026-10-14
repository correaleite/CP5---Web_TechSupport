
function TicketCard() {

    return (
        
        <div id="ticket" className='flex flex-col w-full items-center justify-center h-screen bg-gray-300 gap-10 mt-[10px]'>
            <div className='flex flex-col items-center gap-5  w-[25%] h-[60%] bg-white rounded-[15px] border-2 border-solid border-gray-500'>
                <h2 className='font-bold text-[4.5vmin] text-gray-800 mt-7.5 '>Conserto Iphone</h2>
                <p className='text-[2.2vmin] font-medium text-gray-800 border-b pb-5  '>Conserto do Iphone 11 da Patrícia</p>
                <div>
                    <ul className='text-gray-800 w-full'>
                        <li className='flex gap-1 font-semibold'>Categoria:<p className='text-gray-900'>B</p></li>
                        <li className='flex gap-1 font-semibold'>Prioridade:<p className='text-yellow-400'>MEDIA</p></li>
                        <li className='flex gap-1 font-semibold'>Status:<p className='text-blue-400'>ABERTO</p></li>
                    </ul>
                    <div className='flex flex-col gap-2 mt-6.25 border-t pt-7 w-full'>
                        <button class="rounded-full bg-blue-500 hover:bg-blue-700 p-2 text-white font-medium">Alterar Status</button>
                        <button class="rounded-full bg-red-500 hover:bg-red-700 p-2 text-white font-medium">Excluir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketCard
