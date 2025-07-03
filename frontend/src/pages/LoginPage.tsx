import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="mb-4" style={{ fontFamily: "F1-Regular", color: "#000" }}>
        <h5>Página de Login</h5>
        <hr className="mt-1" />
      </div>

      <LoginForm />
    </>
  );
};
export default LoginPage;
