import style from "./GroupTag.module.css";

const GroupTag = ({ privategroup=false, viewtype="desktopOnlyShow" }) => {
    return (
        <>
            {privategroup === false ? (
                <div className={`${style.groupKeydetailsPermission} ${style.publicColoring} ${style[viewtype]}`}>Public</div>
            ) : (
                <div className={`${style.groupKeydetailsPermission} ${style.privateColoring} ${style[viewtype]}`}>Private</div>
            )}
        </>
    );
}

export default GroupTag