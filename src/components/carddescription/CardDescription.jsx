import style from "./carddescription.module.css"

export default function ({ title, description }) {

    return (< div className={style.card_description}  ><h3>{title}</h3><p>{description}</p></div>)
}