export interface Certificate {
    id: number;
    name: string;
    image: string;
    category : string;
    description: string;
}

export const arrayCertificate: Certificate[] = [
    {
        id: 1,
        name: "Coding Camp",
        image: "/images/coding_camp.jpg",
        category : "lomba",
        description: "Coding Camp powered by DBS Foundation, specializing in FrontEnd and Back-End Developer",
    },
    {
        id: 2,
        name: "HackerRank",
        image: "/images/hackerrank.jpg",
        category : "lomba",
        description: "Coding challenges involving tree traversal (DFS), array subarray logic, and partitioning algorithms in JavaScript.",
    },
    {
        id: 3,
        name: "INVFEST X ISF 8.0",
        image: "/images/invest_finalist.jpg",
        category : "lomba",
        description: "Finalists of INVFEST X ISF 8.0, a competition highlighting innovation in design",
    },
    {
        id: 4,
        name: "Web Design by INVENTION",
        image: "/images/INVENTION_rama.png",
        category : "lomba",
        description: "Web Design by INVENTION, a competition highlighting innovation in design",
    },
    {
        id: 5,
        name: "UI/UX Design by ISAC 2024",
        category : "lomba",
        image: "/images/Sertifikat_Mokleters_ISAC_2024-0001.jpg",
        description: "UI/UX design competition focused on platform redesign",
    },
    {
        id: 6,
        name: "Mini Bootcamp Web Development by Edspert",
        image: "/images/Sertifikat_Edspert.jpg",
        category : "lomba",
        description: "Introduction to Web Development “A Roadmap to A Thriving Career in Web Development”",
    },
];