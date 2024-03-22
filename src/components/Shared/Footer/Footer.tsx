import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
    return (
        <Box bgcolor="rgb(17 26 34) " py={5}>
            <Container>
            <Stack 
            direction="row" 
            justifyContent="center"
            >

                <Typography color="white" component={Link} href="/consultation">Consultation</Typography>
                <Typography color="white" component={Link} href="/">Health Plans</Typography>
                <Typography color="white" component={Link} href="/">Medicine</Typography>
                <Typography color="white" component={Link} href="/">Diagnostics</Typography>
                <Typography color="white" component={Link} href="/">NGOs</Typography>
       
            </Stack>
            </Container>
        </Box>
    );
};

export default Footer;