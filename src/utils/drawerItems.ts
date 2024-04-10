import { USER_ROLE } from "@/contants/role";
import { DrawerItem, UserRole } from "@/types";

//icons
import DashboardIcon from '@mui/icons-material/Dashboard';

export const drawerItems = (role : UserRole) : DrawerItem[] => {
   const roleMenus : DrawerItem[] = [];
   switch (role) {
    case USER_ROLE.SUPER_ADMIN:
        roleMenus.push({
            title: "Dashboard",
            path: `${role}`,
            icon: DashboardIcon
        })
        break;
   }


   return[...roleMenus]
}