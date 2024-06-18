'use client';

import CustomButton from "@/components/utility/CustomButton/CustomButton";
import { truncateTextWithDot } from '@/utils/textUtils';

const MemberTableRow = ({ name, role, birthday, timeJoined, dateJoined, gender, email }) => {
    return (
        <tr>
            <td className="edit-general-table-name">
                <div className="edit-general-table-image"><img src="/profile_image.png" alt="profile-photo"/></div>
                <span>{truncateTextWithDot(name, 15)}</span>
            </td>
            <td>{role}</td>
            <td>{gender}</td>
            <td>{birthday}</td>
            <td>{email}</td>
            <td>{dateJoined}; {timeJoined}</td>
            <td className="edit-general-table-toolkit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3.25C8.41421 3.25 8.75 2.91421 8.75 2.5C8.75 2.08579 8.41421 1.75 8 1.75C7.58579 1.75 7.25 2.08579 7.25 2.5C7.25 2.91421 7.58579 3.25 8 3.25Z" stroke="#625F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8.75C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75Z" stroke="#625F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 14.25C8.41421 14.25 8.75 13.9142 8.75 13.5C8.75 13.0858 8.41421 12.75 8 12.75C7.58579 12.75 7.25 13.0858 7.25 13.5C7.25 13.9142 7.58579 14.25 8 14.25Z" stroke="#625F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </td>
        </tr>
    );
};

const MemberSection = ({members}) => {
    return (
        <div className="edit-members-container">
            <div className="edit-members-container-main">
                <div className="edit-members-header">
                    <p className="edit-members-header-title">Members</p>
                    <CustomButton size="normal-button-size">Invite user</CustomButton>
                </div>
                <div className="edit-members-table-container">
                    <table className="edit-general-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Gender</th>
                                <th>Birthday</th>
                                <th>Email address</th>
                                <th>Date joined</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <MemberTableRow
                                name="Opeyemi Odedeyi"
                                role="Organizer"
                                birthday="10 May"
                                timeJoined="9:45pm"
                                dateJoined="26 Oct 2023"
                                gender="Male"
                                email="opeyemi@gmail.com"/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MemberSection;