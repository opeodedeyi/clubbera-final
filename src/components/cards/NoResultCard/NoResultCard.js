import { HiOutlineUserGroup } from "react-icons/hi";
import style from './NoResultCard.module.css';

export default function NoResultCard({ message, type='grid' }) {
    return (
        <div className={`
                ${style.noResults}
                ${type==='grid' ? style.noResultGrid : ''}`}>
            <HiOutlineUserGroup size={24} color="var(--color-text-main)"/>
            <p>{message}</p>
        </div>
    );
}