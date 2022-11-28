import ContentRowTop from "./ContentRowTop";

import Footer from "./Footer";
import TableMuvies from "./tableMovies/TableMovies";
import TopBar from "./TopBar";

function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
        <TopBar />
        <ContentRowTop />
        <TableMuvies />
      </div>
      {/* <!-- End of MainContent --> */}

      <Footer />
    </div>
  );
}

export default ContentWrapper;
