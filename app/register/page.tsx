"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { createClient } from "@supabase/supabase-js";

/* ================= SUPABASE ================= */

const supabase = createClient(
    "https://gzesnriebmpgnwvzrvyd.supabase.co",
    "YOUR_PUBLIC_ANON_KEY"
);

/* ================= TYPES ================= */

interface RegisterFormValues {
    name: string;
    year?: string;
    phone: string;
    institute: string;
    email: string;
    branch?: string;

    committee1: string;
    portfolio1_1: string;
    portfolio1_2: string;
    portfolio1_3: string;

    committee2: string;
    portfolio2_1: string;
    portfolio2_2: string;
    portfolio2_3: string;

    experience: string;
    referral?: string;
    transaction: string;
    paymentScreenshot: FileList;
}

type Status =
    | { type: "success"; message: string }
    | { type: "error"; message: string }
    | null;

/* ================= COMPONENT ================= */

export default function Register(): React.ReactElement {
    const [status, setStatus] = useState<Status>(null);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterFormValues>();

    /* ================= SUBMIT ================= */

    const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
        setLoading(true);
        setStatus(null);

        try {
            const file = data.paymentScreenshot?.[0];
            if (!file) {
                setStatus({ type: "error", message: "Payment screenshot is required." });
                setLoading(false);
                return;
            }

            const filePath = `screenshots/${Date.now()}_${data.phone}`;

            const { error: uploadError } = await supabase.storage
                .from("screenshots")
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: urlData } = supabase.storage
                .from("screenshots")
                .getPublicUrl(filePath);

            const { error } = await supabase.from("registrations").insert([
                {
                    ...data,
                    paymentScreenshot: urlData.publicUrl,
                },
            ]);

            if (error) throw error;

            setStatus({
                type: "success",
                message: "Registration successful. We will contact you shortly.",
            });

            reset();
        } catch {
            setStatus({
                type: "error",
                message: "Registration failed. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    /* ================= STYLES ================= */

    const label = "block mb-2 font-medium text-[#0d0c2d]";
    const input = (err?: boolean) =>
        `w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${err
            ? "border-red-500 focus:ring-red-500"
            : "border-[#0d0c2d]/30 focus:ring-[#C7BEE6]"
        }`;

    /* ================= UI ================= */

    return (
        <section className="bg-white py-28 px-6 flex justify-center">
            <div className="max-w-5xl w-full border border-[#C7BEE6]/40 rounded-xl p-10 shadow-md">

                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d0c2d] text-center mb-4">
                    Delegate Registration
                </h1>

                <p className="text-center text-[#0d0c2d]/70 mb-10">
                    External Delegate Fee: ₹1600 <br />
                    Internal Delegate Fee: ₹500
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >

                    {/* BASIC INFO */}
                    <div>
                        <label className={label}>Name</label>
                        <input {...register("name", { required: true })} className={input(!!errors.name)} />
                    </div>

                    <div>
                        <label className={label}>Year</label>
                        <select {...register("year")} className={input()}>
                            <option value="">Select Year</option>
                            <option>1st</option>
                            <option>2nd</option>
                            <option>3rd</option>
                            <option>4th</option>
                        </select>
                    </div>

                    <div>
                        <label className={label}>Phone</label>
                        <input {...register("phone", { required: true })} className={input(!!errors.phone)} />
                    </div>

                    <div>
                        <label className={label}>Institute</label>
                        <input {...register("institute", { required: true })} className={input()} />
                    </div>

                    <div>
                        <label className={label}>Email</label>
                        <input type="email" {...register("email", { required: true })} className={input()} />
                    </div>

                    <div>
                        <label className={label}>Branch</label>
                        <select {...register("branch")} className={input()}>
                            <option value="">Select Branch</option>
                            <option>CSE</option>
                            <option>CS</option>
                            <option>CS IT</option>
                            <option>CSE AI</option>
                            <option>AIML</option>
                            <option>IT</option>
                            <option>ECE</option>
                            <option>ME</option>
                        </select>
                    </div>

                    {/* COMMITTEE 1 */}
                    <div className="md:col-span-2">
                        <label className={label}>1st Committee Preference</label>
                        <select {...register("committee1", { required: true })} className={input()}>
                            <option value="">Select Committee</option>
                            <option>UNGA</option>
                            <option>UNHRC</option>
                            <option>UNEP</option>
                            <option>AIPPM</option>
                        </select>
                    </div>

                    {["portfolio1_1", "portfolio1_2", "portfolio1_3"].map((f) => (
                        <div key={f}>
                            <label className={label}>Portfolio Preference</label>
                            <input {...register(f as keyof RegisterFormValues, { required: true })} className={input()} />
                        </div>
                    ))}

                    {/* COMMITTEE 2 */}
                    <div className="md:col-span-2">
                        <label className={label}>2nd Committee Preference</label>
                        <select {...register("committee2", { required: true })} className={input()}>
                            <option value="">Select Committee</option>
                            <option>UNGA</option>
                            <option>UNHRC</option>
                            <option>UNEP</option>
                            <option>AIPPM</option>
                        </select>
                    </div>

                    {["portfolio2_1", "portfolio2_2", "portfolio2_3"].map((f) => (
                        <div key={f}>
                            <label className={label}>Portfolio Preference</label>
                            <input {...register(f as keyof RegisterFormValues, { required: true })} className={input()} />
                        </div>
                    ))}

                    {/* EXPERIENCE */}
                    <div>
                        <label className={label}>Prior MUN Experience</label>
                        <input {...register("experience", { required: true })} className={input()} />
                    </div>

                    <div>
                        <label className={label}>Referral ID</label>
                        <input {...register("referral")} className={input()} />
                    </div>

                    <div className="md:col-span-2">
                        <label className={label}>Transaction Number</label>
                        <input {...register("transaction", { required: true })} className={input()} />
                    </div>

                    {/* FILE */}
                    <div className="md:col-span-2">
                        <label className={label}>Payment Screenshot</label>
                        <input
                            type="file"
                            accept="image/png,image/jpeg"
                            {...register("paymentScreenshot", { required: true })}
                            className={input(!!errors.paymentScreenshot)}
                        />
                    </div>

                    {/* STATUS */}
                    {status && (
                        <div className={`md:col-span-2 text-center font-medium ${status.type === "success" ? "text-green-600" : "text-red-600"
                            }`}>
                            {status.message}
                        </div>
                    )}

                    {/* SUBMIT */}
                    <div className="md:col-span-2 flex justify-center mt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#0d0c2d] text-white px-10 py-3 rounded-lg hover:bg-[#0d0c2d]/90 transition disabled:opacity-60"
                        >
                            {loading ? "Submitting..." : "Submit Registration"}
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
}
