import style from "./CheckBoxInput.module.css";

const CheckboxInput = ({ label, name, children, checked, onChange }) => {
    return (
        <div className={style.checkboxInputText}>
            {label &&
                <div className={`${style.formLabelContainer} ${style.checkboxLabelContainer}`}>
                    <label>{ label }</label>
                </div>
            }
            
            <label className={style.checkboxMainContainer}>
                <input
                    name={name}
                    type="checkbox"
                    checked={checked} 
                    onChange={onChange} />
                <span></span>
                <p className={style.checkboxText}>{children}</p>
            </label>
        </div>
    );
}

export default CheckboxInput
