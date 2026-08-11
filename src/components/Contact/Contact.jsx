
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { toast } from "react-toastify";

import contactImg from "../../assets/contact.jpg";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "https://nafis-imtiaj-hossain-server-opal.vercel.app/api/contact",
        formData
      );

      toast.success(res.data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        w-full
        bg-white
        py-16
        sm:py-20
        lg:py-24
        overflow-hidden
      "
    >
      <div
        className="
          w-full
          px-4
          sm:px-6
          lg:px-12
          xl:px-20
          2xl:px-32
        "
      >
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            text-center
            mb-12
            sm:mb-16
            lg:mb-20
          "
        >
          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-[#071426]
            "
          >
            Contact Me
          </h2>

          <div
            className="
              w-24
              sm:w-28
              h-1
              rounded-full
              bg-gradient-to-r
              from-lime-400
              via-green-400
              to-cyan-400
              mx-auto
              mt-5
            "
          />

          <p
            className="
              text-gray-500
              text-sm
              sm:text-base
              lg:text-lg
              mt-5
              sm:mt-6
            "
          >
            Let's work together
          </p>
        </motion.div>

        {/* Main Grid */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            sm:gap-14
            lg:gap-20
            items-center
          "
        >
          {/* Left Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            <img
              src={contactImg}
              alt="Contact"
              className="
                w-full
                max-w-lg
                mx-auto
                animate-pulse
              "
            />

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                bottom-4
                left-4
                sm:bottom-8
                sm:left-8
                bg-white
                rounded-2xl
                shadow-xl
                border
                border-gray-200
                p-5
                max-w-[90%]
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-gradient-to-r
                    from-lime-400
                    to-cyan-400
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaEnvelope className="text-white text-xl" />
                </div>

                <div>
                  <h4
                    className="
                      text-xl
                      font-bold
                      text-[#071426]
                    "
                  >
                    Available
                  </h4>

                  <p
                    className="
                      text-gray-500
                      text-sm
                    "
                  >
                    For Research Collaboration
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              bg-white
              rounded-3xl
              shadow-xl
              border
              border-gray-200
              p-6
              sm:p-8
              lg:p-10
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                text-[#071426]
                mb-8
              "
            >
              Send Me a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="
                space-y-5
                sm:space-y-6
              "
            >
              {/* Name */}

              <div>
                <label
                  className="
                    block
                    text-gray-700
                    font-medium
                    mb-2
                  "
                >
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    border
                    border-gray-300
                    outline-none
                    focus:border-lime-400
                    focus:ring-2
                    focus:ring-lime-200
                    transition
                  "
                />
              </div>

              {/* Email */}

              <div>
                <label
                  className="
                    block
                    text-gray-700
                    font-medium
                    mb-2
                  "
                >
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    border
                    border-gray-300
                    outline-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-200
                    transition
                  "
                />
              </div>

              {/* Subject */}

              <div>
                <label
                  className="
                    block
                    text-gray-700
                    font-medium
                    mb-2
                  "
                >
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Write a subject"
                  required
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    border
                    border-gray-300
                    outline-none
                    focus:border-lime-400
                    focus:ring-2
                    focus:ring-lime-200
                    transition
                  "
                />
              </div>

              {/* Message */}

              <div>
                <label
                  className="
                    block
                    text-gray-700
                    font-medium
                    mb-2
                  "
                >
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-xl
                    border
                    border-gray-300
                    outline-none
                    resize-none
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-200
                    transition
                  "
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-lime-400
                  via-green-400
                  to-cyan-400
                  text-white
                  text-lg
                  font-bold
                  shadow-lg
                  hover:scale-105
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Contact Information */}

            <div
              className="
                mt-10
                space-y-5
              "
            >
              {/* Email */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-lime-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <FaEnvelope className="text-lime-600" />
                </div>

                <div>
                  <h4
                    className="
                      font-bold
                      text-[#071426]
                    "
                  >
                    Email
                  </h4>

                  <p className="text-gray-500">
                    yourmail@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-cyan-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <FaPhoneAlt className="text-cyan-600" />
                </div>

                <div>
                  <h4
                    className="
                      font-bold
                      text-[#071426]
                    "
                  >
                    Phone
                  </h4>

                  <p className="text-gray-500">
                    +8801XXXXXXXXX
                  </p>
                </div>
              </div>

              {/* Address */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-lime-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <FaMapMarkerAlt className="text-lime-600" />
                </div>

                <div>
                  <h4
                    className="
                      font-bold
                      text-[#071426]
                    "
                  >
                    Address
                  </h4>

                  <p className="text-gray-500">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

