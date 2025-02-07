import AboutV1 from "../../components/about/AboutV1";
import AwardsV1 from "../../components/awards/AwardsV1";
import ContactV1 from "../../components/contact/ContactV1";
import FaqV1 from "../../components/faq/FaqV1";
import FeatureV1 from "../../components/feature/FeatureV1";
import HeaderV1 from "../../components/header/HeaderV1";
import HeaderV2 from "../../components/header/HeaderV2";
import HeaderV3 from "../../components/header/HeaderV3";
import HeroV1 from "../../components/hero/HeroV1";
import LayoutV1 from "../../components/layouts/LayoutV1";
import PartnerV1 from "../../components/partner/PartnerV1";
import PriceV1 from "../../components/pricing/PriceV1";
import ProcessV1 from "../../components/process/ProcessV1";
import ServicesV1 from "../../components/services/ServicesV1";
import ServicesV2 from "../../components/services/ServicesV2";
import TeamV1 from "../../components/team/TeamV1";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";

const Home1Page = () => {
    return (
        <div className="aixor-main">
            <LayoutV1>
                <HeaderV3 />
                <HeroV1 />
                <AboutV1 />
                <ServicesV2 />
                <ProcessV1 />
                <AwardsV1 />
                <TeamV1 />
                <ContactV1 />
                <FaqV1 />
            </LayoutV1>
        </div>
    );
};

export default Home1Page;