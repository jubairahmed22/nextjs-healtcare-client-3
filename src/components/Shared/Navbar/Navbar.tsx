"use client"
import { getUserInfo, isLoggedIn, removeUser } from "@/services/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {

    const userInfo = getUserInfo();

    const router = useRouter()

    // console.log(userInfo);
    // console.log(isLoggedIn());
    const handleLogout = () =>{
        removeUser();
        router.refresh();
    }

    return (
        <Container>
            <Stack py={2}
            direction="row" 
            justifyContent="space-between"
            alignItems="center"
            >
                <Typography variant="h5" component={Link} href="/"
                fontWeight={600}
                >
                    P<Box component="span" color="primary.main">H</Box> Health Care
                </Typography>

            <Stack direction="row" justifyContent="space-between" gap={4} >
                <Typography component={Link} href="/consultation">Consultation</Typography>
                <Typography component={Link} href="/">Health Plans</Typography>
                <Typography component={Link} href="/">Medicine</Typography>
                <Typography component={Link} href="/">Diagnostics</Typography>
                <Typography component={Link} href="/">NGOs</Typography>
            </Stack>
            { userInfo?.userId ? 
            <Button onClick={handleLogout}  color="error">LOGOUT</Button>
            :
            <Button component={Link} href="/login">LOGIN</Button>
            }
            </Stack>
        </Container>
    );
};

export default Navbar;