import style from "./main.module.css"
import languages from "../../assets/languages"
import { useState } from 'react'
export default function () {
    const [count, setCount] = useState(1);
    return (
        <main>
            <div>
                {languages.map(language => <button onClick={() => count !== language.id ? setCount(language.id) : setCount(0)} key={language.id}>{language.title}</button>)}
            </div>
            <div>
                {languages.map(language => count === language.id && < div key={language.id} ><h3>{language.title}</h3><p>{language.description}</p></div>)}

            </div>

        </main >
    )
}