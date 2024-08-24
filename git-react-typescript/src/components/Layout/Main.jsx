function Main() {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  const dsspbest = [
    {
      id: 1,
      name: "Sản Phẩm 1",
      price: 100000,
      image: "hinh1.webp",
      description: "Mô tả sản phẩm 1",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Sản Phẩm 2",
      price: 200000,
      image: "hinh2.webp",
      description: "Mô tả sản phẩm 2",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Sản Phẩm 3",
      price: 300000,
      image: "hinh3.webp",
      description: "Mô tả sản phẩm 3",
      rating: 4.8,
    },
  ];

  const renderhinhBest = dsspbest.map((sp, index) => (
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

  const dsspNew = [
    {
      id: 5,
      name: "Sản Phẩm 5",
      price: 50000,
      image: "hinh9.webp",
      description: "Mô tả sản phẩm 5",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Sản Phẩm 6",
      price: 600000,
      image: "hinh6.webp",
      description: "Mô tả sản phẩm 6",
      rating: 4.6,
    },
    {
      id: 7,
      name: "Sản Phẩm 7",
      price: 70000,
      image: "hinh7.webp",
      description: "Mô tả sản phẩm 7",
      rating: 4.7,
    },
  ];

  const renderhinhNew = dsspNew.map((sp, index) => (
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
        <section className="mb-5">
          <h2 className="h4">Sản Phẩm Bán Chạy</h2>
          <div className="row">{renderhinhBest}</div>
        </section>
        <section>
          <h2 className="h4">Sản Phẩm Mới</h2>
          <div className="row">{renderhinhNew}</div>
        </section>
      </main>
    </>
  );
}

export default Main;
