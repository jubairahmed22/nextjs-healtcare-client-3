import DashboardDrawer from "@/components/Dashboard/DashboardDeawer/DashboardDrawer";

const DashboardLayout = ({children} : {children: React.ReactNode}) => {
    return <DashboardDrawer>{children}</DashboardDrawer>};

export default DashboardLayout;