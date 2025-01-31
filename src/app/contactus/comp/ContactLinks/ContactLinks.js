import Link from "next/link";
import { BsLinkedin, BsTelephone, BsTwitterX } from "react-icons/bs";
import style from "./ContactLinks.module.css";


export default function ContactLinks() {
    return (
        <div className={style.linkWrapper}>
            <div className={style.linkContainer}>
                <div className={style.linkText}>
                    <h4 className={style.linkTextTitle}>Contact Our Team</h4>
                    <p className={style.linkTextDescription}>Need quick assistance? Start a chat with us we’re here to help in real time</p>
                </div>
                
                <div className={style.linkLinks}>
                    <div className={style.linkItem}><BsTelephone /> <Link href="">+44 654 7654 321</Link></div>
                    <div className={style.linkItem}><BsTwitterX /> <Link href="">Message us on X</Link></div>
                    <div className={style.linkItem}><BsLinkedin /> <Link href="">Message us on Linkedin</Link></div>
                </div>
            </div>

            <div className={style.linkContainer}>
                <div className={style.linkText}>
                    <h4 className={style.linkTextTitle}>Call us</h4>
                    <p className={style.linkTextDescription}>Call our team Mon-Fri from 8am to 5pm</p>
                </div>
                
                <div className={style.linkLinks}>
                    <div className={style.linkItem}><BsTelephone /> <Link href="">+44 654 7654 321</Link></div>
                </div>
            </div>
        </div>
    );
}