import FetchKids from "./fetchKids";

function ForKids({ products, loading }) {
  return (
    <>
      <div className="For-Men">
        <div className="head-men">
          <h1 className="men-heading">Kids</h1>
        </div>

        {/* Fetching products from api */}
        <div className="fetching">
          <FetchKids products={products} loading={loading} />
        </div>
      </div>
    </>
  );
}

export default ForKids;
