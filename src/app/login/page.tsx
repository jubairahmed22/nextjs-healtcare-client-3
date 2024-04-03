"use client"
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/PHInput";



const LoginPage = () => {
  const router = useRouter()


  const handleLogin = async(values: FieldValues) => {
  //  console.log(values);
    try {
      const res = await userLogin(values);
      if(res?.data?.accessToken){
        toast.success(res?.message);
         storeUserInfo({ accessToken : res?.data?.accessToken});
         router.push("/");
      }      
    }
    catch (err: any) {
      console.log(err.message);
      
    }
    
  };
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
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
            textAlign: "center",
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
              <Typography variant="h6" fontWeight={00}>
                Patient Login
              </Typography>
            </Box>
          </Stack>
          <Box>
          <PHForm onSubmit={handleLogin}>

              <Grid container spacing={2} my={1}>
               
                <Grid item md={6}>
                  <PHInput
                    name= "email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                 

                  />
                </Grid>
               
              </Grid>
            <Typography mb={1} textAlign="end" component="p" fontWeight={300}>
              Forgot Password?
            </Typography>
            <Button
              sx={{
                margin: "10px 0px",
              }}
              fullWidth={true}
              type="submit"
            >
              Login
            </Button>
            <Typography component="p" fontWeight={300}>
              Don&apos;t have an account? <Link href="/register">Create an account</Link>
            </Typography>
            </PHForm>

          </Box>
          
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
