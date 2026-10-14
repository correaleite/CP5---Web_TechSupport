import Ticket from "../models/Ticket"

function TicketForm() {
    return (
<>
            <div id="cadastro" className='flex flex-col w-full items-center justify-center h-screen bg-gray-600'>
                <form className='flex flex-col items-center justify-center gap-7  w-[30%] h-[50%] bg-gray-500 rounded-[10px] border border-solid border-gray-100'>
                    <h2 className='font-bold text-[5vmin] text-white'>Cadastro</h2>
                    <input id="titulo" placeholder="titulo" className='h-[30px] w-[80%] pl-[10px] border border-lighter-dark rounded-[3px] bg-white' />
                    <div class="flex gap-8">
                        <select id="categoria" name="categoria" class="rounded-full p-1 rounded-[3px] bg-white font-medium ">
                            <option value="hardaware"> Hardware </option>
                            <option value="software"> Software </option>
                            <option value="redes"> Redes </option>
                            <option value="outros"> Outros </option>
                        </select>
                        <select id="prioridades" name="prioridades" class="rounded-full p-1 rounded-[3px] bg-white font-medium ">
                            <option value="baixa"> Baixa </option>
                            <option value="media"> Média </option>
                            <option value="alta"> Alta </option>
                        </select>
                    </div>
                    <textarea id="descricao" placeholder="Descrição" className='h-[70px] w-[80%] pl-[10px] border border-lighter-dark rounded-[3px] bg-white'></textarea>
                    <button type="submit" class="rounded-full bg-blue-500 hover:bg-blue-700 p-2 text-white font-medium">Enviar</button>
                </form>
            </div>
</>
    
    )
}

export default TicketForm