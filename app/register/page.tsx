"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

/* ================= TYPES ================= */

interface RegisterFormValues {
    name: string;
    year: string;
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

/* ================= COMPONENT ================= */

export default function Register(): React.ReactElement {
    const [loading, setLoading] = useState(false);
    const [fileName, setFileName] = useState<string>("");
    const [preview, setPreview] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterFormValues>();

    /* ================= SUBMIT ================= */

    const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
        setLoading(true);

        try {
            const file = data.paymentScreenshot?.[0];

            if (!file) {
                toast.error("Payment screenshot is required.");
                setLoading(false);
                return;
            }

            if (file.size > 10 * 1024 * 1024) {
                toast.error("File size must be less than 10MB.");
                setLoading(false);
                return;
            }

            if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
                toast.error("Only PNG or JPG images allowed.");
                setLoading(false);
                return;
            }

            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                if (key !== "paymentScreenshot") {
                    formData.append(key, value as string);
                }
            });
            formData.append("paymentScreenshot", file);

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/register`,
                { method: "POST", body: formData }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Submission failed");
            }

            // ✅ Success — show toast, reset form + file state
            toast.success("Registration successful! We will contact you shortly.", {
                duration: 5000,
            });

            reset();
            setFileName("");
            setPreview(null);

        } catch (error: any) {
            toast.error(error?.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    /* ================= FILE HANDLER ================= */

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setPreview(URL.createObjectURL(file));
        }
    };

    /* ================= STYLES ================= */

    const label = "block mb-2 font-medium text-[#0d0c2d]";

    const input = (err?: boolean) =>
        `w-full px-4 py-4 rounded-md border 
         text-[#0d0c2d]
         placeholder:text-[#0d0c2d]/70
         bg-white
         focus:outline-none focus:ring-2 ${err
            ? "border-red-500 focus:ring-red-500"
            : "border-[#0d0c2d]/30 focus:ring-[#C7BEE6]"
        }`;

    /* ================= UI ================= */

    return (
        <>
            {/* 🔔 Toast container — add this once at top level */}
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        fontWeight: "600",
                        fontSize: "15px",
                        borderRadius: "12px",
                        padding: "14px 20px",
                    },
                    success: { duration: 5000 },
                    error: { duration: 4000 },
                }}
            />

            <section className="bg-white py-28 px-6 flex justify-center">
                <div className="max-w-5xl w-full bg-white border border-[#C7BEE6]/40 rounded-xl p-10 shadow-md">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d0c2d] text-center mb-4">
                        Delegate Registration
                    </h1>

                   <div className="text-center mb-10 bg-[#C7BEE6]/10 border border-[#C7BEE6]/40 rounded-lg p-4">
  <p className="text-[#0d0c2d] font-medium">
    Delegate Fee: ₹1600
  </p>

  <p className="text-sm text-[#0d0c2d]/70 mt-1">
    Please refer to the portfolio matrix before selecting your preferences.
  </p>

 <a
  href="https://docs.google.com/spreadsheets/d/1SN7dr2zejnMXOxHeX2Q7RSbUu6aWNMGt9wovqtTdsIk/edit?gid=0#gid=0"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-3 text-[#0d0c2d] font-semibold underline hover:text-[#C7BEE6]"
>
  View Portfolio Matrix
</a>
</div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {/* BASIC INFO */}
                        <div>
                            <label className={label}>Name <span className="text-red-500">*</span></label>
                            <input
                                placeholder="Enter your full name"
                                {...register("name", { required: "Name is required" })}
                                className={input(!!errors.name)}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className={label}>Year <span className="text-red-500">*</span></label>
                            <select {...register("year")} className={input()}>
                                <option value="">Select Year</option>
                                <option>1st</option>
                                <option>2nd</option>
                                <option>3rd</option>
                                <option>4th</option>
                                <option>others</option>
                            </select>
                        </div>

                        <div>
                            <label className={label}>Phone <span className="text-red-500">*</span></label>
                            <input
                                placeholder="Enter phone number"
                                {...register("phone", { required: "Phone no. is required" })}
                                className={input(!!errors.phone)}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                        </div>

                        <div>
                            <label className={label}>Institute <span className="text-red-500">*</span></label>
                            <input
                                placeholder="Institute name"
                                {...register("institute", { required: "Institute name is required" })}
                                className={input(!!errors.institute)}
                            />
                            {errors.institute && <p className="text-red-500 text-sm mt-1">{errors.institute.message}</p>}
                        </div>

                        <div>
                            <label className={label}>Email <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                placeholder="Email address"
                                {...register("email", { required: "Email is required" })}
                                className={input(!!errors.email)}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className={label}>Branch <span className="text-red-500">*</span></label>
                            <input
                                placeholder="Enter your branch"
                                {...register("branch", {
                                    required: "Branch is required",
                                    minLength: { value: 2, message: "Branch name too short" },
                                })}
                                className={input(!!errors.branch)}
                            />
                            {errors.branch && <p className="text-red-500 text-sm mt-1">{errors.branch.message}</p>}
                        </div>

                        {/* COMMITTEE 1 */}
                        <div className="md:col-span-2">
                            <label className={label}>1st Committee Preference <span className="text-red-500">*</span></label>
                            <select
                                {...register("committee1", { required: "Committee is required" })}
                                className={input(!!errors.committee1)}
                            >
                                <option value="">Select Committee</option>
                                <option>UNGA</option>
                                <option>UNHRC</option>
                                <option>UNCSW</option>
                                <option>AIPPM</option>
                            </select>
                            {errors.committee1 && <p className="text-red-500 text-sm mt-1">{errors.committee1.message}</p>}
                        </div>

                        {["portfolio1_1", "portfolio1_2", "portfolio1_3"].map((f, i) => (
                            <div key={f}>
                                <label className={label}>
                                    Portfolio Preference {i + 1} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    placeholder="Portfolio choice"
                                    {...register(f as keyof RegisterFormValues, { required: true })}
                                    className={input(!!errors[f as keyof RegisterFormValues])}
                                />
                            </div>
                        ))}

                        {/* COMMITTEE 2 */}
                        <div className="md:col-span-2">
                            <label className={label}>2nd Committee Preference <span className="text-red-500">*</span></label>
                            <select
                                {...register("committee2", { required: "Committee is required" })}
                                className={input(!!errors.committee2)}
                            >
                                <option value="">Select Committee</option>
                                <option>UNGA</option>
                                <option>UNHRC</option>
                                <option>UNCSW</option>
                                <option>AIPPM</option>
                            </select>
                            {errors.committee2 && <p className="text-red-500 text-sm mt-1">{errors.committee2.message}</p>}
                        </div>

                        {["portfolio2_1", "portfolio2_2", "portfolio2_3"].map((f, i) => (
                            <div key={f}>
                                <label className={label}>
                                    Portfolio Preference {i + 1} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    placeholder="Portfolio choice"
                                    {...register(f as keyof RegisterFormValues, { required: true })}
                                    className={input(!!errors[f as keyof RegisterFormValues])}
                                />
                            </div>
                        ))}

                        {/* EXPERIENCE */}
                        <div>
                            <label className={label}>Prior MUN Experience <span className="text-red-500">*</span></label>
                            <input
                                placeholder="Mention your experience — if none, write N/A"
                                {...register("experience", { required: true })}
                                className={input(!!errors.experience)}
                            />
                        </div>

                        <div>
                            <label className={label}>Referral ID (Optional)</label>
                            <input placeholder="Optional" {...register("referral")} className={input()} />
                        </div>

                        <div className="md:col-span-2">
                            <label className={label}>Transaction Id <span className="text-red-500">*</span></label>
                            <input
                                placeholder="Transaction reference"
                                {...register("transaction", { required: "Transaction id is required" })}
                                className={input(!!errors.transaction)}
                            />
                            {errors.transaction && <p className="text-red-500 text-sm mt-1">{errors.transaction.message}</p>}
                        </div>

                        {/* QR SECTION */}
                        <div className="md:col-span-2 flex flex-col items-center justify-center border-2 border-dashed border-[#C7BEE6] rounded-2xl p-8 bg-gradient-to-br from-[#C7BEE6]/5 to-white">
                            <div className="mb-4">
                                <p className="text-lg font-semibold text-[#0d0c2d] text-center mb-2">Scan to Pay Delegate Fee</p>
                                <p className="text-sm text-[#0d0c2d]/60 text-center">UPI Payment - ₹1600</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-lg border border-[#C7BEE6]/30">
                                <Image src="/QR.png" alt="Payment QR Code" width={200} height={200} quality={100} className="rounded-lg" />
                            </div>
                        </div>

                        {/* FILE UPLOAD */}
                        <div className="md:col-span-2">
                            <label className={label}>Payment Screenshot <span className="text-red-500">*</span></label>

                            <div className="relative">
                                <input
                                    type="file"
                                    accept="image/png,image/jpeg,image/jpg"
                                    className="hidden"
                                    id="file-upload"
                                    {...register("paymentScreenshot", {
                                        required: "Payment screenshot is required",
                                        onChange: (e) => handleFileChange(e),
                                    })}
                                />

                                <label
                                    htmlFor="file-upload"
                                    className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                                        errors.paymentScreenshot
                                            ? "border-red-500 bg-red-50"
                                            : "border-[#C7BEE6] bg-[#C7BEE6]/5 hover:bg-[#C7BEE6]/10"
                                    }`}
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <p className="mb-2 text-sm text-[#0d0c2d] font-medium">
                                            <span className="font-semibold text-[#C7BEE6]">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-xs text-[#0d0c2d]/60">PNG, JPG or JPEG (MAX. 10MB)</p>
                                        {fileName && (
                                            <p className="mt-2 text-sm text-[#0d0c2d] font-medium">Selected: {fileName}</p>
                                        )}
                                    </div>
                                </label>
                            </div>

                            {preview && (
                                <div className="mt-4 flex justify-center">
                                    <Image src={preview} alt="Preview" width={200} height={200} className="rounded-lg border" />
                                </div>
                            )}
                        </div>

                        {/* SUBMIT */}
                        <div className="md:col-span-2 flex justify-center mt-6">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-[#0d0c2d] text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-[#0d0c2d]/90 transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}