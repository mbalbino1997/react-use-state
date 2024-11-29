import style from "./main.module.css"
import languages from "../../assets/languages"
export default function () {
    return (
        <main>
            <div>
                {languages.map(language => <button key={language.id}>{language.title}</button>)}
            </div>

        </main>
    )
}