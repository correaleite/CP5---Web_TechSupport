
function TicketFilter() {
    return (
     <>
            <div id="ticket" className='flex gap-5 w-full items-center h-screen bg-gray-300 justify-center '>
                <input placeholder="Digite o titulo do ticket" className='h-[30px] w-[80%]  border border-lighter-dark rounded-[3px] bg-white rounded-[20px] p-5' />
                <select className="rounded-full p-2  bg-white font-medium">
                        <option>Todos</option>
                        <option>Aberto</option>
                        <option>Em Andamento</option>
                        <option>Resolvido</option>
                    </select>
            </div>
     </>
         
    );
}

export default TicketFilter