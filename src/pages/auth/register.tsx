import { useNavigate } from "react-router-dom";
import { useAuthState } from "../../logic/auth/hook"
import { useEffect } from "react";
import { RegisterForm } from "./components/RegisterForm";

const RegisterPage: React.FC = () => {
    const [auth] = useAuthState();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth?.token) {
            navigate("/");
        }
    }, [auth?.token, navigate])
    return (
        <div className="bg-white flex justify-center">
            <div className="bg-background-100 flex flex-col justify-center items-center w-screen max-w-[800px] min-w-[375px] min-h-screen shadow-lg p-1">
                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage;