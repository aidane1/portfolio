const cutoffWidth = 768;

let toggleMenu = () => {
  let nav = document.getElementById("nav-bar");
  nav.classList.toggle("nav-bar-extended");
};

let closeNavBar = () => {
  let nav = document.getElementById("nav-bar");
  nav.classList.remove("nav-bar-extended");
};

let frame = document.getElementById("frame-1-background");
frame.style.backgroundImage = "url(/images/canvas.png)";
frame.style.backgroundSize = "cover";

let projects = {
  0: [
    {
      image: "/images/apexschools.jpg",
      title: "Apexschools Web Server",
      subtitle: "React / NodeJS / Express",
      link: "https://github.com/aidane1/apexschools",
    },
    {
      image: "/images/react.jpg",
      title: "React Clone",
      subtitle: "HTML / NodeJS",
      link: "https://github.com/aidane1/React-clone",
    },
    {
      image: "/images/electron.jpg",
      title: "Electron App Example",
      subtitle: "HTML / NodeJS",
      link: "https://github.com/aidane1/Electron-App",
    },
    {
      image: "/images/portfolio.jpg",
      title: "My Portfolio (this!)",
      subtitle: "HTML / NodeJS",
      link: "https://github.com/aidane1/portfolio",
    },
    {
      image: "/images/swimming.jpg",
      title: "VKSC Web App",
      subtitle: "HTML / NodeJS",
      link: "https://github.com/aidane1/vksc-web-app",
    },
    {
      image: "/images/graphs.jpg",
      title: "Swimming Time Progression Graph",
      subtitle: "HTML / NodeJS",
      link: "https://github.com/aidane1/swimmingGraphs",
    },
    {
      image: "/images/pvstudents.jpg",
      title: "PVStudents Webiste & Server (old)",
      subtitle: "HTML / NodeJS",
      link: "https://github.com/aidane1/schoolsite",
    },
    {
      image: "/images/poker.jpg",
      title: "Poker Hands Odds Calculator",
      subtitle: "HTML / NodeJS",
      link: "https://github.com/aidane1/pokerHands",
    },
  ],
  1: [
    {
      image: "/images/schoolrapp.jpg",
      title: "Schoolr App",
      subtitle: "React Native",
      link: "https://github.com/aidane1/react-native-app",
    },
    {
      image: "/images/skillscanada.jpg",
      title: "Skills Canada National Website",
      subtitle: "HTML / CSS / NodeJS / Express",
      link: "",
    },
    // {
    //   image: "/images/code-1.png",
    //   title: "Apexschools Web Server",
    //   subtitle: "React / NodeJS / Express",
    //   link: "",
    // },
  ],
  2: [
    // {
    //   image: "code-1.png",
    //   title: "Apexschools Web Server",
    //   subtitle: "React / NodeJS / Express",
    //   link: "",
    // },
    // {
    //   image: "code-1.png",
    //   title: "Skills Canada National Website",
    //   subtitle: "HTML / CSS / NodeJS / Express",
    //   link: "",
    // },
    // {
    //   image: "code-1.png",
    //   title: "Apexschools Web Server",
    //   subtitle: "React / NodeJS / Express",
    //   link: "",
    // },
    // {
    //   image: "code-1.png",
    //   title: "Apexschools Web Server",
    //   subtitle: "React / NodeJS / Express",
    //   link: "",
    // },
  ],
  3: [
    {
      image: "/images/sort.jpg",
      title: "Sorting Algorithms Comparison",
      subtitle: "C++",
      link: "https://github.com/aidane1/Sorting-Algorithms",
    },
    {
      image: "/images/texteditor.jpg",
      title: "Text Editor",
      subtitle: "C++ / SFML",
      link: "https://github.com/aidane1/Text-Editor",
    },
    {
      image: "/images/perlinnoise.png",
      title: "Perlin Noise Generator",
      subtitle: "C++ / SFML",
      link: "",
    },
    {
      image: "/images/xml.png",
      title: "XML Parser",
      subtitle: "C++ / SFML",
      link: "",
    },
    {
      image: "/images/os.png",
      title: "Barebones OS",
      subtitle: "C++ / C",
      link: "",
    },
    {
      image: "/images/mandelbrot.jpg",
      title: "Interactive MandelBrot Set",
      subtitle: "C++ / SFML",
      link: "https://github.com/aidane1/SFML-Mandelbrot-Set",
    },
  ],
};

let createProjectBox = (
  { image, title, subtitle, link, section },
  compact = false
) => {
  let parent = document.createElement("div");
  parent.className = compact ? "grid-item item-compact" : "grid-item";
  parent.setAttribute("x-section", section.toString());
  parent.innerHTML = `
					<div class="grid-content"  style="background-image: url('${image}')">
						
					</div>
					<div class="grid-overlay">
						<div class="grid-overlay-title">
							<div class="title-primary">${title}</div>
							<div class="title-secondary">${subtitle}</div>
						</div>
						<a class="grid-overlay-more" href=${link}>
							Learn More
						</a>
					</div>
		`;
  return parent;
};
window.onload = () => {
  let element = document.getElementsByClassName("project-type")[0];
  let selected = document.getElementById("selected-project");
  selected.style.width = `${element.getBoundingClientRect().width}px`;

  let grid = document.getElementById("project-grid");

  let itemBoxes = [];
  for (var key in projects) {
    projects[key].forEach((project) => {
      project.section = key;
      itemBoxes.push(project);
    });
  }
  itemBoxes.forEach((project) => {
    // grid.appendChild(createProjectBox(project));
  });
};

let moveProjectBox = (index) => {
  let header = document
    .getElementById("projects-header")
    .getBoundingClientRect();
  let elements = document.getElementsByClassName("project-type");
  let element = elements[index];
  let selected = document.getElementById("selected-project");

  let rect1 = element.getBoundingClientRect();

  new Array(...elements).map((element) => {
    element.style.color = "#666";
  });

  element.style.color = "#eee";

  selected.style.transform = `translateX(${rect1.left - header.left}px)`;

  selected.style.width = `${rect1.width}px`;

  let items = new Array(...document.getElementsByClassName("grid-item"));

  if (index == 0) {
    items.forEach((item) => {
      item.style.display = "block";
    });
  } else {
    items.forEach((item) => {
      if (parseInt(item.getAttribute("x-section")) === index - 1) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
};

let frames = [1, 2, 3, 4, 5];

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    scrollElementIntoView(
      document.querySelector(this.getAttribute("href")),
      "smooth"
    );
    // document.querySelector(this.getAttribute("href")).scrollIntoView({
    //   behavior: "smooth",
    // });
  });
});

let scrollElementIntoView = (element, behavior) => {
  let scrollTop = window.pageYOffset || element.scrollTop;

  // Furthermore, if you have for example a header outside the iframe
  // you need to factor in its dimensions when calculating the position to scroll to
  //  const headerOutsideIframe = window.parent.document.getElementsByClassName('myHeader')[0].clientHeight


  let finalOffset;

  if (element.id == "frame-2") {
    finalOffset = element.getBoundingClientRect().top + scrollTop;
  } else {
    finalOffset = element.getBoundingClientRect().top + scrollTop - 10;
  }

  window.parent.scrollTo({
    top: finalOffset,
    behavior: behavior || "auto",
  });
};

let navLinks = new Array(...document.getElementsByClassName("nav-link"));

let animate = (element) => {
  let type = element.getAttribute("data-type") || "None";
  if (type == "custom") {
    let customNum = parseInt(element.getAttribute("data-custom-animation"));
    switch (customNum) {
      case 1:
        if (!element.classList.contains("animated-completed")) {
          element.classList.add("animated-completed");
          setTimeout(() => {
            element.style.transform = `translateX(0px)`;
            element.style.opacity = "1";
            setTimeout(() => {
              new Array(...element.children).forEach((child, index) => {
                let percent = child.children[1].children[0].getAttribute(
                  "data-skill"
                );
                setTimeout(() => {
                  child.children[1].children[0].style.width = percent;
                }, index * 70);
              });
            }, 200);
          }, 500);
        }
        break;
      case 2:
        if (!element.classList.contains("animated-completed")) {
          element.classList.add("animated-completed");
          element.style.opacity = "1";
          let delay = parseInt(element.getAttribute("data-animation-delay"));
          setTimeout(() => {
            element.style.transform = `translateX(-50%) rotateY(0deg)`;
          }, delay);
        }
        break;
      default:
        break;
    }
  } else {
    if (!element.classList.contains("animated-completed")) {
      let delay = element.getAttribute("data-animation-delay");
      delay = parseInt(delay) || 0;
      setTimeout(() => {
        element.style.transform = ``;
        element.classList.add("animated-completed");
        element.style.opacity = "1";
      }, delay);
    }
  }
};

let navBar = document.getElementById("nav-bar");

let animatedElements = document.getElementsByClassName("animated");
animatedElements = new Array(...animatedElements);

// animatedElements.forEach((element) => {
//   if (
//     window.innerWidth > cutoffWidth ||
//     element.getAttribute("data-animated-override") === "true"
//   ) {
//     let magnitude = element.getAttribute("data-magnitude");
//     let type = element.getAttribute("data-type") || "None";
//     if (type == "custom") {
//       let customNum = parseInt(element.getAttribute("data-custom-animation"));
//       switch (customNum) {
//         case 1:
//           break;
//         default:
//           break;
//       }
//     } else {
//       if (magnitude) {
//         if (element.getAttribute("data-direction") == "Y") {
//           element.style.transform = `translateY(${magnitude})`;
//         } else {
//           element.style.transform = `translateX(${magnitude})`;
//         }
//       }

//       let transitionTime = element.getAttribute("data-transition-time");
//       if (transitionTime) {
//         element.style.transition = `transform ${transitionTime} ease-out, opacity ${transitionTime} ease-out`;
//       }
//     }
//   } else {
//     animate(element);
//   }
// });

// let animatedElements = [];

let previousBox = 0;

window.onscroll = () => {
  let scroll = document.documentElement.scrollTop;

  animatedElements.forEach((element) => {
    if (
      window.innerWidth > cutoffWidth ||
      element.getAttribute("data-animated-override") === "true"
    ) {
      let boundingRect = element.getBoundingClientRect();
      let magnitude = element.getAttribute("data-magnitude") || "0px";
      let padding = parseInt(element.getAttribute("data-base-margin") || 10);
      if (magnitude) {
        if (element.getAttribute("data-direction") == "Y") {
          if (
            boundingRect.y +
              boundingRect.height -
              parseInt(magnitude) +
              padding <
            window.innerHeight
          ) {
            animate(element);
          }
        } else {
          if (
            boundingRect.y + boundingRect.height + padding <
            window.innerHeight
          ) {
            animate(element);
          }
        }
      }
    }
  });
  if (scroll >= window.innerHeight) {
    if (!navBar.classList.contains("nav-bar-tacked")) {
      navBar.classList.add("nav-bar-tacked");
    }
  } else {
    if (navBar.classList.contains("nav-bar-tacked")) {
      navBar.classList.remove("nav-bar-tacked");
    }
  }
  let frameBoxes = frames.map((frame) =>
    document.getElementById(`frame-${frame}`).getBoundingClientRect()
  );

  let currentBox = frameBoxes.reduce((acc, current, index) => {
    acc = current.y <= 25 ? index : acc;
    return acc;
  }, 0);

  if (currentBox != previousBox) {
    previousBox = currentBox;
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    navLinks[currentBox].classList.add("active");
  }

  // animatedElements
  // console.log(scroll + window.innerHeight)
};
