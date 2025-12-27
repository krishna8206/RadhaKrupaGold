import LetsConnect from "@/components/Contact-Us/LetsConnect/LetsConnect";
import Features from "@/components/Contact-Us/Features/Features";
import HeadOffice from "@/components/Contact-Us/HeadOffice/HeadOffice";
import ContactUsForm from "@/components/Contact-Us/ContactUsForm/ContactUsForm";
import MapComponent from "@/components/Contact-Us/MapComponent/MapComponent";


export default function ContactUsPage() {
    return (
        <>
            <LetsConnect />
            <section>
                <Features />
            </section>
            <section>
                <HeadOffice />
            </section>
            <section>
                <ContactUsForm />
            </section>

            <section>
                <MapComponent />
            </section>
        </>
    );
}
