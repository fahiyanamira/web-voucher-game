import ReachedItem from "../../molecules/ReachedItem";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <div className="me-lg-35">
            <ReachedItem reachNumber="290M+" desc="Players Top Up" />
          </div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="me-lg-35 ms-lg-35">
            <ReachedItem reachNumber="12.500" desc="Games Available" />
          </div>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <div className="me-lg-35 ms-lg-35">
            <ReachedItem reachNumber="99,9%" desc="Happy Players" />
          </div>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <div className="me-lg-35 ms-lg-35">
            <ReachedItem reachNumber="4.7" desc="Rating Worldwide" />
          </div>
        </div>
      </div>
    </section>
  );
}
