
const Button = (props) => {
    return(
        <>
        <button id={props.idButton} type="button" class="focus:outline-none text-white hover:bg-yellow-500 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" style={{ backgroundColor: props.backgroundColorButton, fontWeight: props.buttonFontWeight }}>{props.nameButton}</button>
        </>
    )
}

export default Button;