import InquiryForm from "../components/ui/InquiryForm";

export default function Interview() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Interview Inquiry</h1>
            <InquiryForm inquiryFor="interview" />
        </div>
    );
}
