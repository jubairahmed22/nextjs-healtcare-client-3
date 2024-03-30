import { authKay } from "@/contants/authkey"
import { setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = ({accessToken}: {accessToken: string}) => {
   return setToLocalStorage(authKay, accessToken)
}