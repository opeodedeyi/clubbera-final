'use client';

import { truncateTextWithDot } from '@/utils/textUtils';
import CustomButton from "@/components/utility/custombutton";

const RequestTableRow = ({ name, location, time, gender, email }) => {
    return (
        <tr>
            <td className="edit-general-table-name-alt">
                <div className="edit-general-table-image-alt">
                    <img src="/profile_image.png" alt="profile-photo"/>
                </div>
                <div className="edit-general-table-name-cont">
                    <p className="edit-general-table-main-name">{truncateTextWithDot(name, 20)}</p>
                    <div className="edit-general-table-loc-time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99992 8.95297C9.14867 8.95297 10.0799 8.02172 10.0799 6.87297C10.0799 5.72422 9.14867 4.79297 7.99992 4.79297C6.85117 4.79297 5.91992 5.72422 5.91992 6.87297C5.91992 8.02172 6.85117 8.95297 7.99992 8.95297Z" stroke="#625F5F" strokeWidth="1.3"/>
                            <path d="M2.41379 5.65968C3.72712 -0.113657 12.2805 -0.106991 13.5871 5.66634C14.3538 9.05301 12.2471 11.9197 10.4005 13.693C9.06046 14.9863 6.94046 14.9863 5.59379 13.693C3.75379 11.9197 1.64712 9.04634 2.41379 5.65968Z" stroke="#625F5F" strokeWidth="1.3"/>
                        </svg>
                        <p className="table-mini-loc">{ location }</p> 
                        <p className="table-mini-time">{ time }</p>
                    </div>
                </div>
            </td>
            <td className="desktop-only-show">{ gender }</td>
            <td className="desktop-only-show">{ email }</td>
            <td>
                <div className="edit-general-table-btns">
                    <CustomButton size="table-button-size"><img className="mobile-only-show" src="/white_tick.svg" alt=">" /><span className="desktop-only-show">Accept</span></CustomButton>
                    <CustomButton size="table-button-size" coloring="inverse-coloring"><img className="mobile-only-show" src="/cancel.svg" alt="x" /><span className="desktop-only-show">Reject</span></CustomButton>
                </div>
            </td>
        </tr>
    );
};

const RequestsSection = ({members}) => {
    return (
        <div className="edit-members-container">
            <div className="edit-members-container-main">
                <div className="edit-members-header">
                    <p className="edit-members-header-title">Pending requests</p>
                </div>
                <div className="edit-members-table-container">
                    <table className="edit-general-table-alt">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th className="desktop-only-show">Gender</th>
                                <th className="desktop-only-show">Email address</th>
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