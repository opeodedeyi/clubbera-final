import { truncateTextWithDot } from '@/utils/textUtils';
import { formatDate } from '@/utils/dateUtils';
import style from './MembersTable.module.css';


const MemberTableRow = ({ user }) => {
    return (
        <tr>
            <td className={style.editGeneralTableName}>
                <div className={style.editGeneralTableImage}>
                    <img src={user.avatar || '/profile.png'} alt="profile-photo"/>
                </div>
                <span>{truncateTextWithDot(user.full_name, 15)}</span>
            </td>
            <td>{user.role || 'Member'}</td>
            <td>{user.gender || 'not set'}</td>
            <td>{user.location || 'not set'}</td>
            <td>{user.email}</td>
            <td>{formatDate(user.date_joined)}</td>
            <td className={style.editGeneralTableToolkit}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3.25C8.41421 3.25 8.75 2.91421 8.75 2.5C8.75 2.08579 8.41421 1.75 8 1.75C7.58579 1.75 7.25 2.08579 7.25 2.5C7.25 2.91421 7.58579 3.25 8 3.25Z" stroke="#625F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8.75C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75Z" stroke="#625F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 14.25C8.41421 14.25 8.75 13.9142 8.75 13.5C8.75 13.0858 8.41421 12.75 8 12.75C7.58579 12.75 7.25 13.0858 7.25 13.5C7.25 13.9142 7.58579 14.25 8 14.25Z" stroke="#625F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </td>
        </tr>
    );
};


export default function MembersTable({ users }) {
    return (
        <table className={style.editGeneralTable}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Gender</th>
                    <th>Location</th>
                    <th>Email address</th>
                    <th>Date joined</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <MemberTableRow
                        key={user.id}
                        user={user}
                    />
                ))}
            </tbody>
        </table>
    );
};