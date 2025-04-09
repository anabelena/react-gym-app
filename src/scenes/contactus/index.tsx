import HText from "@/shared/HText";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { SelectedPage } from "@/shared/types";
import { p } from "framer-motion/client";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function ContactUs({ setSelectedPage }: Props) {
  const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  // trigger alow us to validate our form if needed
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="w-5/6 mx-auto pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          transition={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500"> JOIN NOW </span> TO GET IN SHAPE
          </HText>
          <p className="my-5 text-balance">
            Our app makes fitness simple — track workouts, set goals, and stay
            motivated with personalized plans and progress tracking. Whether
            you're a beginner or a pro, we’ve got the tools to help you crush
            it.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            transition={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/anabelen.aristah@gmail.com" //replace by anonymous url
              method="POST"
            >
              <input
                type="text"
                placeholder="NAME"
                className={inputStyles}
                //useForm properties
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 character"}
                </p>
              )}

              <input
                type="text"
                placeholder="EMAIL"
                className={inputStyles}
                //useForm properties
                {...register("email", {
                  required: true,
                  pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                placeholder="MESSAGE"
                className={inputStyles}
                //useForm properties
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 character"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duraction-500 hover:text-white "
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
