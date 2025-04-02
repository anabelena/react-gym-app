import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { div } from "framer-motion/client";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* MAIN HEADER AND IMAGE */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADING */}
          <div className="md:-mt-20">
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p>
              Welcome to your ultimate fitness companion! Track your workouts,
              monitor your progress, and stay motivated with powerful tools
              designed to help you push your limits and achieve your goals. Your
              journey to a stronger, healthier you starts here!
            </p>
          </div>
          {/* ACTIONS */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn more</p>
            </AnchorLink>
          </div>
        </div>
        {/* IMAGE */}
        <div>
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="redbull-forbes" />
              <img src={SponsorFortune} alt="redbull-fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
