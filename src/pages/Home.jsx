import { Activity, useEffect, useState } from "react";

function Home() {

    const language = [
        { code: 'en', name: "Inglês" },
        { code: 'es', name: "Espanhol" },
        { code: 'fr', name: "Francês" },
        { code: 'de', name: "Alemão" },
        { code: 'it', name: "Italiano" },
        { code: 'pt', name: "Português" }
    ];

    const [sourceLang, setSourceLang] = useState("pt")
    const [targetLang, setTargeLang] = useState("en")
    const [sourceText, setSourceText] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [textTranslate, setTextTranslate] = useState("")

    const handleTranlsate = async () => {
        if (!sourceText.trim()) {
            setTextTranslate("")
            return
        }

        try {
            setIsLoading(true)

            const response = await fetch(`https://api.mymemory.translated.net/get?q=${sourceText}&langpair=${sourceLang}|${targetLang}`)

            if (!response.ok) {
                throw new Error(`HTTP ERROR: ${response.status}`);
            }

            const data = await response.json()
            setTextTranslate(data.responseData.translatedText)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleTranlsate()
        }, 500)

        return () => clearTimeout(timer)
    }, [sourceText, sourceLang, targetLang])


    return (
        <>
            <div className="min-h-screen bg-primary flex flex-col">
                <header className={"bg-primary shadow-sm"}>
                    <div className={"max-w-5xl mx-auto px-4 py-3 flex items-center"}>
                        <h1 className={"text-header text-2xl font-bold"}>Translator</h1>
                    </div>
                </header>

                <main className="flex grow items-start justify-center px-4 py-8">
                    <div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)} className="text-sm text-text bg-transparent border-none focus:outline-none cursor-pointer">
                                {language.map(lg => (
                                    <option value={lg.code} key={lg.code}>{lg.name}</option>
                                ))}
                            </select>

                            <button className="p-2 rounded-full hover:bg-gray-100 outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                </svg>
                            </button>

                            <select onChange={(e) => setTargeLang(e.target.value)} value={targetLang} className="text-sm text-text bg-transparent border-none focus:outline-none cursor-pointer">
                                {language.map(lg => (
                                    <option value={lg.code} key={lg.code}>{lg.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-4">
                                <textarea value={sourceText} onChange={(e) => setSourceText(e.target.value)} placeholder="Digite seu Texto..." className="w-full h-40 text-lg text-text bg-transparent resize-none border-none outline-none"></textarea>
                            </div>

                            <div className=" relative p-4 bg-secondary border-l border-gray-200">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Activity mode={isLoading ? "visible" : "hidden"}>
                                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
                                    </Activity>
                                </div>

                                    <p className="text-lg text-text">{textTranslate}</p>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="bg-white border-t border-gray-200 mt-auto">
                    <div className="max-w-5xl mx-auto px-4 py-3 text-sm text-header">
                        &copy; 2026 Translator App
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home