fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        displaySumamry(data)
    })
    .catch(error => console.log(error))

function displaySumamry(data) {
    const summary = document.getElementById('summary')

    data.forEach(item => {

        const wrapper = document.createElement('div')
        wrapper.className = "flex justify-between p-4 rounded-lg xl:text-xl"
        wrapper.classList.add(`bg-${item.color}Background`)
        wrapper.classList.add(`text-${item.color}`)

        const title = document.createElement('div')
        title.className = "flex gap-2"

        const img = document.createElement('img')
        img.alt = item.category
        img.src = item.icon
        const name = document.createElement('h4')
        name.className = "font-semibold"
        name.textContent = item.category

        const score = document.createElement('h4')
        score.className = "text-DarkGrayBlue font-bold"
        score.textContent = item.score

        const overall = document.createElement('span')
        overall.className = "opacity-60"
        overall.textContent = " / 100"

        score.appendChild(overall)

        title.appendChild(img)
        title.appendChild(name)

        wrapper.appendChild(title)
        wrapper.appendChild(score)

        summary.appendChild(wrapper)
    })
}