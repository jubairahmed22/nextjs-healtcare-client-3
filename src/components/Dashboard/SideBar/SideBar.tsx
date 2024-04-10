import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import assets from '@/assets';
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
    
    return (
        <Box>
            <Stack 
            sx={{
                py:1,
                mt:1
            }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={1}
            component={Link}
            href="/"
            >
            <Image src={assets.svgs.logo} width={40} height={40} alt=""></Image>
            <Typography variant="h6" component="h1" sx={{
                cursor: "pointer"
            }}>
                PH Health Care
            </Typography>
            </Stack>
            <List>
            {drawerItems("admin" as UserRole).map((item, index) => (
              <SidebarItem key={index} index={index} item={item}></SidebarItem>
            ))}
          </List>
        </Box>
    );
};

export default SideBar;