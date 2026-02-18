import { useEffect, useState } from "react";
import gestureImg from "@/assets/gesture.png"; // your manga image
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Hand, Camera, Type, ArrowRight } from "lucide-react";

const Landing = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const letters = ["A", "S", "L"];
const confidences = ["98%", "96%", "99%"];

const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % letters.length);
  }, 2000);

  return () => clearInterval(interval);
}, []);


  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-2 font-semibold text-lg">
            <Hand className="w-5 h-5 text-blue-400" />
            SignLang
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <button onClick={() => scrollTo("features")} className="hover:text-white transition">
              Features
            </button>
            <button onClick={() => scrollTo("how")} className="hover:text-white transition">
              How it works
            </button>
          </div>

          <Link
            to="/app"
            className="border border-white/20 px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
          >
            Try Now
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-500 text-sm mb-4">
              Real-time gesture recognition
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
              Break{" "}
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                communication barriers
              </span>{" "}
              instantly
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Detect hand gestures using your webcam and convert them into text in real time.
            </p>

            <div className="flex gap-4">
              <Link
                to="/app"
                className="bg-white text-black px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-200 transition"
              >
                Try Now <ArrowRight size={18} />
              </Link>

              <button
                onClick={() => scrollTo("features")}
                className="border border-white/20 px-6 py-3 rounded-lg text-gray-300 hover:bg-white/10 transition"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          {/* RIGHT MOCK UI */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="relative"
>
  {/* Glow */}
  <div className="absolute inset-0 bg-white/5 blur-3xl opacity-30"></div>

  <div className="relative border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 shadow-2xl">

    {/* Camera Preview */}
    <div className="relative bg-black rounded-xl overflow-hidden h-64 flex items-center justify-center">

      {/* Image */}
      <img
        src={gestureImg}
        alt="Sign gesture"
        className="h-full object-contain opacity-80"
      />

      {/* Detection Box */}
      <div className="absolute w-40 h-40 border border-white/30 rounded-lg animate-pulse"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Label */}
      <p className="absolute bottom-2 text-xs text-gray-400">
        Live Detection
      </p>
    </div>

    {/* Results */}
    <div className="grid grid-cols-2 gap-4 mt-5">

      {/* Letter */}
      <div className="border border-white/10 bg-white/[0.03] p-4 rounded-xl backdrop-blur-sm transition-all">
        <p className="text-3xl font-semibold text-white">
          {letters[index]}
        </p>
        <p className="text-gray-500 text-sm">Detected</p>
      </div>

      {/* Confidence */}
      <div className="border border-white/10 bg-white/[0.03] p-4 rounded-xl backdrop-blur-sm transition-all">
        <p className="text-2xl font-semibold text-blue-400">
          {confidences[index]}
        </p>
        <p className="text-gray-500 text-sm">Confidence</p>
      </div>

    </div>
  </div>
</motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 border-t border-white/10 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-semibold text-white text-center mb-4">
            Features
          </h2>

          <p className="text-gray-400 text-center mb-12">
            Simple, fast, and accessible gesture recognition.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Real-time detection",
              "Simple to use",
              "No setup required",
            ].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-xl p-6 text-center transition-all hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1"
              >
                <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">
                  Experience smooth gesture recognition directly from your browser.
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 relative">

          <h2 className="text-4xl font-semibold text-center mb-16">
            How it works
          </h2>

          {/* Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10"></div>

          <div className="grid md:grid-cols-3 gap-12 text-center relative">

            {[
              { title: "Enable Camera", icon: Camera },
              { title: "Show Gesture", icon: Hand },
              { title: "Get Result", icon: Type },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition">
                  <step.icon size={22} />
                </div>

                <p className="text-gray-300">{step.title}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d0d0d] border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center px-6 relative border border-white/10 bg-white/[0.03] rounded-2xl p-12 overflow-hidden">

          {/* Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 blur-3xl"></div>

          <h2 className="text-3xl font-semibold mb-4">
            Start recognizing gestures
          </h2>

          <p className="text-gray-400 mb-8">
            Open the app and begin instantly. No signup required.
          </p>

          <Link
            to="/app"
            className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition inline-flex items-center gap-2"
          >
            Launch App <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10">
        SignLang • Real-time gesture recognition
      </footer>

    </div>
  );
};

export default Landing;
