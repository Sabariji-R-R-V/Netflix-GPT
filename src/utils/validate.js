export const checkValidateData = (email, password, fullname) => {
     // eslint-disable-next-line
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
     // eslint-disable-next-line
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     // eslint-disable-next-line
    const isFullnamValid = /^[A-Za-z ]+$/.test(fullname);

    if(!isFullnamValid) return "FullName is Invalid"
    if(!isEmailValid) return "Email is Invalid"
    if(!isPasswordValid) return "Password is Invalid"

    return null
}
