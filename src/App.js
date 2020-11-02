import React from 'react';
import ReactDOM from 'react-dom';

/* image */
import main from './images/main.jpg';
import comment from './images/comment.jpg';
import upwork from './images/upwork.svg';
import freelancer from './images/freelancer.svg';
import fiverr from './images/fiverr.svg';
/* css */
import './css/style.css';
import './css/bootstrap.css';
import './css/no-gutters.css';
import './css/practise.css';
import './css/bootstrapPadding.css';
import './css/bootstrapMargin.css';
import './css/defaultFonts.css';
import './css/fakescroll.css';
import './css/media.css';

//import FakeScroll from '@yaireo/fakescroll/react.fakescroll.js';
//import "@yaireo/fakescroll/fakescroll.css"

/* JS */
import $ from 'jquery';
import './js/flowtype.js';

const App = () => {
  /* Font Size controlle */
  $('body').flowtype();
  $('body').flowtype({
    minimum: 500,
    maximum: 1200,
    minFont: 12,
    maxFont: 30,
    fontRatio: 30,
  });
  return (
    <>
      <div className="py-3 foo" id="mainCont">
        <div className="myCont container p-5">
          <div className="row">
            <div className="col-12 col-sm-5">
              {/* <!-- NAME ---> */}
              <div className="name">
                <span className="imgStyle">
                  <img className="rounded-circle img-thumbnail" src={main} />
                </span>
                <h1>Md. Shaiful Alam(Islam)</h1>
                <h2 className="text-uppercase">freelancer</h2>
                <p>Dhaka,Bangladesh</p>
              </div>

              {/* <!-- PROFILE --> */}
              <div className="profile">
                <p className="iconStyle py-4 text-uppercase">
                  <span className="icon">
                    <i className="fa fa-user-o"></i>
                  </span>
                  <span className="text" style={{ fontSize: '25px' }}>
                    profile
                  </span>
                </p>
                <div className="profileText" style={{ fontSize: '25px' }}>
                  <p>Hi Dear Client,</p>
                  <p style={{ textIndent: '50px' }}>
                    Good day. Hope you are well. Ok… I am Shaiful from
                    Bangladesh. I am an Independent freelancer in IT Section.
                  </p>
                  <p>
                    I am expert in Web research, Data entry, Email Research,
                    Email collect field.
                  </p>
                  <p>
                    I can collect verified email of C-level person or Non
                    C-level person (Personal and Business email) by using many
                    tools like as Hunter io, Rapportive, Norbert etc.
                  </p>
                  <p>
                    I am a product entry operator also. I am expert in Amazon,
                    Ebay, Etsy, Magento, Shopify, Houzz, Alibaba, Ali-express,
                    Xcart, Craigslist, etc area.
                  </p>
                  <p>
                    I also know basic product Photoshop like as resize product
                    Image, Background change, Water mark, Cropping etc.
                  </p>
                  <p>
                    I have also good knowledge in SEO, HTML, Web Content
                    Writing, Email Marketing, Customer Service and Support etc.
                  </p>
                  <p>
                    I have been working more than 6 years as a Freelancer on
                    Upwork, Fiverr etc Platform.
                  </p>
                  <p>
                    So, I will promise for providing best quality service. I
                    hope a reply from you for more discuss about your project.
                    Thank you.
                  </p>
                  <div className="comment">
                    <span className="">
                      <img src={comment} />
                    </span>
                    <p className="text-muted">Shaiful Islam</p>
                  </div>
                </div>
              </div>

              {/*  <!-- CONTACT --> */}
              <div className="contact">
                <p className="iconStyle py-4 text-uppercase">
                  <span className="icon">
                    <i className="fa fa-phone"></i>
                  </span>
                  <span className="text" style={{ fontSize: '25px' }}>
                    contact
                  </span>
                </p>
                <ul className="contactText">
                  <li>
                    <span style={{ fontSize: '15px' }}>Address</span>
                    <span style={{ fontSize: '15px' }}>Dhaka, Bangladesh</span>
                  </li>
                  <li>
                    <span style={{ fontSize: '15px' }}>Email</span>
                    <span>
                      <a
                        target="_blank"
                        style={{ fontSize: '15px' }}
                        href="saaif.tipu@gmail.com"
                      >
                        saaif.tipu@gmail.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <span style={{ fontSize: '15px' }}>Skype</span>
                    <span style={{ fontSize: '15px' }}>saaif.tipu</span>
                  </li>
                  <li>
                    <span style={{ fontSize: '15px' }}>Linkden</span>
                    <span style={{ fontSize: '15px' }}>
                      <a
                        target="_blank"
                        style={{ fontSize: '15px' }}
                        href="https://www.linkedin.com/in/md-shaiful-alam-6b163b9b"
                      >
                        https://www.linkedin.com/in/md-shaiful-alam-6b163b9b
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              {/* <!-- SKILS --> */}
              <div className="skils">
                <p className="iconStyle py-4 text-uppercase">
                  <span className="icon">
                    <i className="fa fa-lightbulb-o"></i>
                  </span>
                  <span className="text" style={{ fontSize: '25px' }}>
                    skills
                  </span>
                </p>

                <div>
                  <p>Web research</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: '85%' }}
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      85%
                    </div>
                  </div>
                </div>
                <div>
                  <p>Data entry</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: '95%' }}
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      95%
                    </div>
                  </div>
                </div>
                <div>
                  <p>Email Collect</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: '87%' }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      87%
                    </div>
                  </div>
                </div>
                <div>
                  <p>Lead Generation</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: '85%' }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      85%
                    </div>
                  </div>
                </div>
                <div>
                  <p>Product Entry</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: '88%' }}
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      88%
                    </div>
                  </div>
                </div>
                <div>
                  <p>Product Image Edit</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: '78%' }}
                      aria-valuenow="68"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      78%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-7">
              {/* <!-- education --> */}
              <div className="education">
                <p className="iconStyle py-4 text-uppercase">
                  <span className="icon">
                    <i className="fa fa-graduation-cap"></i>
                  </span>
                  <span className="text" style={{ fontSize: '25px' }}>
                    education
                  </span>
                </p>
                <ul className="eduUl">
                  <li>
                    <div>1</div>
                    <div>
                      <p className="first">
                        <span style={{ fontSize: '16px' }}>BA (Pass)</span>
                        <span style={{ fontSize: '12px' }}>
                          || Jan 1995 – Jul 1997
                        </span>
                      </p>
                      <p className="second text-muted">
                        Hathazari University College, Chittagong, Bangladesh
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>2</div>
                    <div>
                      <p className="first">
                        <span style={{ fontSize: '16px' }}>
                          Higher Secondary
                        </span>
                        <span style={{ fontSize: '12px' }}>
                          || Jan 1993 – Jul 1994
                        </span>
                      </p>
                      <p className="second text-muted">
                        Chittagong University College, Chittagong, Bangladesh
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>3</div>
                    <div>
                      <p className="first">
                        <span style={{ fontSize: '16px' }}>Secondary</span>
                        <span style={{ fontSize: '12px' }}>
                          || Jan 1990 - Jul1992
                        </span>
                      </p>
                      <p className="second text-muted">
                        Urkirchar High School, Chittagong, Bangladesh
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* <!-- experience --> */}
              <div className="experience">
                <p className="iconStyle py-4 text-uppercase">
                  <span className="icon">
                    <i className="fa fa-globe"></i>
                  </span>
                  <span className="text" style={{ fontSize: '25px' }}>
                    experience
                  </span>
                </p>

                <ul className="expUl">
                  <li>
                    <div>
                      <span>
                        <i className="fa fa-check-circle-o"></i>
                      </span>
                    </div>
                    <div>
                      <p className="first">
                        <span style={{ fontSize: '16px' }}>upwork.com</span>
                        <span style={{ fontSize: '12px' }}>
                          || JAN 2013 – {new Date().getFullYear()} (Present)
                        </span>
                      </p>
                      <div
                        className="marketPlace"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          background: 'none',
                          boxShadow: 'none',
                          padding: '0px',
                          marginRight: '0px',
                        }}
                      >
                        <a
                          href="https://www.upwork.com/o/profiles/users/_~01b9ee1080eaf92eba/"
                          target="_blank"
                        >
                          <img
                            width="120"
                            height="60"
                            src={upwork}
                            alt="upwork"
                          />
                        </a>
                        <p style={{ wordBreak: 'break-all' }}>
                          <a
                            style={{ fontSize: '14px' }}
                            className="company text-capitalize"
                            href="https://www.upwork.com/o/profiles/users/_~01b9ee1080eaf92eba/"
                            target="_blank"
                          >
                            https://www.upwork.com/o/profiles/users/_~01b9ee1080eaf92eba/
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>
                        <i className="fa fa-check-circle-o"></i>
                      </span>
                    </div>
                    <div>
                      <p className="first">
                        <span style={{ fontSize: '16px' }}>fiverr.com</span>
                        <span style={{ fontSize: '12px' }}>
                          || April 2016 – {new Date().getFullYear()} (Present)
                        </span>
                      </p>
                      <div
                        className="marketPlace"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          background: 'none',
                          boxShadow: 'none',
                          padding: '0px',
                          marginRight: '0px',
                        }}
                      >
                        <a
                          href="https://www.fiverr.com/saif284"
                          target="_blank"
                        >
                          <img
                            width="120"
                            height="60"
                            src={fiverr}
                            alt="fiverr"
                          />
                        </a>
                        <p>
                          <a
                            style={{ fontSize: '14px' }}
                            className="company text-capitalize"
                            href="https://www.fiverr.com/saif284"
                            target="_blank"
                          >
                            https://www.fiverr.com/saif284
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>
                        <i className="fa fa-check-circle-o"></i>
                      </span>
                    </div>
                    <div>
                      <p className="first">
                        <span style={{ fontSize: '16px' }}>freelancer.com</span>
                        <span style={{ fontSize: '12px' }}>
                          || April 2018 – {new Date().getFullYear()} (Present)
                        </span>
                      </p>
                      <div
                        className="marketPlace"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          background: 'none',
                          boxShadow: 'none',
                          padding: '0px',
                          marginRight: '0px',
                        }}
                      >
                        <a
                          href="https://www.freelancer.com/u/saif284"
                          target="_blank"
                        >
                          <img
                            width="180"
                            height="60"
                            src={freelancer}
                            alt="freelancer"
                          />
                        </a>
                        <p>
                          <a
                            style={{ fontSize: '14px' }}
                            className="company text-capitalize"
                            href="https://www.freelancer.com/u/saif284"
                            target="_blank"
                          >
                            https://www.freelancer.com/u/saif284
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* <!-- snippet --> */}
              <div className="snippet">
                <p className="iconStyle py-4 text-uppercase">
                  <span className="icon">
                    <i className="fa fa-anchor"></i>
                  </span>
                  <span className="text" style={{ fontSize: '25px' }}>
                    snippet work
                  </span>
                </p>

                <div className="snippetWork">
                  <p className="text-center py-2">
                    <span>
                      <i
                        className="fa fa-bullhorn"
                        style={({ fontSize: '1rem' }, { color: '#0056b3' })}
                      ></i>
                    </span>
                    here is my some works snippet
                  </p>
                  <ul className="snippetUl">
                    <li>
                      <p>Lead - Generation</p>
                      <a
                        href="https://docs.google.com/spreadsheets/d/10cfyKA1Thr7psIwG6uxVkaP7xH9I3HxfpF2eMu86Iik/edit#gid=472298824"
                        target="_blank"
                      >
                        view
                      </a>
                    </li>
                    <li>
                      <p>Email - Collect</p>
                      <a
                        href="https://docs.google.com/document/d/1YkyAe9P0bGpjd0WWdVrK7KACkaa_hPx4TytSHJKMHHw/edit"
                        target="_blank"
                      >
                        view
                      </a>
                    </li>
                    <li>
                      <p>Image - Edit</p>
                      <a
                        href="https://docs.google.com/document/d/1EFg-5Oek5OJpXS49EqmAeJey-nSvj34_9qc9QMV3o88/edit"
                        target="_blank"
                      >
                        view
                      </a>
                    </li>
                    <li>
                      <p>Amazon - Entry</p>
                      <a
                        href="https://docs.google.com/document/d/1p8ZEmkdRtLSQKasl0RF7ByP94kOxjaX4jJfCEWovh9k/edit"
                        target="_blank"
                      >
                        view
                      </a>
                    </li>
                    <li>
                      <p>ebay - entry</p>
                      <a
                        href="https://docs.google.com/document/d/1XIyeqJnSe7_lFe4nnAkX_zhWXEL94T15qTlF6ceSCmI/edit"
                        target="_blank"
                      >
                        view
                      </a>
                    </li>
                    <li>
                      <p>Etsy - entry</p>
                      <a
                        href="https://docs.google.com/document/d/1cdy6xj7s1N-9G-UGMM9MX1SU8ncCRW1jVU32mLkamwk/edit"
                        target="_blank"
                      >
                        view
                      </a>
                    </li>
                    <li>
                      <p>Shopify - entry</p>
                      <a
                        href="https://docs.google.com/document/d/16hjLlanNim2VhBZkLSq4cVWhhpqEvUL-DN24rqY5LPo/edit"
                        target="_blank"
                      >
                        view
                      </a>
                    </li>
                    <li>
                      <p>Shopify - Oberlo</p>
                      <a
                        href="https://docs.google.com/document/d/1FoOGvSDHv32-63KimmCt5gY4lo4jD3AmxqTx0flZSjY/edit"
                        target="_blank"
                      >
                        view
                      </a>
                    </li>
                    <li>
                      <p>Wordpress - entry</p>
                      <a
                        href="https://docs.google.com/document/d/1B7tu1UCQPTOOrtKqLIX_t_r2ow0OVjb6_-6TE02MthY/edit"
                        target="_blank"
                      >
                        view
                      </a>
                    </li>
                    <li>
                      <p>X-cart - entry</p>
                      <a
                        href="https://docs.google.com/document/d/13tErErUuwg7icD4w-obOHh4-ZFe5zcYaVuNlGUPz9Xc/edit"
                        target="_blank"
                      >
                        view
                      </a>
                    </li>
                    <li>
                      <p>Houzz - entry</p>
                      <a
                        href="https://docs.google.com/document/d/13Dix44aoehEkudJGjObJYa95zJ3aH2hDtp4IIuGyJ30/edit"
                        target="_blank"
                      >
                        view
                      </a>
                    </li>
                    <li>
                      <p>Craigslist - entry</p>
                      <a
                        href="https://docs.google.com/document/d/1wxu1aUnlOmTVW8yIDUaVPSAecU4pnypQKv5XkGJ_LCg/edit"
                        target="_blank"
                      >
                        view
                      </a>
                    </li>
                    <li>
                      <p>Property - Listing</p>
                      <a
                        href="https://docs.google.com/document/d/1B7tu1UCQPTOOrtKqLIX_t_r2ow0OVjb6_-6TE02MthY/edit"
                        target="_blank"
                      >
                        view
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright col-12">
              <p className="text-center text-capitalize mt-5">
                designed with
                <span>
                  <i className="fa fa-heartbeat"></i>
                </span>
                by mustafa mahmud
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
