import { Box, Button, Stack, TextField } from "@mui/material";

const SpecialtiesPage = () => {
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button>
                    Create Specialty
                </Button>
                <TextField size="small" placeholder="Search Specialist"></TextField>
            </Stack>
        </Box>
    );
};

export default SpecialtiesPage;