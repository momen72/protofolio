import { useState } from "react";
import { Loader } from "./Loader";

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);   // ✅ ابدأ الـ Loader قبل الـ request
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "7dc839de-5717-4080-932a-657ef985555c");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((r) => r.json());

      if (res.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult("❌ " + res.message);
      }
    } catch {
      setResult("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false); // ✅ وقف الـ Loader بعد الـ request في كل الحالات
    }
  };

  return (
    <div
      id="contact"
      className='w-full h-screen bg-black text-gray-300 items-center bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat pt-30'
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-black">
        <input type="hidden" name="subject" value="Eliana Jade - New form Submission" />

        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
            required
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30"
            required
            name="email"
          />
        </div>

        <textarea
          rows="6"
          placeholder="Enter your message"
          className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30"
          required
          name="message"
        />

        {loading ? (
          <Loader />
        ) : (
          <button
            type="submit"
            className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-[#A6FF5D] text-black rounded-full mx-auto hover:bg-white duration-500"
          >
            Submit now
          </button>
        )}

        <p className="mt-4 text-white">{result}</p>
      </form>
    </div>
  );
}

// setLoading(true)  ← قبل الـ request
// await fetch(...)  ← الـ request
// setLoading(false) ← في finally بعد الـ request