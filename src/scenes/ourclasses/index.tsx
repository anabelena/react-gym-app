import { SelectedPage,ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes:Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength, boost endurance, and sculpt lean muscle with our weight training classes. Designed for all fitness levels, these sessions focus on proper form, progressive overload, and technique using free weights, machines, and bodyweight resistance. Whether you're lifting for the first time or leveling up your PRs, our expert coaches are here to guide, challenge, and push you to new limits.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Build strength, boost endurance, and sculpt lean muscle with our weight training classes. Designed for all fitness levels, these sessions focus on proper form, progressive overload, and technique using free weights, machines, and bodyweight resistance. Whether you're lifting for the first time or leveling up your PRs, our expert coaches are here to guide, challenge, and push you to new limits.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Build strength, boost endurance, and sculpt lean muscle with our weight training classes. Designed for all fitness levels, these sessions focus on proper form, progressive overload, and technique using free weights, machines, and bodyweight resistance. Whether you're lifting for the first time or leveling up your PRs, our expert coaches are here to guide, challenge, and push you to new limits.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Build strength, boost endurance, and sculpt lean muscle with our weight training classes. Designed for all fitness levels, these sessions focus on proper form, progressive overload, and technique using free weights, machines, and bodyweight resistance. Whether you're lifting for the first time or leveling up your PRs, our expert coaches are here to guide, challenge, and push you to new limits.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Build strength, boost endurance, and sculpt lean muscle with our weight training classes. Designed for all fitness levels, these sessions focus on proper form, progressive overload, and technique using free weights, machines, and bodyweight resistance. Whether you're lifting for the first time or leveling up your PRs, our expert coaches are here to guide, challenge, and push you to new limits.",
    image: image5,
  },
  {
    name: "Training Classes",
    description: "Build strength, boost endurance, and sculpt lean muscle with our weight training classes. Designed for all fitness levels, these sessions focus on proper form, progressive overload, and technique using free weights, machines, and bodyweight resistance. Whether you're lifting for the first time or leveling up your PRs, our expert coaches are here to guide, challenge, and push you to new limits.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function OurClasses({ setSelectedPage }: Props) {

  return (
    <section className="w-full bg-primary-100 py-40">
      <motion.div
        // calling to setSelectedPage to highligh navigation menu option
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0},
          }}
        >
          <div className="md:w-3/5 mb-8">
            <HText> OUR CLASSES </HText>
            <p className="py-5 text-balance">
              Discover the perfect workout for your goals and lifestyle. Whether
              you're into high-intensity training, strength building, mind-body
              balance, or group fun, we've got a class for you. From HIIT and
              CrossFit to Yoga and Pilates, our expert trainers guide you
              through dynamic sessions that challenge, motivate, and transform.
              Join the energy—your fitness journey starts here.
            </p>
          </div>
        </motion.div>
        {/* SIDE SCROLLING */}
        {/* scroll on X but not on Y  */}
        <div className="mt-1 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item:ClassType,index)=> (
              <Class
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />))
            }
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default OurClasses;
