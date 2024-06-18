import style from "./GroupTag.module.css";

const GroupTag = ({ privategroup=false, viewtype="desktop-only-show" }) => {
    return (
        <>
            {privategroup === false ? (
                <div className={`${style.groupKeydetailsPermission} ${style.publicColoring} ${viewtype}`}>Public</div>
            ) : (
                <div className={`${style.groupKeydetailsPermission} ${style.privateColoring} ${viewtype}`}>Private</div>
            )}
        </>
    );
}

export default GroupTag