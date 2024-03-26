import { Box, Container, Stack } from "@mui/material";

const registerPage = () => {
    return (
        <div>
            <Container>
                <Stack sx={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Box sx={{
                    maxWidth: 600,
                    width: "100%",
                    boxShadow: 1,
                    borderRadius: 1,
                    p: 4,
                }}>

                </Box>
                </Stack>
            </Container>
        </div>
    );
};

export default registerPage;