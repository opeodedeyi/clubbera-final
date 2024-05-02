'use client';

import '@/app/style/groupdetails.css';


const AboutSection = ({group, location, date, time}) => {
    return (
        <div className="group-other">
            <div className="group-about-description">
                <h5 className="group-about-title">Group description</h5>
                <p className="group-about-content">{group.description}</p>
            </div>
            <div className="group-meeting-time">
                <div className="group-meeting-time-container">
                    <h5 className="group-about-title">Next Meeting time</h5>
                    <div className="group-meeting-items">
                        <div className="meeting-time-item">
                            <div className="meeting-time-item-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M7.99992 8.95346C9.14867 8.95346 10.0799 8.02221 10.0799 6.87346C10.0799 5.7247 9.14867 4.79346 7.99992 4.79346C6.85117 4.79346 5.91992 5.7247 5.91992 6.87346C5.91992 8.02221 6.85117 8.95346 7.99992 8.95346Z" stroke="#777474" strokeWidth="1.2"/>
                                    <path d="M2.4133 5.66016C3.72664 -0.113169 12.28 -0.106502 13.5866 5.66683C14.3533 9.0535 12.2466 11.9202 10.4 13.6935C9.05997 14.9868 6.93997 14.9868 5.5933 13.6935C3.7533 11.9202 1.64664 9.04683 2.4133 5.66016Z" stroke="#777474" strokeWidth="1.2"/>
                                </svg>
                            </div>
                            <div className="meeting-time-item-text">
                                <p className="meeting-time-item-title">Location</p>
                                <p className="meeting-time-item-content">{location}</p>
                            </div>
                        </div>
                        <div className="meeting-time-item">
                            <div className="meeting-time-item-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.33325 1.3335V3.3335" stroke="#777474" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.6667 1.3335V3.3335" stroke="#777474" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M2.33325 6.06006H13.6666" stroke="#777474" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14 5.66683V11.3335C14 13.3335 13 14.6668 10.6667 14.6668H5.33333C3 14.6668 2 13.3335 2 11.3335V5.66683C2 3.66683 3 2.3335 5.33333 2.3335H10.6667C13 2.3335 14 3.66683 14 5.66683Z" stroke="#777474" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.4632 9.13314H10.4692" stroke="#777474" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.4632 11.1331H10.4692" stroke="#777474" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.99691 9.13314H8.0029" stroke="#777474" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.99691 11.1331H8.0029" stroke="#777474" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5.52962 9.13314H5.53561" stroke="#777474" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5.52962 11.1331H5.53561" stroke="#777474" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="meeting-time-item-text">
                                <p className="meeting-time-item-title">Date</p>
                                <p className="meeting-time-item-content">{date}</p>
                            </div>
                        </div>
                        <div className="meeting-time-item">
                            <div className="meeting-time-item-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M14.6666 8.00016C14.6666 11.6802 11.6799 14.6668 7.99992 14.6668C4.31992 14.6668 1.33325 11.6802 1.33325 8.00016C1.33325 4.32016 4.31992 1.3335 7.99992 1.3335C11.6799 1.3335 14.6666 4.32016 14.6666 8.00016Z" stroke="#777474" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.4734 10.1202L8.40675 8.88684C8.04675 8.6735 7.75342 8.16017 7.75342 7.74017V5.00684" stroke="#777474" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="meeting-time-item-text">
                                <p className="meeting-time-item-title">Time</p>
                                <p className="meeting-time-item-content">{time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;