import Button from "../component/Button";
import InputField from "../component/inputField";
import Form from "../layout/Form";
import { Link } from "react-router-dom";


const Register = () => {
    return(
    <>
    <div class="flex flex-col justify-center items-center h-auto bg-white ">
        <Form namaForm="SIGN UP">
            <InputField label="Name" typeInput="text" placeholder="Your name"/>
            <InputField label="Email" typeInput="email" placeholder="name@gmail.com"/>
            <InputField label="Password" typeInput="password" placeholder="•••••••••"/>
            <InputField label="Phone" typeInput="tel" placeholder="+62"/>
            <InputField label="Country" typeInput="text" placeholder="Jakarta"/>
            <div class="flex flex-col items-center py-4">
            <Link to="/"><Button  idButton="SubmitRegister" nameButton="Submit" backgroundColorButton="#be8511"/></Link>
            <p class="py-4">Already Have an Account? <span class="text-blue-700 font-bold"><Link to="/Login">Sign In</Link></span></p>
            </div>
        </Form>
    </div>

    </>

        
    )
}

export default Register;