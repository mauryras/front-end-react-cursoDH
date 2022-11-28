import Sidebar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";
import ContentRowMovies from "./contentRowMovies/ContentRowMovies";

function RouterApp() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar/>
        <Routes>
          <Route path={"/"} element={<ContentWrapper />} />
          <Route path={"/ultima"} element={<LastMovieInDb />} />
          <Route path={"/generos"} element={<GenresInDb />} />
          <Route path={"/peliculas"} element={<ContentRowMovies />} />
          <Route path={"*"} element={<ContentWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RouterApp;
