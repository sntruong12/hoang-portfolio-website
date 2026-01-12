"use strict";

console.log("it's alive love frankenstein")

/*
    =========
    CONSTANTS
    =========
*/

// general data
const meta = {
    first: "Hoang",
    last: "Truong",
    about: {
        description: "Multidisciplinary visual designer with a specialty in brand, illustration and motion",
        clients: ["google", "ibm", "zillow", "youtube", "new balance"],
        experience: [
            {
                roleAndCmpy: "senior designer - hook",
                timePeriod: "january 2024 - present"
            },
            {
                roleAndCmpy: "freelance",
                timePeriod: "july 2018 - december 2023"
            },
            {
                roleAndCmpy: "communication designer - mother la",
                timePeriod: "october 2018 - july 2018"
            },
            {
                roleAndCmpy: "motion designer – hyfn",
                timePeriod: "february 2017 – october 2017"
            },
            {
                roleAndCmpy: "designer - grip",
                timePeriod: "july 2016 - january 2017"
            },
        ]
    }
}

// id values used for all html element
const HTMLIDs = {
    nav: {
        works: "nav-works",
        about: "nav-about"
    },
    projs: "projects",
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
    RENDER FUNCTIONS
    ================
*/

// render the projects
const renderProjects = () => {
    const pSection = document.getElementById(HTMLIDs.projs);
    const aSection = document.getElementById(HTMLIDs.about)

    // don't run logic if it's already hidden
    if (isVisible(pSection)) {
        return
    }

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

    // set html
    pSection.innerHTML = html;

    // make visible
    removeHiddenAttr(pSection)

    // hide about
    setHiddenAttr(aSection)
    console.log("rendered work==")
}

// render the about content
const renderAbout = () => {
    const pSection = document.getElementById(HTMLIDs.projs);
    const aSection = document.getElementById(HTMLIDs.about)

    // don't run logic if it's already hidden
    if (isVisible(aSection)) {
        return
    }

    const html = `
    <h1>${meta.first + " " + meta.last}</h1>
    <p>${meta.about.description}</p>
    <p>SELECT CLIENTS${"<br>" + meta.about.clients.join("<br>") + "<br>"}</p>
    <p>WORK EXPERIENCE<br>
    ${meta.about.experience.map(e => {
        return `${e.roleAndCmpy}<br>
                ${e.timePeriod}<br>`
    })
            .join("")
        }
    `
    // set html
    aSection.innerHTML = html

    // make visible
    removeHiddenAttr(aSection)

    // hide projects
    setHiddenAttr(pSection)
    console.log("rendered about")
}

// render selected project
const renderSelectedProject = () => {

}

/*
    ================
    HELPER FUNCTIONS
    ================
*/

const removeHiddenAttr = (element) => {
    element.removeAttribute("hidden")
}

const setHiddenAttr = (element) => {
    element.setAttribute("hidden", "true")
}

const isVisible = (element) => {
    if (!!element.getAttribute("hidden")) {
        return false
    }
    return true
}

/*
    ===============
    EVENT LISTENERS
    ===============
*/

// on page load
document.addEventListener("DOMContentLoaded", renderProjects)

// nav bar
document.getElementById(HTMLIDs.nav.works).addEventListener("click", renderProjects)
document.getElementById(HTMLIDs.nav.about).addEventListener("click", renderAbout)