import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Product.css";
function Product() {
  const { categoryID } = useParams();
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  const dsdm = [
    {
      id: 1,
      name: "PS5",
    },
    {
      id: 2,
      name: "Xbox",
    },
  ];
  const dssp = [
    {
      id: 1,
      name: "Sản Phẩm 1",
      price: 100000,
      image: "hinh9.webp",
      description: "Mô tả sản phẩm 1",
      rating: 4.5,
      categoryID: 1,
    },
    {
      id: 2,
      name: "Sản Phẩm 2",
      price: 200000,
      image: "hinh12.webp",
      description: "Mô tả sản phẩm 2",
      rating: 4.8,
      categoryID: 1,
    },
    {
      id: 3,
      name: "Sản Phẩm 3",
      price: 300000,
      image: "hinh3.webp",
      description: "Mô tả sản phẩm 3",
      rating: 4.8,
      categoryID: 1,
    },
    {
      id: 5,
      name: "Sản Phẩm 5",
      price: 50000,
      image: "hinh9.webp",
      description: "Mô tả sản phẩm 5",
      rating: 4.6,
      categoryID: 2,
    },
    {
      id: 6,
      name: "Sản Phẩm 6",
      price: 600000,
      image: "hinh6.webp",
      description: "Mô tả sản phẩm 6",
      rating: 4.6,
      categoryID: 2,
    },
    {
      id: 7,
      name: "Sản Phẩm 7",
      price: 70000,
      image: "hinh7.webp",
      description: "Mô tả sản phẩm 7",
      rating: 4.7,
      categoryID: 2,
    },
  ];

  var tieudetrang = "";
  var dsspFilter = [];

  if (categoryID) {
    const cate = dsdm.find((item) => item.id === parseInt(categoryID));
    if (cate) {
      tieudetrang = cate.name;
      dsspFilter = dssp.filter((sp) => sp.categoryID === parseInt(categoryID));
    } else {
      tieudetrang = "tất cả sản phẩm";
      dsspFilter = dssp;
    }
  } else {
    tieudetrang = "Tất cả sản phẩm";
    dsspFilter = dssp;
  }
  const renderSanPham = dsspFilter.map((sp, index) => (
    <div key={index} className="col-md-4">
      <div className="card mb-4">
        <img alt={sp.name} className="card-img-top" src={`/img/${sp.image}`} />
        <div className="card-body">
          <h5 className="card-title">{sp.name}</h5>
          <p className="card-text">{formatPrice(sp.price)}</p>
          <a className="btn btn-orange" href="#">
            Mua Ngay
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <main className="container my-4">
        <div className="row">
          <section className="mb-4 col-md-3">
            <h2 className="h4">Danh Mục Sản Phẩm</h2>
            <ul className="category-list">
              <li>
                <Link to="/product/1">Tay cầm PS5</Link>
              </li>
              <li>
                <Link to="/product/2">Tay cầm xbox</Link>
              </li>
              <li>
                <a href="#">Đồ Gia Dụng</a>
              </li>
              <li>
                <a href="#">Sức Khỏe & Làm Đẹp</a>
              </li>
              <li>
                <a href="#">Đồ Chơi & Mẹ & Bé</a>
              </li>
            </ul>
          </section>
          <section className="mb-5 col-md-9">
            <h2 className="h4">{tieudetrang}</h2>
            <div className="row" id="product-list">
              {renderSanPham}
            </div>
            <nav aria-label="Page navigation example">
              <ul
                className="pagination justify-content-center"
                id="pagination"
              ></ul>
            </nav>
          </section>
        </div>
      </main>
    </>
  );
}

export default Product;
