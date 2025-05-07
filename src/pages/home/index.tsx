import { Footer } from "../../components/Footer/Footer"
import { SocialMedia } from "../../components/SocialMedia/SocialMedia"
export function Home() {
    return (
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">Davi Valetins</h1>
            <span className="text-gray-50 mb-5 mt-3">Veja meus links <i className="ri-corner-right-down-fill text-gray-50"></i></span>

            <main className="flex flex-col w-11/12 max-w-xl text-center">
                <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-95 cursor-pointer">
                    <a>
                        <p className="md:text-lg text-base">Canal no youtube</p>
                    </a>
                </section>

                <Footer>
                
                    
                    
                </Footer>

            </main>
        </div>
    )
}