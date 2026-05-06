import React from "react";
import { CalendarDays, Mail, ArrowRight } from "lucide-react";

const DemoCallCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#000029] p-4 sm:p-10 font-sans antialiased overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#173DED]/10 blur-[140px] rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#5875f5]/5 blur-[100px] rounded-full" />

      <div className="relative group bg-[#05051a]/80 backdrop-blur-xl border border-white/10 p-8 sm:p-14 lg:px-20 w-full max-w-6xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#173DED]/40">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#173DED] to-transparent opacity-50" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Book your free <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#173DED] to-[#5875f5]">
                demo call.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
              Ready to scale? Whether you have a specific question or want to
              see
              <span className="text-white font-medium"> M&X Studios </span> in
              action, we're ready when you are.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center gap-4">
            <button className="whitespace-nowrap flex items-center justify-center gap-3 px-10 py-5 bg-[#173DED] hover:bg-[#2a4fff] text-white font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(23,61,237,0.4)] active:scale-95">
              <CalendarDays className="w-5 h-5" />
              <span>Schedule Time</span>
              <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>

            <button className="whitespace-nowrap flex items-center justify-center gap-3 px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white font-bold transition-all duration-300 active:scale-95">
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </button>
          </div>
        </div>

        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#173DED]/10 rounded-full blur-3xl group-hover:bg-[#173DED]/15 transition-colors duration-700" />
      </div>
    </div>
  );
};

export default DemoCallCard;
