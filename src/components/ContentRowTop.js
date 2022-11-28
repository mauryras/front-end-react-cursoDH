
import ContentRowMovies from "./contentRowMovies/ContentRowMovies";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";

function ContentRowTop() {
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard Ceramique & Project</h1>
        </div>
  
        <ContentRowMovies />
  
        <div className="row">
          <LastMovieInDb />
          <GenresInDb />
        </div>
      </div>
    );
  
}

export default ContentRowTop;
