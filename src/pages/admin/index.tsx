import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { useState, type FormEvent } from "react";
import {FiTrash2} from "react-icons/fi"
export function Admin() {
    const [nameInput, setNameInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [textColorInput, setTextColorInput] = useState("#00000");
    const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1");

    async function handleRegister(e: FormEvent){
        e.preventDefault();
    }
    return (
        <div className="flex items-center flex-col min-h-screen pb-7">
            <Header />


            <form className="flex flex-col mt-15 mb-3 w-full max-w-3xl px-3"
            onSubmit={handleRegister}
            >
                <label className="text-white font-medium mt-2 mb-2">Nome do link</label>
                <Input
                    placeholder="Digite o nome do link"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                />
                <label className="text-white font-medium mt-2 mb-2">URL do Link</label>
                <Input type="url"
                    placeholder="Digite a URL"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                />

                <section className="flex my-4 gap-5">
                    <div className="flex gap-2 items-center">
                        <label className="text-white font-medium mt-2 mb-2">Fundo do Link</label>
                        <input type="color" value={backgroundColorInput}
                            onChange={(e) => setBackgroundColorInput(e.target.value)}
                        />

                    </div>

                    <div className="flex gap-2 items-center">
                        <label className="text-white font-medium mt-2 mb-2">Cor do Link</label>
                        <input type="color" value={textColorInput}
                            onChange={(e) => setTextColorInput(e.target.value)}
                        />

                    </div>
                </section>

                {nameInput !== '' && (
                    <div className="flex items-center justify-center flex-col mb-7 p-1 
                border-gray-100/25 border rounded-md">
                        <label className="text-white font-medium mt-2 mb-3">Veja como está ficando:</label>
                        <article
                            className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900
                    rounded px-1 py-3"
                            style={{
                                marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput,
                            }}
                        >
                            <p className="font-medium" style={{ color: textColorInput }}>{nameInput}</p>
                        </article>
                    </div>
                )}

                <div className="flex justify-center items-center">
                    <button type="submit" className="mb-7 bg-blue-600 h-9 flex justify-center items-center text-white font-bold rounded w-11/12 max-w-lg cursor-pointer hover:bg-blue-500 transition-all">
                        Cadastrar
                    </button>
                </div>
            </form>

            <h2 className="font-bold text-white mb-4 text-2xl">
                Meus Links
            </h2>

            <article className="flex items-center justify-between w-11/12 max-w-xl rounded py-2 px-2 mb-2 select-none"
            style={{backgroundColor: "#FFF", color: "#000"}}
            >
                <p className="px-2">Canal do youtube</p>
                <div>
                    <button className="border border-dashed bg-neutral-900 p-2 cursor-pointer rounded">
                        <FiTrash2 size={18} color="#fff"/>
                    </button>
                </div>
            </article>
        </div>
    )
}