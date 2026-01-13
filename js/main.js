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
    about: "about",
    selectedProj: "selected-project",
    selectedProjBackButton: "sp-back-button",
    imageNav: {
        prev: "sp-img-prev",
        next: "sp-img-next",
        counter: "sp-img-counter"
    }
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

// dom elements for sections
const pSection = document.getElementById(HTMLIDs.projs)
const aSection = document.getElementById(HTMLIDs.about)
const spSection = document.getElementById(HTMLIDs.selectedProj)

// state for selected project image navigation
const state = {
    currentImageIndex: 0,
    totalImages: 0
}

/*
    ================
    RENDER FUNCTIONS
    ================
*/

// render the projects
const renderProjects = () => {
    // don't run logic if it's already hidden
    if (isVisible(pSection)) {
        return
    }

    const html = projects.map((project) => `
        <picture id="project-${project.id}">
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

    // hide other sections
    hideOtherSections([aSection, spSection])
    console.log("rendered projects====")
}

// render the about content
const renderAbout = () => {
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

    // hide projects & selected project
    hideOtherSections([pSection, spSection])
    console.log("rendered about")
}

// render selected project
const renderSelectedProject = (projectId) => {
    // find the project by id
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        console.error("Project not found");
        return;
    }

    // reset state for image navigation
    state.currentImageIndex = 0;
    state.totalImages = project.media.count;

    // generate picture tags for all images in the project
    // first image is visible, others are hidden
    const picturesHtml = Array.from({ length: project.media.count }, (_, index) => {
        const imageNum = index + 1;
        const hiddenAttr = index === 0 ? "" : "hidden";
        return `
        <picture data-index="${index}" ${hiddenAttr}>
            <!-- Mobile Image -->
            <source media="(max-width: 600px)" srcset="./media/project-${project.id}/${imageNum}.svg">
            <!-- Desktop Image -->
            <source media="(min-width: 601px)" srcset="./media/project-${project.id}/${imageNum}.svg">
            <!-- Fallback Image -->
            <img aria-hidden="true" loading="lazy" decoding="async" src="./media/project-${project.id}/${imageNum}.svg" alt="${project.title} image ${imageNum}">
        </picture>`;
    }).join("");

    const html = `
        <p id="${HTMLIDs.selectedProjBackButton}">&larr; back</p>
        <h1>${project.title}</h1>
        ${picturesHtml}
        <p>client ${project.client}</p>
        <p>project ${project.pType}</p>
        <p>role ${project.role}</p>
        <p>${project.description}</p>
        <p>
            <span id="${HTMLIDs.imageNav.prev}">&uarr;</span>
            <span id="${HTMLIDs.imageNav.counter}">1</span>
            <span id="${HTMLIDs.imageNav.next}">&darr;</span>
        </p>
    `;

    // set html
    spSection.innerHTML = html;

    // make visible
    removeHiddenAttr(spSection);

    // hide other sections
    hideOtherSections([pSection, aSection])

    console.log("rendered selected project");
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

const hideOtherSections = (elements) => {
    elements.forEach(e => { setHiddenAttr(e) })
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

// render selected project
pSection.addEventListener("click", (e) => {
    const picture = e.target.closest('picture[id^="project-"]');
    if (picture) {
        const projectId = parseInt(picture.id.replace("project-", ""));
        renderSelectedProject(projectId);
    }
})

// selected project interactions
spSection.addEventListener("click", (e) => {
    // back button
    if (e.target.id === HTMLIDs.selectedProjBackButton) {
        renderProjects();
    }

    // previous image (up arrow)
    if (e.target.id === HTMLIDs.imageNav.prev) {
        if (state.currentImageIndex > 0) {
            // hide current image
            spSection.querySelector(`picture[data-index="${state.currentImageIndex}"]`).hidden = true;
            // update index
            state.currentImageIndex--;
            // show new image
            spSection.querySelector(`picture[data-index="${state.currentImageIndex}"]`).hidden = false;
            // update counter
            document.getElementById(HTMLIDs.imageNav.counter).textContent = state.currentImageIndex + 1;
        }
    }

    // next image (down arrow)
    if (e.target.id === HTMLIDs.imageNav.next) {
        if (state.currentImageIndex < state.totalImages - 1) {
            // hide current image
            spSection.querySelector(`picture[data-index="${state.currentImageIndex}"]`).hidden = true;
            // update index
            state.currentImageIndex++;
            // show new image
            spSection.querySelector(`picture[data-index="${state.currentImageIndex}"]`).hidden = false;
            // update counter
            document.getElementById(HTMLIDs.imageNav.counter).textContent = state.currentImageIndex + 1;
        }
    }
})

