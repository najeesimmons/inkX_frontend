import { useEffect, useState } from "react";
import { Route, Routes} from "react-router-dom";
import Artist from "../pages/Artist";
import Show from "../pages/Show";

function Main(props) {

  return (
    <main>
        <Routes>
            <Route exact path="/" element={<Artist/>}/>
            {/* <Route path="/artist/:id" element={<Show/>}/> */}
        </Routes>
    </main>
  );
}

export default Main;