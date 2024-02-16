// Parent element where the projects will be appended
const projectContainer = document.querySelector(".projectS");

// Array of project details
const projects = [
  { years: "10 +", description: "YEARS OF EXPERIENCE" },
  { years: "10 +", description: "YEARS OF EXPERIENCE" },
];

projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");
  const projectH1 = document.createElement("div");
  projectH1.classList.add("projectH1");
  const h1Element = document.createElement("h1");
  h1Element.classList.add("yearH1");
  h1Element.textContent = project.years;
  projectH1.appendChild(h1Element);
  projectElement.appendChild(projectH1);
  const projectH2 = document.createElement("div");
  projectH2.classList.add("projectH1");
  const pElement = document.createElement("p");
  pElement.classList.add("yearText");
  pElement.textContent = project.description;
  projectH2.appendChild(pElement);
  projectElement.appendChild(projectH2);
  projectContainer.appendChild(projectElement);
});

const blockData = [
  { imgSrc: "./img/Figma-logo.svg", percentage: "92%", sName: "Figma" },
  { imgSrc: "./img/javaS.png", percentage: "80%", sName: "JsvaScript" },
  { imgSrc: "./img/react.svg.png", percentage: "70%", sName: "React" },
  { imgSrc: "./img/example.svg", percentage: "60%", sName: "?" },
];

// Get the skillBlock container
const skillBlockContainer = document.getElementById("skillBlock");

// Function to create each block
function createEachBlock(data) {
  const eachBlock = document.createElement("div");
  eachBlock.classList.add("eachBlock");

  const skiillName = document.createElement("p");
  skiillName.classList.add("skillName");
  skiillName.textContent = data.sName;

  const img = document.createElement("img");
  img.src = data.imgSrc;
  img.classList.add("skillImg");
  img.alt = "";

  const percentage = document.createElement("h3");
  percentage.classList.add("skillPercentage");
  percentage.textContent = data.percentage;

  eachBlock.append(skiillName, img, percentage);

  return eachBlock;
}

// Iterate through the block data and create each block
blockData.forEach((data) => {
  const blockElement = createEachBlock(data);
  skillBlockContainer.appendChild(blockElement);
});
