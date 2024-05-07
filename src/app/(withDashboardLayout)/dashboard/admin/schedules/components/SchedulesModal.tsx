import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHForm from "@/components/Forms/PHForm";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { Button, Grid, TabProps } from "@mui/material";
import {  FieldValues } from "react-hook-form";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
 }

const SchedulesModal = ({open, setOpen}: TProps) => {
    const handleFormSubmit = async (values: FieldValues) => {
        console.log(values);
        try {

        } catch (err: any) {
            console.error(err.message);
            
        }
    }
    return (
        <PHModal open={open} setOpen={setOpen}    title="Create Schedule">
              <PHForm onSubmit={handleFormSubmit}>
                <Grid container spacing={266}>
                     <Grid item md={12}>
                        <PHDatePicker name="startDate"></PHDatePicker> 
                     </Grid>
                </Grid>
                  <Button type="submit">Create</Button>
              </PHForm>
        </PHModal>
    );
};

export default SchedulesModal;