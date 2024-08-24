function FooterPage() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>© 2024 Thương Mại Điện Tử. All rights reserved.</p>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Chính Sách Bảo Mật
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Điều Khoản Dịch Vụ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Liên Hệ
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterPage;
