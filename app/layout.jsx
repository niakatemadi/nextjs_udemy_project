import Link from "next/link";
import "../globals.css";
import NavBar from "../components/NavBar";
import { orbitron, roboto } from "./fonts";

export const metadata = {
    title : {
        default : "Indie gamer",
        template : "%s | Indie gamer"
    }
}

export default function RootLayout({ children }) {

    return (
        <html lang="en" className={`${orbitron.variable} ${roboto.variable}`}>
            <body className="px-4 py-2 flex flex-col min-h-screen bg-orange-50">
                <header>
                    <NavBar />
                </header>
                <main className="py-3 grow">
                    {children}
                </main>
                <footer className="border-t py-3 text-center text-xs font-sans">Game and images courtesy of <a href="https://rawg.io/" target="_blank" className="text-blue-700">RAWG</a></footer>
            </body>
        </html>
    );
}