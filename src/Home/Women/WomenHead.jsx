import FetchWomenProducts from "./fetchWomen";

function ForWomen({ products, loading }) {
  return (
    <>
      <div className="For-Men">
        <div className="head-men">
          <h1 className="men-heading">Women</h1>
        </div>

        {/* Fetching products from api */}
        <div className="fetching">
          <FetchWomenProducts products={products} loading={loading} />
        </div>
      </div>
    </>
  );
}

export default ForWomen;
