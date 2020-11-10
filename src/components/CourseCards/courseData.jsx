
//const pobCoverSvg = 'POB_Cover.svg';
const pobCoverJpg = 'assets/PobCover.jpg';

const courseContent = [
    {
        id: 1, 
        coverTitle: "Principles of Business", 
        imagePath: process.env.PUBLIC_URL + "assets/PobCover.jpg", 
        features: [
            {
            iconPath: process.env.PUBLIC_URL + "assets/book_icon.svg", 
            label: "Online & face-to-face"
        },
        {
            iconPath: process.env.PUBLIC_URL + "assets/time_icon.svg", 
            label: "Free extra class"
        },
        {
            iconPath: process.env.PUBLIC_URL + "assets/certificate_icon.svg", 
            label: "High pass rate"
        }], 
        price: "$7,000", 
        currency: "jmd", 
        recommendedStatus: "100%",
        examLogoPath: process.env.PUBLIC_URL + "assets/CXC_Vector.svg"
    },
    {
        id: 2, 
        coverTitle: "Principles of Accounts", 
        imagePath: process.env.PUBLIC_URL + "assets/accounting_cover.svg", 
        features: [
            {
            iconPath: process.env.PUBLIC_URL + "assets/book_icon.svg", 
            label: "One-on-one remedial teaching"
        },
        {
            iconPath: process.env.PUBLIC_URL + "assets/time_icon.svg", 
            label: "Free extra class"
        },
        {
            iconPath: process.env.PUBLIC_URL + "assets/certificate_icon.svg", 
            label: "High pass rate"
        }], 
        price: "$8,000", 
        currency: "jmd",
        recommendedStatus: "100%",
        examLogoPath: process.env.PUBLIC_URL + "assets/CXC_Vector.svg"
    },

]

export default courseContent;