import style from "./button.module.css"

export default function ({ onClick, language }) {
    return (<button className={style.btn} onClick={onClick}  >{language.title}</button>)
}