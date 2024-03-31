export const setToLocalStorage = (key:string, token:string) => {
   if(!key || typeof window === "undefine"){
    return "";
   }
 return localStorage.setItem(key, token);
}