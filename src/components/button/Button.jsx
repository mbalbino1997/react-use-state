import style from "./button.module.css"

export default function ({ onClick = () => { }, language, isActive }) {
    return (<button className={`${style.btn} ${isActive && style.btn_active}`} onClick={onClick}  >{language.title}</button>)
}