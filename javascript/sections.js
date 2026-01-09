// ------------------------ About Me Section [Logos] ------------------------
document.addEventListener("DOMContentLoaded", function () {
  fetch("constants/logos.json")
    .then((response) => response.json())
    .then((jsonData) => {
      let ulElement = document.getElementById("skills-ul")

      jsonData.forEach((item) => {
        let liElement = document.createElement("li")        
        let aElement = document.createElement("a")
        aElement.href = item.href
        aElement.target = "_blank"
        aElement.rel = "noreferrer"
        aElement.setAttribute("aria-label", `Learn more about ${item.alt}`)
        aElement.setAttribute("data-tooltip", item.alt.toUpperCase())

        let imgElement = document.createElement("img")
        imgElement.src = item.imgSrc
        imgElement.alt = item.alt
        imgElement.width = "40"
        imgElement.height = "40"

        aElement.appendChild(imgElement)
        liElement.appendChild(aElement)
        ulElement.appendChild(liElement)
      })
    })
    .catch((error) => console.error("Error:", error))
})

// ------------------------ My Expertise Section [Projects] ------------------------
document.addEventListener("DOMContentLoaded", function () {
  fetch("constants/projects.json")
    .then((response) => response.json())
    .then((data) => {
      const workList = document.querySelector(".work-list")

      data.forEach((project) => {
        const work = document.createElement("div")
        work.className = project.class
        work.id = project.id

        const img = document.createElement("img")
        img.src = project.image
        img.alt = project.title
        work.appendChild(img)

        const layer = document.createElement("div")
        layer.className = "layer"
        work.appendChild(layer)

        const h2 = document.createElement("h2")
        h2.innerHTML = `<b>${project.title}</b>`
        layer.appendChild(h2)

        const p = document.createElement("p")
        p.textContent = project.description
        layer.appendChild(p)

        const linkContainer = document.createElement("div")
        linkContainer.className = "link-container"
        layer.appendChild(linkContainer)

        project.links.forEach((link, index) => {
          const a = document.createElement("a")
          a.href = link.url
          a.target = "_blank"
          a.setAttribute("aria-label", index === 0 ? `View ${project.title} live demo` : `View ${project.title} on GitHub`)

          const i = document.createElement("i")
          i.className = link.icon
          a.appendChild(i)

          linkContainer.appendChild(a)
        })

        workList.appendChild(work)
      })
    })
    .catch((error) => console.error("Error:", error))
})
