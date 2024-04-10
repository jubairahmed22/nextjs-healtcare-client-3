import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { DrawerItem } from "@/types";

type IProps = {
  item: DrawerItem;
  index: number;
};

const SidebarItem = ({ item }: IProps) => {

  const linkPath = `/dashboard/${item.path}`;

  return (
    <Link href={linkPath}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {
                item.icon && <item.icon/>
            }
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
