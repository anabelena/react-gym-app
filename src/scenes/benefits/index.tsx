import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./benefit";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};


const benefits:Array<BenefitType> = [
    {
        icon:<HomeModernIcon className="h-6 w-6 "/>,
        title:"State of the Art Facilities",
        description:"From high-tech machines to spacious workout areas, we ensure a clean, modern, and motivating environment where you can train with confidence. Whether you’re lifting, running, stretching, or recovering, our state-of-the-art setup is built to help you achieve peak performance."
    },
    {
        icon:<UserGroupIcon className="h-6 w-6 "/>,
        title:"100's of Diverse Classes",
        description:"From high-tech machines to spacious workout areas, we ensure a clean, modern, and motivating environment where you can train with confidence. Whether you’re lifting, running, stretching, or recovering, our state-of-the-art setup is built to help you achieve peak performance."
    },
    {
        icon:<AcademicCapIcon className="h-6 w-6 "/>,
        title:"Experts and Pro Trainers",
        description:"From high-tech machines to spacious workout areas, we ensure a clean, modern, and motivating environment where you can train with confidence. Whether you’re lifting, running, stretching, or recovering, our state-of-the-art setup is built to help you achieve peak performance."
    }
] 

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        // highlighting where we are on the navigation
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm text-balance">
            At <span className="font-bold">EVOGYM</span> we believe fitness is
            more than just lifting weights and counting reps—it’s about building
            a stronger, healthier, and more confident you. Our mission is to
            create a space where everyone, from beginners to athletes, feels
            empowered to push limits, break barriers, and transform their lives.
          </p>
        </div>
        {/* BENEFITS */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map(( benefit ) => (
            <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
