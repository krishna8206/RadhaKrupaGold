import BulkHero from "@/components/BulkOrders/BulkHero/BulkHero";
import SampleDesigns from "@/components/BulkOrders/SampleDesigns/SampleDesigns";
import OrderNow from "@/components/BulkOrders/OrderNow/OrderNow";
import OrderNote from "@/components/BulkOrders/OrderNote/OrderNote";

export default function BulkOrdersPage() {
    return (
        <>
        <BulkHero />
            <section>
                <SampleDesigns />
            </section>
            <section>
                <OrderNow />
            </section>
            <section>
                <OrderNote />
            </section>
        </>
    );
}
