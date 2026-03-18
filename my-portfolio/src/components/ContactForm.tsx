import { useState } from "react";
import SuccessGif from "../assets/success.gif";
import ErrorGif from "../assets/error.gif";

function ContactForm() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mblrvoov", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  if (status === "SUCCESS") {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-slate-50 dark:bg-blue-900/20 rounded-3xl border border-slate-200 dark:border-blue-800 min-h-[400px] text-center">
        <img src={SuccessGif} alt="Success" className="w-50 h-50 mb-6" />
        <h3 className="text-2xl font-bold dark:text-white">Message Sent!</h3>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          I'll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("IDLE")}
          className="mt-8 text-blue-500 font-bold hover:underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-slate-200 dark:border-blue-800 space-y-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-bold mb-2 dark:text-slate-300"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-blue-950 border border-slate-200 dark:border-blue-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
          placeholder="Monkey D Luffy"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-bold mb-2 dark:text-slate-300"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-blue-950 border border-slate-200 dark:border-blue-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
          placeholder="monkey.d.luffy56@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-bold mb-2 dark:text-slate-300"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-blue-950 border border-slate-200 dark:border-blue-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
          placeholder="Hey Abdul love your work, let's connect!"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
      >
        Send Message
      </button>

      {/* {status === "SUCCESS" && (
        <p className="text-green-500 font-bold text-center mt-4">
          Message sent successfully!
        </p>
      )}
      {status === "ERROR" && (
        <p className="text-red-500 font-bold text-center mt-4">
          Oops! Something went wrong.
        </p>
      )} */}

      {status === "ERROR" && (
        <div className="flex flex-col items-center pt-4 border-t border-red-100 dark:border-red-900/30">
          <img src={ErrorGif} alt="Error" className="w-50 h-50 mb-2" />
          <p className="text-red-500 font-bold text-center">
            Oops! Something went wrong.
          </p>
          <button
            onClick={() => setStatus("IDLE")}
            className="text-xs text-slate-500 underline mt-1"
          >
            Try again
          </button>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
