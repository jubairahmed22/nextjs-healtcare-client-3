"use client"
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialtyModal";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";

const SpecialtiesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const {data, isLoading} = useGetAllSpecialtiesQuery({});
    // console.log(data);
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button onClick={()=> setIsModalOpen(true)}>
                    Create Specialty
                </Button>
                <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen}></SpecialtyModal>
                <TextField size="small" placeholder="Search Specialist"></TextField>
            </Stack>
            <Box>
                <h1>display specialities</h1>
            </Box>
        </Box>
    );
};

export default SpecialtiesPage;