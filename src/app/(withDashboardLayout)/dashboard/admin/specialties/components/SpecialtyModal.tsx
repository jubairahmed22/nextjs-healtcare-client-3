import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const SpecialtyModal = ({open, setOpen} : TProps) => {

    const handleFormSubmit = (values: FieldValues) => {
        
        const data = modifyPayload(values);
        try {

        }
        catch (err : any) {
            console.log(err.message);
            
        }
    };

    return (
        <PHModal open={open} setOpen={setOpen} title="Create A New Specialty">
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
        </PHModal>
    );
};

export default SpecialtyModal;