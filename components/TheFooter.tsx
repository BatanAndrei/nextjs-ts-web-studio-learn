import style from './TheFooter.module.css';
import { FOOTER_EMAIL } from "@/const";

export default function TheFooter ()  {
    return (
        <footer className={style.footer}>
            <div>&copy; 2023 Web studio</div>
            <a href={`mailto:${FOOTER_EMAIL}`}>{FOOTER_EMAIL}</a>
        </footer>
    )
}