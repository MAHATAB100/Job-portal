// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const JobDetails = () => {
//     const job = useLoaderData();
    
//     return (
//         <div>
//             <h2>job details</h2>
//         </div>
//     );
// };

// export default JobDetails;
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    const [showModal, setShowModal] = useState(false);

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">😔</div>
                    <h2 className="text-3xl font-bold">Job Not Found</h2>
                    <p className="text-gray-500 mt-2">
                        The job you are looking for doesn't exist.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">

            {/* ================= HERO SECTION ================= */}
            <section className="relative overflow-hidden bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600">

                {/* Background decoration */}
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-6xl mx-auto px-4 py-16">

                    <div className="flex flex-col md:flex-row items-center gap-7">

                        {/* Company Logo */}
                        <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-5">

                            <img
                                src={job.company_logo}
                                alt={job.company}
                                className="max-w-full max-h-full object-contain"
                            />

                        </div>

                        {/* Job Info */}
                        <div className="text-center md:text-left text-white flex-1">

                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">

                                <span className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm">
                                    {job.jobType}
                                </span>

                                <span className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm">
                                    {job.category}
                                </span>

                                <span className="px-4 py-1 rounded-full bg-green-400/20 text-green-100 text-sm">
                                    ● {job.status}
                                </span>

                            </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold">
                                {job.title}
                            </h1>

                            <p className="text-xl mt-3 font-medium">
                                {job.company}
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-5 text-white/90">

                                <span>
                                    📍 {job.location}
                                </span>

                                <span>
                                    📅 Deadline: {job.applicationDeadline}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* ================= MAIN CONTENT ================= */}
            <main className="max-w-6xl mx-auto px-4 py-10">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="lg:col-span-2 space-y-7">

                        {/* Job Description */}
                        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-7">

                            <div className="flex items-center gap-3 mb-5">

                                <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">
                                    📋
                                </div>

                                <h2 className="text-2xl font-bold text-gray-800">
                                    Job Description
                                </h2>

                            </div>

                            <p className="text-gray-600 leading-8 text-[16px]">
                                {job.description}
                            </p>

                        </section>


                        {/* Requirements */}
                        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-7">

                            <div className="flex items-center gap-3 mb-6">

                                <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-xl">
                                    🎯
                                </div>

                                <h2 className="text-2xl font-bold text-gray-800">
                                    Requirements
                                </h2>

                            </div>

                            <div className="flex flex-wrap gap-3">

                                {job.requirements?.map((item, index) => (

                                    <div
                                        key={index}
                                        className="group px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 transition duration-300"
                                    >

                                        <span className="text-indigo-600 font-medium">
                                            ✓
                                        </span>

                                        <span className="ml-2 text-gray-700">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </section>


                        {/* Responsibilities */}
                        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-7">

                            <div className="flex items-center gap-3 mb-7">

                                <div className="w-11 h-11 rounded-xl bg-pink-100 flex items-center justify-center text-xl">
                                    🚀
                                </div>

                                <h2 className="text-2xl font-bold text-gray-800">
                                    Responsibilities
                                </h2>

                            </div>

                            <div className="space-y-5">

                                {job.responsibilities?.map((item, index) => (

                                    <div
                                        key={index}
                                        className="flex gap-4"
                                    >

                                        <div className="flex flex-col items-center">

                                            <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>

                                            {index !== job.responsibilities.length - 1 && (
                                                <div className="w-[2px] h-full bg-indigo-100 mt-2"></div>
                                            )}

                                        </div>

                                        <div className="pt-1 pb-5">
                                            <p className="text-gray-700 leading-7">
                                                {item}
                                            </p>
                                        </div>

                                    </div>

                                ))}

                            </div>

                        </section>

                    </div>


                    {/* ================= RIGHT SIDEBAR ================= */}
                    <aside className="space-y-6">

                        {/* Salary Card */}
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">

                                <p className="text-white/80">
                                    Salary Range
                                </p>

                                <h2 className="text-3xl font-extrabold mt-1">
    ${job.salaryRange?.min?.toLocaleString()}
    <span className="text-xl font-medium">
        {" "} - {" "}
    </span>
    ${job.salaryRange?.max?.toLocaleString()}
</h2>
                                <p className="text-white/70 mt-1 uppercase">
                                    {job.salaryRange?.currency}
                                </p>

                            </div>

                            <div className="p-6 space-y-5">

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        Job Type
                                    </span>

                                    <span className="font-semibold">
                                        {job.jobType}
                                    </span>

                                </div>

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        Location
                                    </span>

                                    <span className="font-semibold text-right">
                                        {job.location}
                                    </span>

                                </div>

                                <div className="flex justify-between">

                                    <span className="text-gray-500">
                                        Category
                                    </span>

                                    <span className="font-semibold">
                                        {job.category}
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* Apply Card */}
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sticky top-5">

                            <div className="text-center">

                                <div className="text-4xl mb-3">
                                    💼
                                </div>

                                <h3 className="text-xl font-bold">
                                    Interested in this job?
                                </h3>

                                <p className="text-gray-500 mt-2 text-sm">
                                    Don't miss this opportunity. Apply now
                                    and take the next step in your career.
                                </p>

                            </div>

                            <button
                                onClick={() => setShowModal(true)}
                                className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300"
                            >
                                Apply Now 🚀
                            </button>

                            <p className="text-center text-xs text-gray-400 mt-4">
                                Application Deadline
                            </p>

                            <p className="text-center font-bold text-red-500">
                                {job.applicationDeadline}
                            </p>

                        </div>


                        {/* HR Card */}
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">

                            <h3 className="text-xl font-bold mb-5">
                                👨‍💼 Contact HR
                            </h3>

                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl">
                                    👤
                                </div>

                                <div>

                                    <p className="font-bold">
                                        {job.hr_name}
                                    </p>

                                    <p className="text-sm text-gray-500 break-all">
                                        {job.hr_email}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </aside>

                </div>

            </main>


            {/* ================= APPLY MODAL ================= */}
            {showModal && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

                    <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden">

                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">

                            <div className="flex justify-between items-start">

                                <div>

                                    <p className="text-white/80 text-sm">
                                        Apply for
                                    </p>

                                    <h2 className="text-2xl font-bold mt-1">
                                        {job.title}
                                    </h2>

                                    <p className="mt-1 text-white/80">
                                        {job.company}
                                    </p>

                                </div>

                                <button
                                    onClick={() => setShowModal(false)}
                                    className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition"
                                >
                                    ✕
                                </button>

                            </div>

                        </div>


                        {/* Form */}
                        <form className="p-7 space-y-5">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <div>

                                    <label className="block font-semibold mb-2">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                                        required
                                    />

                                </div>


                                <div>

                                    <label className="block font-semibold mb-2">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                                        required
                                    />

                                </div>

                            </div>


                           <div>
    <label className="block font-semibold mb-2">
        Upload Resume
    </label>

    <input
        type="file"
        accept=".pdf"
        className="file-input file-input-bordered w-full"
        required
    />

    <p className="text-xs text-gray-400 mt-2">
        Only PDF files are accepted. Maximum size: 5MB.
    </p>
</div>

                            <div>

                                <label className="block font-semibold mb-2">
                                    Cover Letter
                                </label>

                                <textarea
                                    rows="4"
                                    placeholder="Tell the employer why you are a good fit..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 resize-none"
                                ></textarea>

                            </div>


                            <div className="flex gap-3 pt-2">

                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 py-3 rounded-xl border border-gray-200 font-semibold hover:bg-gray-50 transition"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:shadow-lg transition"
                                >
                                    Submit Application 🚀
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </div>
    );
};

export default JobDetails;