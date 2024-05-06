import Button from "../component/Button";
import InputField from "../component/inputField";
import Form from "../layout/Form";
import { Link } from "react-router-dom";


const Login = () => {

    return(
    <>
    <div class="flex flex-col justify-center items-center h-screen bg-white " >
        <Form namaForm="SIGN IN">
            <InputField label="Email" typeInput="email" placeholder="name@gmail.com"/>
            <InputField label="Password" typeInput="password" placeholder="•••••••••"/>
            <div class="flex flex-col items-center py-4">
            <Link to="/"><Button  idButton="SubmitLogin" nameButton="Submit" backgroundColorButton="#be8511"/></Link>
            <p class="py-4">Don’t Have an Account? <span class="text-blue-700 font-bold"><Link to="/Register">Sign Up</Link></span></p>
            </div>
        </Form>
    </div>

    </>

        
    )
}

export default Login;