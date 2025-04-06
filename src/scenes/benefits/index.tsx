import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 " />,
    title: "State of the Art Facilities",
    description:
      "From high-tech machines to spacious workout areas, we ensure a clean, modern, and motivating environment where you can train with confidence. Whether you’re lifting, running, stretching, or recovering, our state-of-the-art setup is built to help you achieve peak performance.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 " />,
    title: "100's of Diverse Classes",
    description:
      "From high-tech machines to spacious workout areas, we ensure a clean, modern, and motivating environment where you can train with confidence. Whether you’re lifting, running, stretching, or recovering, our state-of-the-art setup is built to help you achieve peak performance.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 " />,
    title: "Experts and Pro Trainers",
    description:
      "From high-tech machines to spacious workout areas, we ensure a clean, modern, and motivating environment where you can train with confidence. Whether you’re lifting, running, stretching, or recovering, our state-of-the-art setup is built to help you achieve peak performance.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        // highlighting where we are on the navigation
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm text-balance">
            At <span className="font-bold">EVOGYM</span> we believe fitness is
            more than just lifting weights and counting reps—it’s about building
            a stronger, healthier, and more confident you. Our mission is to
            create a space where everyone, from beginners to athletes, feels
            empowered to push limits, break barriers, and transform their lives.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS & DESCRIPTION */}
        <div className="mt-24 md:flex items-center justify-between ">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />
          {/* DESCRIPTION */}
          <div className="md:basis-3/5">
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    {" "}
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500"> FIT </span>{" "}
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-pretty">
                Join a global movement of energized individuals who are
                transforming their lives, one workout at a time. With millions
                of members around the world, our fitness community thrives on
                positivity, progress, and real results. Whether you’re hitting
                the gym, tuning in from home, or taking your first steps toward
                a healthier lifestyle, you’re never doing it alone. From
                personalized plans to expert coaching, everything is designed to
                meet you where you are — and help you get where you want to be.
              </p>
              <p className="mb-5 text-pretty">
                What sets us apart? It’s the energy. The motivation. The
                celebration of every milestone, big or small. Our members don’t
                just show up — they show out, support each other, and keep
                pushing forward together. With flexible programs, engaging
                challenges, and a culture built on encouragement, it’s easy to
                see why millions are smiling, sweating, and sticking with it.
                This isn’t just fitness — it’s a feel-good revolution.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-30 before:right-20  before:z[-1] before:content-sparkles ">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now !
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
