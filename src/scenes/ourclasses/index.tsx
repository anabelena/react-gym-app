import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function OurClasses({ setSelectedPage }: Props) {
  return (
    <section className="w-full bg-primary-100 py-40">
      <motion.div
        // calling to setSelectedPage to highligh navigation menu option
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        HOLA
      </motion.div>
    </section>
  );
}

export default OurClasses;
