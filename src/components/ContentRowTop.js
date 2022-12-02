
import ContentRowProducts from "./ContentRowProducts/ContentRowProducts";
import Category from "./Category";
import LastProduct from "./LastProduct";

function ContentRowTop() {
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard Ceramique & Project</h1>
        </div>
  
        <ContentRowProducts/>
  
        <div className="row">
          <LastProduct />
          <Category />
        </div>
      </div>
    );
  
}

export default ContentRowTop;
