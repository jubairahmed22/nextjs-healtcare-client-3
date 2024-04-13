"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialtyModal";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  // console.log(data);

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 100 },
    { field: "icon",
    headerName: "Icon",
    width: 100,
    renderCell:({row})=> {
    return <Box>
        <Image src={row.icon} alt="icon" 
        width={40} height={40}></Image>
    </Box>
    } },
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
        <Box>
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
