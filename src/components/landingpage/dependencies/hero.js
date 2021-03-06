import React from 'react'

export function Hero(props) {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay={150}>
            <div className="col-xl-6 col-lg-8">
              <h1>EQUITY BANK<span>.</span></h1>
              <h2>We are team</h2>
            </div>
          </div>
          <div className="row mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay={250}>
            <div className="col-xl-2 col-md-4 col-6">
              <div className="icon-box">
                <i className="ri-store-line" />
                <h3><a href>Welcome</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-6 ">
              <div className="icon-box">
                <i className="ri-bar-chart-box-line" />
                <h3><a href>Login</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="ri-calendar-todo-line" />
                <h3><a href>Transactions</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
              <div className="icon-box">
                <i className="ri-paint-brush-line" />
                <h3><a href>Balance</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
              <div className="icon-box">
                <i className="ri-database-2-line" />
                <h3><a href>Nemos Enimade</a></h3>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Hero */}
    </div>
  )}
