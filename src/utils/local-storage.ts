export const setToLocalStorage = (key:string, token:string) => {
   if(!key || typeof window === "undefied"){
    return "";
   }
 return localStorage.setItem(key, token);
}