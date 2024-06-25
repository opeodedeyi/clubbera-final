import style from "./BinaryOption.module.css";

const BinaryOption = ({ children, truthyPlaceholder, falseyPlaceholder, boolValue, setBoolValue }) => {
    const handleTrueButtonClick = () => {
        setBoolValue(true);
    };

    const handleFalseButtonClick = () => {
        setBoolValue(false);
    };

    return (
        <div className={style.formInputTextarea}>
            {children &&
                <div className={style.formLabelTextarea}>
                    <label className={style.formLabel}>{ children }</label>
                </div>
            }

            <div className={style.binaryOptionInput}>
                <button onClick={handleTrueButtonClick} type="button" className={`${style.btnOption} ${boolValue===true ? style.btnOptionSelected : ''}`}>{truthyPlaceholder}</button>
                <button onClick={handleFalseButtonClick} type="button" className={`${style.btnOption} ${boolValue===false ? style.btnOptionSelected : ''}`}>{falseyPlaceholder}</button>
            </div>
        </div>
    )
}

export default BinaryOption;
