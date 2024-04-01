import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
    
    const userInfo = getUserInfo();

    const router = useRouter()

    // console.log(userInfo);
    // console.log(isLoggedIn());
    const handleLogout = () =>{
        removeUser();
        router.refresh();
    }
    return (
        <>
            { userInfo?.userId ? 
            <Button onClick={handleLogout}  color="error">LOGOUT</Button>
            :
            <Button component={Link} href="/login">LOGIN</Button>
            }
        </>
    );
};

export default AuthButton;