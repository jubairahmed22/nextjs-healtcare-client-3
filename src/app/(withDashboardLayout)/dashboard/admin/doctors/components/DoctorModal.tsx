import { defaultValues } from "@/app/register/page";
import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { PHSelectField } from "@/components/Forms/PHSelectField";
import PHFullScreenModal from "@/components/Shared/PHModal/PHFullScreenModal";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useCreateDoctorMutation } from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const DoctorModal = ({open, setOpen} : TProps) => {
const [createDoctor] = useCreateDoctorMutation();

    const handleFormSubmit = async (values: FieldValues) => {
        
    values.doctor.experience = Number(values.doctor.experience);
    values.doctor.apointmentFee = Number(values.doctor.apointmentFee);
    const data = modifyPayload(values);
      //   console.log(values);
      
        
        try {
          const res = await createDoctor(data).unwrap();
          console.log(res);

          if(res?.id){
            toast.success("Doctor created successfully");
            setOpen(false);
          }          
        }
        catch (err : any) {
            console.log(err.message);
            
        }
    };
    const defaultValues = {
        doctor: {
            email: "",
            name: "",
            contactNumber: "",
            address: "",
            registrationNumber: "",
            gender: "",
            experience: 0,
            apointmentFee: 0,
            qualification: "",
            currentWorkingPlace: "",
            designation: "",
            profilePhoto: ""
        },
        password: "",
    }
    
    return (
        <PHFullScreenModal open={open} setOpen={setOpen} title="Create A New Specialty">
            <PHForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
               <Grid container spacing={2} sx={{my:5}}>
                 <Grid item xs={12} sm={12} md={4}>
                    <PHInput 
                    name="doctor.name"
                    label="Name"
                    fullWidth={true}
                    sx={{mb:2}}
                    />
                 </Grid>
                 <Grid item xs={12} sm={12} md={4}>
                    <PHInput 
                    name="doctor.email"
                    type="email"
                    label="Email"
                    fullWidth={true}
                    sx={{mb:2}}
                    />
                 </Grid>
                 <Grid item xs={12} sm={12} md={4}>
                    <PHInput 
                    name="password"
                    type="password"
                    label="Password"
                    fullWidth={true}
                    sx={{mb:2}}
                    />
                 </Grid>
                 <Grid item xs={12} sm={12} md={4}>
                    <PHInput 
                    name="doctor.contactNumber"
                    label="Contact Number"
                    fullWidth={true}
                    sx={{mb:2}}
                    />
                 </Grid>
                 <Grid item xs={12} sm={12} md={4}>
                    <PHInput 
                    name="doctor.address"
                    label="Address"
                    fullWidth={true}
                    sx={{mb:2}}
                    />
                 </Grid>
                 <Grid item xs={12} sm={12} md={4}>
                    <PHInput 
                    name="doctor.registrationNumber"
                    label="Registration Number"
                    fullWidth={true}
                    sx={{mb:2}}
                    />
                 </Grid>
                 <Grid item xs={12} sm={12} md={4}>
                    <PHInput 
                    name="doctor.experience"
                    type="number"
                    label="Experience"
                    fullWidth={true}
                    sx={{mb:2}}
                    />
                 </Grid>
                 <Grid item xs={12} sm={12} md={4}>
                    <PHSelectField 
                    items={Gender}
                    name="doctor.gender"
                    label="Gender"
                    fullWidth={true}
                    sx={{mb:2}}
                    />
                 </Grid>
                   <Grid item xs={12} sm={12} md={4}>
                    <PHInput 
                    name="doctor.appointmentFee"
                    type="number"
                    label="Appointment Fee"
                    fullWidth={true}
                    sx={{mb:2}}
                    />
                 </Grid>
                   <Grid item xs={12} sm={12} md={4}>
                    <PHInput 
                    name="doctor.qualification"
                    type="text"
                    label="Qualification"
                    fullWidth={true}
                    sx={{mb:2}}
                    />
                 </Grid>
                   <Grid item xs={12} sm={12} md={4}>
                    <PHInput 
                    name="doctor.currentWorkingPlace"
                    type="text"
                    label="Current Working Place"
                    fullWidth={true}
                    sx={{mb:2}}
                    />
                 </Grid>
                   <Grid item xs={12} sm={12} md={4}>
                    <PHInput 
                    name="doctor.designation"
                    type="text"
                    label="Designation"
                    fullWidth={true}
                    sx={{mb:2}}
                    />
                 </Grid>
               </Grid>
               <Button sx={{
                margin: "10px 0px"
              }}  
              type="submit"
              >
                Create
              </Button>
            </PHForm>
        </PHFullScreenModal>
    );
};

export default DoctorModal;