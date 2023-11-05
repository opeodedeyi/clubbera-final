'use client';

import "./grouptag.css";

const GroupTag = ({ privategroup=false, viewtype="desktop-only-show" }) => {
    return (
        <>
            {privategroup === false ? (
                <div className={`group-keydetails-permission public-coloring ${viewtype}`}>Public</div>
            ) : (
                <div className={`group-keydetails-permission private-coloring ${viewtype}`}>Private</div>
            )}
        </>
    );
}

export default GroupTag