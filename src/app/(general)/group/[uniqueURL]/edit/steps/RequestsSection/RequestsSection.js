'use client';

import { truncateTextWithDot } from '@/utils/textUtils';
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from './RequestsSection.module.css';


const RequestTableRow = ({ name, location, time, gender, email }) => {
    return (
        <tr>
            <td className={style.tableNameAlt}>
                <div className={style.tableImageAlt}>
                    <img src="/profile_image.png" alt="profile-photo"/>
                </div>
                <div className={style.tableNameCont}>
                    <p className={style.tableMainName}>{truncateTextWithDot(name, 20)}</p>
                    <div className={style.tableLocTime}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99992 8.95297C9.14867 8.95297 10.0799 8.02172 10.0799 6.87297C10.0799 5.72422 9.14867 4.79297 7.99992 4.79297C6.85117 4.79297 5.91992 5.72422 5.91992 6.87297C5.91992 8.02172 6.85117 8.95297 7.99992 8.95297Z" stroke="#625F5F" strokeWidth="1.3"/>
                            <path d="M2.41379 5.65968C3.72712 -0.113657 12.2805 -0.106991 13.5871 5.66634C14.3538 9.05301 12.2471 11.9197 10.4005 13.693C9.06046 14.9863 6.94046 14.9863 5.59379 13.693C3.75379 11.9197 1.64712 9.04634 2.41379 5.65968Z" stroke="#625F5F" strokeWidth="1.3"/>
                        </svg>
                        <p className={style.tableMiniLoc}>{ location }</p> 
                        <p className={style.tableMiniTime}>{ time }</p>
                    </div>
                </div>
            </td>
            <td className={style.desktopOnlyShow}>{ gender }</td>
            <td className={style.desktopOnlyShow}>{ email }</td>
            <td>
                <div className={style.tableBtns}>
                    <CustomButton size="tableButtonSize"><img className={style.mobileOnlyShow} src="/white_tick.svg" alt=">" /><span className={style.desktopOnlyShow}>Accept</span></CustomButton>
                    <CustomButton size="tableButtonSize" coloring="inverseColoring"><img className={style.mobileOnlyShow} src="/cancel.svg" alt="x" /><span className={style.desktopOnlyShow}>Reject</span></CustomButton>
                </div>
            </td>
        </tr>
    );
};

const RequestsSection = ({members}) => {
    return (
        <div className={style.editMembersContainer}>
            <div className={style.editMembersContainerMain}>
                <div className={style.editMembersHeader}>
                    <p className={style.editMembersHeaderTitle}>Pending requests</p>
                </div>
                <div className={style.editMembersTableContainer}>
                    <table className={style.editGeneralTableAlt}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th className={style.desktopOnlyShow}>Gender</th>
                                <th className={style.desktopOnlyShow}>Email address</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <RequestTableRow
                                name="Opeyemi Odedeyi"
                                location="United Kingdom"
                                time="1 hr"
                                gender="male"
                                email="male@gmail.com"/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RequestsSection;