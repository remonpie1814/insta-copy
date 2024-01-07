import { Footer, Loading, Login, ScreenShot } from "components";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {<Loading load={load} />}
      <div className="flex flex-row my-[100px] items-center justify-center">
        <div className="md:hidden">
          <ScreenShot />
        </div>
        <Login />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
