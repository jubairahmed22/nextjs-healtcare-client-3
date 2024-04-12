import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const SpecialistModal = ({open, setOpen} : TProps) => {

    const handleFormSubmit = (values: FieldValues) => {};

    return (
        <PHModal open={open} setOpen={setOpen} title="Create A New Specialty">
            <PHForm onSubmit={handleFormSubmit}>
                     <Grid container spacing={2}>
                          <PHInput name="title" label="Title">
                          </PHInput>
                     </Grid>
            </PHForm>
        </PHModal>
    );
};

export default SpecialistModal;