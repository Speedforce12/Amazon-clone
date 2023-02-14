import Header from "./header/Header";
import { Poppins } from "@next/font/google";
import Footer from "./footer/Footer";
import { useRouter } from "next/router";

const poppins = Poppins({
  weight: ["200", "400", "700", "900"],
  subsets: ["latin"],
});

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <div className={poppins.className}>
      {router.pathname !== "/auth/register" &&
        router.pathname !== "/auth/login" && <Header path={router.route} />}
      <div className="flex-1">{children}</div>
      {router.pathname !== "/auth/login" &&
        (router.pathname !== "/auth/register" && (
          <Footer path={router.route} />
        ))}
    </div>
  );
};

export default Layout;
