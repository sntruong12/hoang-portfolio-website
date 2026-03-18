"use strict";

console.log("Created by Son @ https://truong.digital")

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
        id: "nav-side",
        open: "nav-open",
        close: "nav-close",
        works: "nav-works",
        about: "nav-about"
    },
    projs: "projects",
    about: "about",
    selectedProj: "selected-project",
    centeredProj: "current-centered-project",
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
const ccpSection = document.getElementById(HTMLIDs.centeredProj)
const sideNav = document.getElementById(HTMLIDs.nav.id)
const sideNavOpenButton = document.getElementById(HTMLIDs.nav.open)
const sideNavCloseButton = document.getElementById(HTMLIDs.nav.close)
const sideNavItemWorks = document.getElementById(HTMLIDs.nav.works)
const sideNavItemAbout = document.getElementById(HTMLIDs.nav.about)

/* 
    state for current centered project, 
    selected project image navigation,
*/
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
    // validate render
    if (shouldNotRender(pSection)) {
        return
    }

    const html = projects.map((project) => `
        <picture id="project-${project.id}">
            <!-- Mobile Image -->
            <source media="(max-width: 767px)" srcset="./media/project-${project.id}/featured.svg">
            <!-- Desktop Image -->
            <source media="(min-width: 768px)" srcset="./media/project-${project.id}/featured.svg">
            <!-- Fallback Image -->
            <img aria-hidden="true" loading="lazy" decoding="async" src="./media/project-${project.id}/featured.svg" alt="${project.title}">
        </picture>
    `).join("");

    // set html
    pSection.innerHTML = html;

    // make visible
    showSections([pSection, ccpSection])

    // hide other sections
    hideOtherSections([aSection, spSection])
    console.log("rendered projects====")
}

// render the about content
const renderAbout = () => {
    // validate render
    if (shouldNotRender(aSection)) {
        return
    }

    const html = `
    <h1 class="a-head">${meta.first + "<br>" + meta.last}</h1>
    <p class="a-main">${meta.about.description}</p>
    <p class="a-aside1">SELECT CLIENTS${"<br>" + meta.about.clients.join("<br>") + "<br>"}</p>
    <p class="a-aside2">WORK EXPERIENCE<br>
    ${meta.about.experience.map(e => {
        return `${e.roleAndCmpy}<br>
                ${e.timePeriod}<br>`
    })
            .join("")
        }
    </p>`
    // set html
    aSection.innerHTML = html

    // make visible
    showSections([aSection])

    // hide projects & selected project
    hideOtherSections([pSection, spSection, ccpSection])
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
            <source media="(max-width: 767px)" srcset="./media/project-${project.id}/${imageNum}.svg">
            <!-- Desktop Image -->
            <source media="(min-width: 768px)" srcset="./media/project-${project.id}/${imageNum}.svg">
            <!-- Fallback Image -->
            <img aria-hidden="true" loading="lazy" decoding="async" src="./media/project-${project.id}/${imageNum}.svg" alt="${project.title} image ${imageNum}">
        </picture>`;
    }).join("");

    const html = `
        <p class="sp-back" id="${HTMLIDs.selectedProjBackButton}">&larr; back</p>
        <div class="sp-content">
            <h1>${project.title}</h1>
            ${picturesHtml}
        </div>
        <div class="sp-info">
            ${!!project.agency ? "<p>agency " + project.agency + "</p>" : ""}
            <p>client ${project.client}</p>
            <p>project ${project.pType}</p>
            <p>role ${project.role}</p>
            <p>${project.description}</p>
        </div>
        <div class="sp-page">
            <p>
                <span id="${HTMLIDs.imageNav.prev}">&uarr;</span>
                <span id="${HTMLIDs.imageNav.counter}">1</span>
                <span id="${HTMLIDs.imageNav.next}">&darr;</span>
            </p>
        </div>
    `;

    // set html
    spSection.innerHTML = html;

    // make visible
    showSections([spSection])

    // hide other sections
    hideOtherSections([pSection, aSection, ccpSection])

    console.log("rendered selected project");
}

const renderCenteredProjectNumber = (projectID) => {
    let pid = ""
    if (projectID < 10) {
        pid = `0${projectID}`
    } else {
        pid = projectID
    }

    const html = `
        <p class="cp-number">${pid}</p>
    `

    ccpSection.innerHTML = html
}

const openNav = () => {
    sideNav.style.width = "auto";
    console.log("opening nav")
}

const closeNav = () => {
    sideNav.style.width = "0";
    console.log("closing nav")
}

/*
    ================
    HELPER FUNCTIONS
    ================
*/

const elementIsVisible = (element) => {
    if (element.classList.contains("section-hidden")) {
        return false
    }
    return true
}

const elementHasChildren = (el) => {
    return el.hasChildNodes()
}

const showSections = (elements) => {
    elements.forEach(e => { e.classList.remove("section-hidden") })
}

const hideOtherSections = (elements) => {
    elements.forEach(e => { e.classList.add("section-hidden") })
}

const shouldNotRender = (el) => {
    // don't run logic if it's already visible or if inner html has been set
    let check = elementIsVisible(el)
    let secondCheck = elementHasChildren(el)

    if (check && secondCheck) {
        console.log("element already is visible and inner html is already set")
        return true
    }

    return false
}

/*
    =====================
    INTERSECTION OBSERVER
    =====================
*/

// observer to detect when a project is centered in the viewport
const centeredProjectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.id.replace("project-", ""));
            renderCenteredProjectNumber(projectId);
        }
    });
}, {
    root: null,
    rootMargin: "0px -50% 0px -50%", // only trigger when element crosses the center
    threshold: [...Array(100).keys()].map(x => x / 100)
});

// function to observe all project elements
const observeProjects = () => {
    console.log("we are observing projects")
    const projectElements = pSection.querySelectorAll('picture[id^="project-"]');
    projectElements.forEach(el => {
        centeredProjectObserver.observe(el)
    });
};

/*
    ===============
    EVENT LISTENERS
    ===============
*/

// on initial page load
document.addEventListener("DOMContentLoaded", () => {
    hideOtherSections([aSection, spSection])

    renderProjects();
    observeProjects();
})

// nav bar
sideNavItemWorks.addEventListener("click", () => {
    renderProjects();
    observeProjects();
})
sideNavItemAbout.addEventListener("click", renderAbout)
sideNavCloseButton.addEventListener("click", closeNav)
sideNavOpenButton.addEventListener("click", openNav)

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
        observeProjects();
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
