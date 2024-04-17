import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHFullScreenModal from "@/components/Shared/PHModal/PHFullScreenModal";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const DoctorModal = ({open, setOpen} : TProps) => {
const [createSpecialty] = useCreateSpecialtyMutation();

    const handleFormSubmit = async (values: FieldValues) => {
        
        const data = modifyPayload(values);
        try {
          const res = await createSpecialty(data).unwrap();
          if(res?.id){
            toast.success("Specialty created successfully");
            setOpen(false);
          }          
        }
        catch (err : any) {
            console.log(err.message);
            
        }
    };

    return (
        <PHFullScreenModal open={open} setOpen={setOpen} title="Create A New Specialty">
            <PHForm onSubmit={handleFormSubmit}>
                    <Grid container spacing={2}>
                    <Grid item spacing={6}>
                          <PHInput name="title" label="Title">
                          </PHInput>
                     </Grid>
                     <Grid item spacing={6}>
                         <PHFileUploader name="file" label="Upload File"></PHFileUploader>
                     </Grid>
                    </Grid>
                    <Button sx={{mt:1}} type="submit">
                        Create
                    </Button>
            </PHForm>
        </PHFullScreenModal>
    );
};

export default DoctorModal;