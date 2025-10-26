import React, { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function InquiryForm({ inquiryFor = "service" }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service_type: "web",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");

        const { error } = await supabase.from("inquiries").insert([
            {
                ...formData,
                inquiry_for: inquiryFor,
            },
        ]);

        if (error) {
            console.error(error);
            setStatus("Error: " + error.message);
        } else {
            setStatus("Inquiry sent successfully!");
            setFormData({
                name: "",
                email: "",
                phone: "",
                service_type: "web",
                message: "",
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col gap-3 p-4 border rounded-xl"
        >
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                value={formData.name}
                required
                className="border p-2 rounded"
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                value={formData.email}
                required
                className="border p-2 rounded"
            />
            <input
                type="tel"
                name="phone"
                placeholder="Your Phone (+91...)"
                onChange={handleChange}
                value={formData.phone}
                required
                className="border p-2 rounded"
            />

            <select
                name="service_type"
                onChange={handleChange}
                value={formData.service_type}
                className="border p-2 rounded"
            >
                <option value="web">Web Development</option>
                <option value="app">App Development</option>
                <option value="uiux">UI/UX Design</option>
                <option value="other">Digital Marketing</option>
            </select>

            <textarea
                name="message"
                placeholder="Your message..."
                onChange={handleChange}
                value={formData.message}
                className="border p-2 rounded"
            ></textarea>

            <button type="submit" className="bg-blue-600 text-white py-2 rounded">
                Send Inquiry
            </button>

            <p>{status}</p>
        </form>
    );
}
