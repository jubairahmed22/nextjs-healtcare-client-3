import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Image from "next/image";
import assets from '@/assets';

const SideBar = () => {
    const drawer = (
        <div>
            <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon
                     /> : <MailIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
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
            >
            <Image src={assets.svgs.logo} width={40} height={40} alt=""></Image>
            <Typography variant="h6" component="h1">
                PH Health Care
            </Typography>
            </Stack>
            {drawer}
        </Box>
    );
};

export default SideBar;