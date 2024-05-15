// ------------------------ About Me Section [Logos] ------------------------
fetch("constants/logos.json")
  .then((response) => response.json())
  .then((jsonData) => {
    let ulElement = document.getElementById("skills-ul")

    jsonData.forEach((item) => {
      let aElement = document.createElement("a")
      aElement.href = item.href
      aElement.target = "_blank"
      aElement.rel = "noreferrer"

      let imgElement = document.createElement("img")
      imgElement.src = item.imgSrc
      imgElement.alt = item.alt
      imgElement.width = "40"
      imgElement.height = "40"

      aElement.appendChild(imgElement)
      ulElement.appendChild(aElement)
    })

    skillsDiv.appendChild(ulElement)
  })
  .catch((error) => console.error("Error:", error))

// ------------------------ My Expertise Section [Projects] ------------------------