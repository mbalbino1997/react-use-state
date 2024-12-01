import style from "./main.module.css"
import languages from "../../assets/languages"
import { useState } from 'react'
import Button from "../button/Button";
import CardDescription from "../carddescription/CardDescription";
export default function () {
    const [count, setCount] = useState(1);

    return (
        <main>
            <div className={style.wrapper}>
                {languages.map(language => <Button key={language.id} language={language} isActive={count === language.id} onClick={() => count !== language.id ? setCount(language.id) : setCount(0)} />)}
            </div>
            <div>
                {languages.map(language => count === language.id && <CardDescription key={language.id} title={language.title} description={language.description} />)}
                {count === 0 && <div className={style.selection_error}><h3>NESSUN LINGUAGGIO SELEZIONATO</h3></div>}
            </div>

        </main >
    )
}