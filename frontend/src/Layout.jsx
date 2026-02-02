import Header from "./pages/Header";
import Footer from "./pages/Footer";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}


import { useAuth } from "./context/AuthContext";

function TestAuth() {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <p>Logged in: {user.email || user.phoneNumber}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}



export default Layout;
