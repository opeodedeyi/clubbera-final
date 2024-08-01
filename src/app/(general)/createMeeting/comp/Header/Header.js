import style from './Header.module.css';

export default function CreateMeetingHeader() {
    return (
        <div className={style.createHeaderContainer}>
            <div className={style.createMeetingText}>
                <h4>Add a new meeting</h4>
                <p>Create a new meeting for your community</p>
            </div>
        </div>
    );
}