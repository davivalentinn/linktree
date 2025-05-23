import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input/Input";
import { useEffect, useState, type FormEvent } from "react";
import { FiTrash2 } from "react-icons/fi"

import { db } from "../../services/firebaseConnection";
import {
    addDoc, //Gera um uid aleatorio
    collection,
    onSnapshot, //Busca as informações em tempo real no bd
    query,
    orderBy,
    doc,
    deleteDoc
}
    from 'firebase/firestore';

interface LinkProps {
    id: string;
    name: string;
    url: string;
    bg: string;
    color: string;
}

export function Admin() {
    const [nameInput, setNameInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [textColorInput, setTextColorInput] = useState("#00000");
    const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1");

    const [links, setLinks] = useState<LinkProps[]>([]);

    useEffect(() => {
        const linksRef = collection(db, "links");
        const queryRef = query(linksRef, orderBy("created", "asc")); //Personaliza e ordena a busca no bd

        const unsub = onSnapshot(queryRef, (snapshot) => {
            let lista = [] as LinkProps[];

            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    name: doc.data().name,
                    url: doc.data().url,
                    bg: doc.data().bg,
                    color: doc.data().color
                })
            })

            setLinks(lista);
        })


    }, [])

    function handleRegister(e: FormEvent) {
        e.preventDefault();

        if (nameInput === '' || urlInput === '') {
            alert('Preenchan todos os campos')
            return;
        }

        addDoc(collection(db, "links"), {
            name: nameInput,
            url: urlInput,
            bg: backgroundColorInput,
            color: textColorInput,
            created: new Date()
        })

            .then(() => {
                setNameInput("")
                setUrlInput("")
            })

            .catch((error) => {
                alert("Erro ao cadastrar no banco de dados")
                console.log(error);
                return;
            })
    }

    async function handleDeleteLink(id: string){
        const docRef = doc(db, "links", id)

        await deleteDoc(docRef);
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

               
                    <button type="submit" className="mb-7 bg-blue-600 h-9 flex justify-center items-center text-white font-bold rounded cursor-pointer hover:bg-blue-500 transition-all">
                        Cadastrar
                    </button>
                
            </form>

            <h2 className="font-bold text-white mb-4 text-2xl">
                Meus Links
            </h2>

            {links.map((link) => (
                <article key={link.id} className="flex items-center justify-between w-11/12 max-w-xl rounded py-2 px-2 mb-2 select-none"
                    style={{ backgroundColor: link.bg, color: link.color }}
                >
                    <p className="px-2">{link.name}</p>
                    <div>
                        <button className="border border-dashed bg-neutral-900 p-2 cursor-pointer rounded"
                        onClick={ () => handleDeleteLink(link.id)}
                        >
                            <FiTrash2 size={18} color="#fff" />
                        </button>
                    </div>
                </article>
            ))}
        </div>
    )
}