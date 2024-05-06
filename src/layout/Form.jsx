import LogoKBC from "../Image/KBC-Logo_1594107681 2.png"

const Form = (props) => {
    return(
        <div class="flex flex-col justify-center bg-white w-4/5 md:w-5/12">
            <div class="flex justify-center">
            <img
                src={LogoKBC}
                alt="gambar"
                className="h-28"
                />
            </div>
            <form>
                <div class="text-center font-black text-xl pb-4">
                    {props.namaForm}
                </div>
                <div>
                    {props.children}
                </div>
            </form>
        </div>
    )
}

export default Form;