import { Link } from "react-router-dom"
import { signOut } from "firebase/auth"
import {auth} from '../../services/firebaseConnection'
export function Header() {

    async function handleLogout(){
        //Desloga o usuario
        //
        await signOut(auth);
    }

    return (
        <header className="w-full  bg-white flex justify-center items-center">
            <nav className="w-full max-w-3xl h-12 flex items-center justify-between rounded-md px-3">
                <div className="flex gap-4 font-medium">
                    <Link to='/'>Home</Link>
                    <Link to='/admin'>Admin</Link>
                    <Link to='/admin/networks'>Redes Sociais</Link>
                </div>

                <button className="cursor-pointer" onClick={handleLogout}>
                    <i className="text-2xl text-black ri-logout-box-line"></i>
                </button>
            </nav>
        </header>
    )
}