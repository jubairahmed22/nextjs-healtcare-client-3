import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import assets from "@/assets";
import Image from "next/image";

const registerPage = () => {
  return (
    <div>
      <Container
        sx={{
          padding: "50px",
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: 600,
              width: "100%",
              boxShadow: 1,
              borderRadius: 1,
              p: 4,
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
            <Box>
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default registerPage;
