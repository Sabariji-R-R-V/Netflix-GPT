export const checkValidateData = (email, password, fullname) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFullnamValid = /^[A-Za-z ]+$/.test(fullname);

    if(!isFullnamValid) return "FullName is Invalid"
    if(!isEmailValid) return "Email is Invalid"
    if(!isPasswordValid) return "Password is Invalid"

    return null
}
