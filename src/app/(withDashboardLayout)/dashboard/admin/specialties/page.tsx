"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialtyModal";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete';

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  // console.log(data);

  const handleDelete = (id: string)=>{
    console.log(id);
   }

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    { field: "icon",
    headerName: "Icon",
    flex:1,
    renderCell:({row})=> {
    return (<Box>
        <Image src={row.icon} alt="icon"
         width={30} height={30}></Image>
    </Box>);
    }},
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
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
        ></SpecialtyModal>
        <TextField size="small" placeholder="Search Specialist"></TextField>
      </Stack>
     {
        !isLoading ?
    <Box my={2}>
        <DataGrid
          rows={data}
          columns={columns} 
        />
    </Box>
         :  <h1>Loading...</h1>
       }
    </Box>
  );
};

export default SpecialtiesPage;
