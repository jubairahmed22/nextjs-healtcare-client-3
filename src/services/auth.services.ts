import { authKay } from "@/contants/authkey"
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = ({accessToken}: {accessToken: string}) => {
   return setToLocalStorage(authKay, accessToken)
};

export const getUserInfo = () => {
   const authToken = getFromLocalStorage(authKay);
   // console.log(authToken);
   if(authToken) {
      const decodedData:any = decodedToken(authToken);
      return {
         ...decodedData,
         role: decodedData?.role.toLowerCase()
      }
   }
};

export const isLoggedIn = () => {
   const authToken = getFromLocalStorage(authKay);
   if(authToken){
      return !! authToken;
   }
};

export const removeUser = () => {
   return removeFromLocalStorage(authKay)
}
