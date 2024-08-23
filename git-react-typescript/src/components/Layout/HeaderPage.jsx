import { Link } from "react-router-dom";
function HeaderPage() {
  return (
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
                <Link className="nav-link text-white" to="/sanpham">
                  Sản Phẩm
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/gioithieu">
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/lienhe">
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderPage;
