import AuthHeader from "@/components/header/AuthHeader/AuthHeader";

const AuthLayout = ({ children }) => {
    return (
        <>
            <AuthHeader />
            {children}
        </>
    );
}

export default AuthLayout;