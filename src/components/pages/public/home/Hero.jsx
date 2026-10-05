import { motion } from "framer-motion";
import Button from "../../../common/ui/Button";
import Badge from "../../../common/Badge";
import heroImage from "../../../../assets/images/hero-illustration.svg";
import coverImage from "../../../../assets/images/coverImage.jpg";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100">
      {/* Background Decoration */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-200 opacity-30 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge>Welcome to ICT Department</Badge>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Transforming Ideas
              <span className="block text-blue-700">
                Into Digital Innovation
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Empowering future ICT professionals through innovative education,
              research, and industry collaboration while preparing students for
              the evolving digital world.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/courses">Explore Courses</Button>

              <Button to="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.img
              src={heroImage}
              alt="ICT Students"
              className="w-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
            />

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute top-10 -left-8 bg-white shadow-xl rounded-2xl px-6 py-4"
            >
              <h2 className="text-3xl font-bold text-blue-700">500+</h2>

              <p className="text-gray-600">Students</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute bottom-8 -right-8 bg-white shadow-xl rounded-2xl px-6 py-4"
            >
              <h2 className="text-3xl font-bold text-green-600">95%</h2>

              <p className="text-gray-600">Employment</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
