import AuthHeader from "@/components/header/authheader";

const AuthLayout = ({ children }) => {
    return (
        <>
            <AuthHeader />
            {children}
        </>
    );
}

export default AuthLayout;