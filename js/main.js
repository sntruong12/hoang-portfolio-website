"use strict";

console.log("it's alive love frankenstein")

// id values used for all html element
const HTMLIDs = {
    nav: {
        works: "nav-works",
        about: "nav-about"
    },
    pc: "project-carousel",
    about: "about"
}

// array of project data
const projects = [
    {
        id: 1,
        title: "DedCool",
        description: "DedCool is an LA based fragrance brand with a mission to empower individuals through scent. They approached me to concept and create a video to live on social that targets Gen Z audiences inspired by Japanese Retro aesthetics.",
        agency: "",
        client: "DedCool",
        pType: "Social Animation",
        role: "Illustrator & Animator",
        media: {
            featured: "./media/project-1/featured.svg",
            count: 5,
        },
        colors: {
            bg: "#F7DEC1",
            details: "#000000",
            navItems: "#000000",
            navContact: "#F4835D",
            navLogo: "black",
        }
    },
    {
        id: 2,
        title: "Somerset",
        description: "Somerset is a Gold Coast restaurant located within the Viceroy Hotel that combines 1960s Country Club aesthetics with imagery inspired by Lake Michigan Marina. This branding concept brings a contemporary approach to a historic crest and uses a slightly feminine palette to give the visuals a soft and approachable atmosphere.",
        agency: "",
        client: "Boka Restaurant Group",
        pType: "Somerset Branding",
        role: "Lead Designer",
        media: {
            featured: "./media/project-2/featured.svg",
            count: 4,
        },
        colors: {
            bg: "#FFCBCB",
            details: "#000000",
            navItems: "#000000",
            navContact: "#4C6E56",
            navLogo: "black",
        }
    },
    {
        id: 3,
        title: "Moonmix",
        description: "Moonmix is an Oklahoma based weed brand inspired by the beauty and magic of the night. Drawing inspiration from the stars, moon and space, I was asked to create a new visual system including logo, packaging and print collateral.",
        agency: "",
        client: "Moonmix",
        pType: "{{replace me}}",
        role: "{{replace me}}",
        media: {
            featured: "./media/project-3/featured.svg",
            count: 6,
        },
        colors: {
            bg: "#0055FF",
            details: "#FFFFFF",
            navItems: "#000000",
            navContact: "#FFFFFF",
            navLogo: "black",
        }
    },
    {
        id: 4,
        title: "Google Maps",
        description: "Goog maps is what everyone be using if they don't like waze {{replace me}}",
        agency: "Hook",
        client: "Google",
        pType: "MAps 20th Anniversary Branding",
        role: "{{replace me}}",
        media: {
            featured: "./media/project-4/featured.svg",
            count: 5,
        },
        colors: {
            bg: "#0F9D58",
            details: "#FFFFFF",
            navItems: "#000000",
            navContact: "#FFFFFF",
            navLogo: "black",
        }
    },
    {
        id: 5,
        title: "Koma",
        description: "{{replace me}}",
        agency: "Grip",
        client: "Tao Group Hospitality",
        pType: "Koma Lettermark",
        role: "Logo Designer",
        media: {
            featured: "./media/project-5/featured.svg",
            count: 4,
        },
        colors: {
            bg: "#DF2C05",
            details: "#FFFFFF",
            navItems: "#000000",
            navContact: "#FFFFFF",
            navLogo: "black",
        }
    },
    {
        id: 6,
        title: "Gaysian Supermarket",
        description: "{{replace me}}",
        agency: "",
        client: "",
        pType: "",
        role: "",
        media: {
            featured: "./media/project-6/featured.svg",
            count: 2,
        },
        colors: {
            bg: "#7DFFFF",
            details: "#000000",
            navItems: "#000000",
            navContact: "#4238FF",
            navLogo: "black",
        }
    },
    {
        id: 7,
        title: "Personal Work",
        description: "",
        agency: "",
        client: "",
        pType: "",
        role: "",
        media: {
            featured: "./media/project-7/featured.svg",
            count: 9,
        },
        colors: {
            bg: "#FFFFFF",
            details: "#000000",
            navItems: "#000000",
            navContact: "#000000",
            navLogo: "black",
        }
    },
]

/*
    ================
    Render Functions
    ================
*/

// render the project carousel
const renderProjectCarousel = () => {
    const pjSection = document.getElementById(HTMLIDs.pc);
    const aSection = document.getElementById(HTMLIDs.about)

    const html = projects.map((project) => `
        <picture>
            <!-- Mobile Image -->
            <source media="(max-width: 600px)" srcset="./media/project-${project.id}/featured.svg">
            <!-- Desktop Image -->
            <source media="(min-width: 601px)" srcset="./media/project-${project.id}/featured.svg">
            <!-- Fallback Image -->
            <img aria-hidden="true" loading="lazy" decoding="async" src="./media/project-${project.id}/featured.svg" alt="${project.title}">
        </picture>
    `).join("");

    pjSection.innerHTML = html;
    removeHiddenAttr(pjSection)
    setHiddenAttr(aSection)
    console.log("rendered work==")
}

// render the about content
const renderAbout = () => {
    const html = `
    <h1>Hoang Truong</h1>
    <p>Multidisciplinary visual designer with a specialty in brand, illustration and motion</p>
    <p>SELECT CLIENTS<br>GOOGLE<br>IBM<br>ZILLOW<br>YOUTUBE<br>NEW BALANCE</p>
    <p>WORK EXPERIENCE<br>
    SENIOR DESIGNER – HOOK<br>
    JANUARY 2024 - PRESENT<br>
    FREELANCE<br>
    JULY 2018 - DEC 2023<br>
    COMMUNICATION DESIGNER - MOTHER LA<br>
    OCT 2018 - JULY 2018<br>
    MOTION DESIGNER – HYFN<br>
    FEB 2017 – OCT 2017<br>
    DESIGNER - GRIP<br>
    JULY 2016 - JAN 2017</p>
    `

    let aboutHTML = document.getElementById("about")
    aboutHTML.innerHTML = html
    removeHiddenAttr(aboutHTML)

    // hide project carousel
    setHiddenAttr(document.getElementById(HTMLIDs.pc))

    console.log("rendered about")
}

/*
    =======
    Helpers
    =======
*/
const removeHiddenAttr = (element) => {
    element.removeAttribute("hidden")
}

const setHiddenAttr = (element) => {
    element.setAttribute("hidden", "true")
}

/*
    ===============
    Event Listeners
    ===============
*/

// run project carousel render after page loads
document.addEventListener("DOMContentLoaded", renderProjectCarousel)

// click events for nav bar li
document.getElementById(HTMLIDs.nav.works).addEventListener("click", renderProjectCarousel)
document.getElementById(HTMLIDs.nav.about).addEventListener("click", renderAbout)