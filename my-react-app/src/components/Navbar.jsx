import { Link } from "react-router-dom"

function Navbar () {


    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between min-h-22.5 bg-gray-900 px-20 ">
            <Link to='/Dashboard' className="font-bold text-[4vmin] text-white">TechSupport Solutions</Link>
            <nav>
                <ul className="flex gap-10 text-white">
                    <li><Link to='/Dashboard' className="text-[2vmin]">Dashboard</Link></li>
                    <li><Link to='/NewTicket' className="text-[2vmin]">Novo Chamado</Link></li>
                    <li><Link to='/TicketDetails' className="text-[2vmin]">Detalhes do Chamado</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar