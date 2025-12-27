// mock.ts
export type OccasionCardData = {
    id: number;
    title: string;
    // FIX: Type must be compatible with the imported image object
    imageUrl: any;
    linkUrl: string;
};

export const OCCASION_MOCK_DATA: OccasionCardData[] = [
    {
        id: 1,
        title: "Weddings & Anniversaries",
        // ✅ FIX: Use the imported image module instead of the string path
        imageUrl: "https://img.freepik.com/premium-photo/authentic-indian-tray-with-traditional-sacred-objects-wedding-ceremony_926199-3969022.jpg?ga=GA1.1.1388388525.1765878325&semt=ais_hybrid&w=740&q=80",
        linkUrl: "/bulk-orders",
    },
    {
        id: 2,
        title: "Birthday parties & Graduation",
        // ✅ FIX: Use the imported image module
        imageUrl: "https://img.freepik.com/premium-photo/group-friends-celebrating-birthday-throwing-confetti-home-party_1210791-16849.jpg?ga=GA1.1.1388388525.1765878325&semt=ais_hybrid&w=740&q=80",
        linkUrl: "/bulk-orders",
    },
    {
        id: 3,
        title: "Diwali, Rakshabandhan & Festivals",
        // ✅ FIX: Use the imported image module
        imageUrl: "https://img.freepik.com/free-photo/side-view-people-celebrating-tamil-new-year_23-2151210791.jpg?ga=GA1.1.1388388525.1765878325&semt=ais_hybrid&w=740&q=80",
        linkUrl: "/bulk-orders",
    },
    {
        id: 4,
        title: "Corporate & Employee Rewards",
        // ✅ FIX: Use the imported image module
        imageUrl: "https://img.freepik.com/premium-photo/3d-icon-glossy-artwork-business-exchanging-dhanteras-gifts-concept-as-camera-movement-zoom-into_980716-491406.jpg?ga=GA1.1.1388388525.1765878325&semt=ais_hybrid&w=740&q=80",
        linkUrl: "/bulk-orders",
    },
];