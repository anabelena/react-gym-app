import { SelectedPage } from "@/shared/types";
import { JSX } from "react";
import { motion } from "framer-motion";

const childVariant = {
  hidden:{opacity:0,scale:0.9},
  visible:{opacity:1,scale:1}
}

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div 
    className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    variants={childVariant}>
      {/* ICON */}
      <div className="mb-4 flex justify-center ">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      {/* TITLE */}
      <h4 className="font-bold "> {title} </h4>
      {/* DESCRIPTION */}
      <p className="my-3"> {description}</p>
      {/* LINK */}
      <a
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn more</p>
      </a>
    </motion.div>
  );
};

export default Benefit;
