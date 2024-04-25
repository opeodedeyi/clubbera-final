export const isEmailValid = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
};

export const isPasswordValid = (password) => {
    const passwordRegex = /^.{8,}$/;
    return passwordRegex.test(password);
};