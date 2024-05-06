const Button = (props) => {
  return (
    <>
      <button
        id={props.idButton}
        type="button"
        class="focus:outline-none bg-[#be8511] text-white hover:bg-yellow-500 focus:ring-yellow-300 rounded-lg px-4 py-2 max-sm:rounded-md max-sm:py-1 max-sm:px-2 max-sm:font-semibold font-bold max-sm:text-[9px]"
        style={{
          backgroundColor: props.backgroundColorButton,
          fontWeight: props.buttonFontWeight,
        }}
      >
        {props.nameButton}
      </button>
    </>
  );
};

export default Button;
