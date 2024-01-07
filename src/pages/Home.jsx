import { Footer, Loading, Login, ScreenShot } from "components";
import { Sidebar } from "components/Sidebar";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [load, setLoad] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("loggedIn");
    setIsLoggedIn(loggedIn === "true");
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {<Loading load={load} />}
      {isLoggedIn === null || !isLoggedIn ? (
        <>
          <div className="flex flex-row my-[100px] items-center justify-center">
            <div className="md:hidden">
              <ScreenShot />
            </div>
            <Login />
          </div>
          <Footer />
        </>
      ) : (
        <>
          <div>
            <Sidebar />
          </div>
        </>
      )}
    </div>
  );
};
export default Home;
