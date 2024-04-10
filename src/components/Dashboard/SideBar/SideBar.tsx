import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Image from "next/image";
import assets from '@/assets';
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";

const SideBar = () => {
    const drawer = (
        <div>
            <List>
            {drawerItems("admin" as UserRole).map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon
                     /> : <MailIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
         </div>
      );
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
            {drawer}
        </Box>
    );
};

export default SideBar;