"use client"
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import DoctorModal from "./components/DoctorModal";
import { useState } from "react";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDebounced } from "@/redux/hooks";

const DoctorsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const query: Record<string, any> = {};
    const [searchTerm, setSearchTerm] = useState<string>("")
    
    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    });


    if(!! debouncedTerm){
        query["searchTerm"]= searchTerm;
    }
    
    const {data, isLoading} = useGetAllDoctorsQuery({...query});
    console.log(data);
    const doctors = data?.doctors;
    const meta = data?.meta;

    // console.log(doctors);
    // console.log(meta);

    const handleDelete = async (id: string) =>{

        console.log(id);
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
        { field: "gender", headerName: "Gender", flex:1 },
        { field: "apointmentFee", headerName: "Appointment Fee", flex:1 },
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
                <TextField onChange={(e)=> setSearchTerm(e.target.value)} size="small" placeholder="search doctors"></TextField>
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