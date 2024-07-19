import style from "./MainInput.module.css";

const MainInput = ( props ) => {
    if (props.type==='textarea') {
        return (
            <div className={style.formInputTextarea}>
                <div className={style.formLabelTextarea}>
                    <label className={style.formLabel} htmlFor={props.input}>{ props.input }</label>
                </div>

                <textarea
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onFocus={props.onFocus}
                    onChange={props.onChange}>
                </textarea>
            </div>
        )
    } else {
        return (
            <div className={style.mainInputText}>
                <div className={style.formLabelContainer}>
                    <label className={style.formLabel} htmlFor={props.input}>{ props.input }</label>
                </div>
                
                <input
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onFocus={props.onFocus}
                    onChange={props.onChange}
                />
            </div>
        );
    }
}

export default MainInput
