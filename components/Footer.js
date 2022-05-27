import Image from "next/image"
import placeholder from "../public/placeholder.png"

const Footer = () => {
  return (
    <>
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-6 col-md-6">
              <div>
                <h5 className="h1 e">Our Mission</h5>
                <p className="small text-muted">
                  We are committed to decreasing the unemployment gap between foreign-born women and
                  native Swedes. We empower our community to define their path, get unblocked, and
                  trailblaze into tech careers.{" "}
                </p>
                <p className="small text-muted mb-0">
                  &copy; Copyrights. All rights reserved.{" "}
                  <a className="text-primary" href="#">
                    Bootstrapious.com
                  </a>
                </p>
              </div>

              <div>
                <h5 className="h1 e">Our Partners</h5>
                <Image src={placeholder} className="rounded-circle" alt="Cinque Terre" />
                &nbsp;
                <Image src={placeholder} className="rounded-circle" alt="Cinque Terre" />
                &nbsp;
                <Image src={placeholder} className="rounded-circle" alt="Cinque Terre" />
                &nbsp;
                <Image src={placeholder} className="rounded-circle" alt="Cinque Terre" />
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div>
                <h5 className="mb-3">Sitemap</h5>
                <ul className="list-unstyled ">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Get started</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div>
                <h5 className="mb-3">Contact Us</h5>
                <ul className="list-unstyled ">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Get started</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
