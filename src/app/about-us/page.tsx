import AboutUs from "@/components/About-Us/About-Us";
import RadhekrupaHero from "@/components/About-Us/RadhekrupaHero/RadhekrupaHero";
import FounderSection from "@/components/About-Us/FounderSection/FounderSection";
import StatsCounter from "@/components/About-Us/StatsCounter/StatsCounter";
import OnlineStoreSection from "@/components/About-Us/OnlineStoreSection/OnlineStoreSection";
import PhilosophySlider from "@/components/About-Us/PhilosophySlider/PhilosophySlider";

export default function BulkOrdersPage() {
    return (
        <>
            <AboutUs />
            <section>
                <RadhekrupaHero />
            </section>
            <section>
                <FounderSection />
            </section>
            <section>
                <StatsCounter />
            </section>
            <section>
                <OnlineStoreSection />
            </section>
            <section>
                <PhilosophySlider />
            </section>
        </>
    );
}
