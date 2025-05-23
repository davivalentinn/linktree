
import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";

export function NetWorks() {
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [youtube, setYoutube] = useState("")
    return (
        <div className="flex items-center flex-col min-h-screen pb-7">
            <Header />

            <h1 className="text-white text-2xl font-bold mt-8 mb-4">Minhas Redes Socias</h1>

            <form className="flex flex-col mt-5 mb-3 w-full max-w-3xl px-3">
                <label className="text-white font-medium mt-2 mb-2">Link do facebook</label>
                <Input
                    type="url"
                    placeholder="Digite a url do facebook"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)} />
                <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
                <Input
                    type="url"
                    placeholder="Digite a url do Instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)} />
                <label className="text-white font-medium mt-2 mb-2">Link do Youtube</label>
                <Input
                    type="url"
                    placeholder="Digite a url do Youtube"
                    value={youtube}
                    onChange={(e) => setYoutube(e.target.value)} />

                
                    <button
                        className="mt-5 mb-7 bg-blue-600 h-9 flex justify-center items-center text-white font-bold rounded cursor-pointer hover:bg-blue-500 transition-all"
                        type="submit">
                        Salvar Links
                    </button>
                
            </form>
        </div>
    )
}