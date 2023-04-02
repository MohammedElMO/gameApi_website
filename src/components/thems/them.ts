
export const darkMode = (classes:string,isActivited:boolean,darkClass:string) => {
    return  isActivited ? `dark: ${darkClass} ${classes} ` : classes
}

