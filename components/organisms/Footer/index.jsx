import LinkFooterItem from "../../molecules/LinkFooterItem";
import Image from "next/dist/client/image";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
                  <ul className="list-unstyled">
                    <LinkFooterItem linkName="About Us" />
                    <LinkFooterItem linkName="Press Release" />
                    <LinkFooterItem linkName="Term of Use" />
                    <LinkFooterItem linkName="Privacy & Policy" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
                  <ul className="list-unstyled">
                    <LinkFooterItem linkName="Refund Policy" />
                    <LinkFooterItem linkName="Unlock Rewards" />
                    <LinkFooterItem linkName="Live Chatting" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
                  <ul className="list-unstyled">
                    <LinkFooterItem linkName="hi@store.gg" href="mailto: hi@store.gg" />
                    <LinkFooterItem linkName="team@store.gg" href="mailto: team@store.gg" />
                    <LinkFooterItem linkName="Pasicif 12, Jakarta Selatan" href="http://maps.google.com/?q=Pasific 12,Jakarta Selatan" />
                    <LinkFooterItem linkName="021 - 1122 - 9090" href="tel: 02111229090" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
