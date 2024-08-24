import { Link } from "react-router-dom";
function HeaderPage() {
  return (
    <div>
      <header className="bg-dark text-white py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h3">Thương Mại Điện Tử</h1>
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/product">
                    Sản Phẩm
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                    Giới thiệu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="d-flex align-items-center">
              <div className="search-bar">
                <i
                  className="fas fa-search text-white mx-3"
                  id="search-icon"
                  style={{
                    cursor: "pointer",
                  }}
                />
                <input
                  className="form-control search-input"
                  id="search-input"
                  placeholder="Tìm kiếm..."
                  type="text"
                />
              </div>
              <i
                className="fas fa-shopping-cart text-white mx-3"
                style={{
                  cursor: "pointer",
                }}
              />
              <i
                className="fa-solid fa-circle-half-stroke"
                style={{
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
        </div>
      </header>
      <div
        className="carousel slide"
        data-ride="carousel"
        id="carouselExampleIndicators"
      >
        <ol className="carousel-indicators">
          <li
            className="active"
            data-slide-to="0"
            data-target="#carouselExampleIndicators"
          />
          <li data-slide-to="1" data-target="#carouselExampleIndicators" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              alt="Banner 1"
              className="d-block w-100"
              src="/img/banner1.jpg"
            />
          </div>
          <div className="carousel-item">
            <img
              alt="Banner 2"
              className="d-block w-100"
              src="/img/banner2.jpg"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          data-slide="prev"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span aria-hidden="true" className="carousel-control-prev-icon" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          data-slide="next"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span aria-hidden="true" className="carousel-control-next-icon" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default HeaderPage;
