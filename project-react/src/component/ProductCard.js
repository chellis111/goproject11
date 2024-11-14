const ProductCard = ({ imageUrl, name, price, desciption }) => {
  console.log(imageUrl);
  return (
    <div>
      <div className="card" style={{ width: "100%" }}>
        <img src={imageUrl} class="card-img-top" alt="..." />
        <div className="card-body">
          <div className="d-flex Tag">
            <h5 className="card-title">{name}</h5>
            <p className="card-text price">
              <strong>${price}</strong>
            </p>
          </div>
          <p className="card-text">{desciption}</p>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
