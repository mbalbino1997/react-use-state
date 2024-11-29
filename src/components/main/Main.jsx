import style from "./main.module.css"
import languages from "../../assets/languages"
import { useState } from 'react'
export default function () {
    const [count, setCount] = useState(1);

    return (
        <main>
            <div className={style.wrapper}>
                {languages.map(language => <button className={`${count === language.id && style.btn_active} ${style.btn}`} onClick={() => count !== language.id ? setCount(language.id) : setCount(0)} key={language.id}>{language.title}</button>)}
            </div>
            <div>
                {languages.map(language => count === language.id && < div key={language.id} ><h3>{language.title}</h3><p>{language.description}</p></div>)}
                {count === 0 && <div><h3>Nessun linguaggio selezionato</h3></div>}
            </div>

        </main >
    )
}