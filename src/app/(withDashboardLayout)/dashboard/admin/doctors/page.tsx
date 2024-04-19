"use client"
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';

const DoctorsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    
    const {data, isLoading} = useGetAllDoctorsQuery({});
    console.log(data);
    const doctors = data?.doctors;
    const meta = data?.meta;

    console.log(doctors);
    // console.log(meta);

    const handleDelete = async (id: string) =>{
        try{
      
        }
        catch(err: any) {
            console.error(err.message);
            
        }
       }

    const columns: GridColDef[] = [
        { field: "name", headerName: "Name", flex:1 },
        { field: "email", headerName: "Email", flex:1 },
        { field: "contactNumber", headerName: "Contact Number", flex:1 },
        { field: "action",
        headerName: "Action",
        flex: 1,
        headerAlign: "center",
        align: "center",
        renderCell:({row})=> {
        return (
        <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
        <DeleteIcon />
        </IconButton>)
        }},
      ];
    
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button onClick={()=>setIsModalOpen(true)}>Create New Doctor</Button>
                <DoctorModal open={isModalOpen} setOpen={setIsModalOpen}></DoctorModal>
                <TextField size="small" placeholder="search doctors"></TextField>
            </Stack>
            {
        !isLoading ?
    <Box my={2}>
        <DataGrid
          rows={doctors}
          columns={columns} 
        />
    </Box>
         :  <h1>Loading...</h1>
       }
        </Box>
    );
};

export default DoctorsPage;