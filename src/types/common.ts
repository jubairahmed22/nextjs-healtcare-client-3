import { USER_ROLE } from "@/contants/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import exp from "constants";

export type  IMeta = {
    page: number;
    limit: number;
    total: number;
}

export interface DrawerItem {
    title: string;
    path: string;
    parentPath?: string;
    icon?:  OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string};
    child?: DrawerItem[];
}

export type ResponseSuccessType = {
    data: any;
    meta?: IMeta;
}
// export type IGenericErrorResponse = {
//     statusCode: number;
//     message: string;
//     errorMessages: IGenericErrorMessage[];
// }

export type UserRole = keyof typeof USER_ROLE;