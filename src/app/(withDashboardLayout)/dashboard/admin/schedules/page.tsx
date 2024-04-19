"use client"
import { Box, Button } from "@mui/material";
import { useState } from "react";
import SpecialtyModal from "../specialties/components/SpecialtyModal";
import SchedulesModal from "./components/SchedulesModal";

const SchedulesPage = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <Box>
           <Button onClick={() => setIsModalOpen(true)}>Create Schedules</Button>
           <SchedulesModal
            open={isModalOpen}
            setOpen={setIsModalOpen}
           ></SchedulesModal>
           <Box my={5}>Display Schedule</Box>
        </Box>
    );
};

export default SchedulesPage;