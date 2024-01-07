import { Loading, Login, ScreenShot } from "components";
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
      {/* {<Loading load={load} />} */}
      <div className="flex flex-row my-[200px]">
        <ScreenShot />

        <Login />
      </div>
    </div>
  );
};
export default Home;
