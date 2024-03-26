import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const LoginPage = () => {
    return (
        <Container>
            <Stack sx={{
                height: "100vh",
                justifyContent: 'center',
                alignItems: "center"
            }}>
             <Box
              sx={{
                maxWidth: 600,
                width: "100%",
                boxShadow: 1,
                borderRadius: 1,
                p: 4,
                textAlign: "center"
              }}
             >
<Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={assets.svgs.logo}
                width={50}
                height={50}
                alt="logo"
              ></Image>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  Patient Register
                </Typography>
              </Box>
            </Stack>
             </Box>
            </Stack>
        </Container>
    );
};

export default LoginPage;