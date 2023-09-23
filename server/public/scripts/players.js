const renderPlayers = async () => {

    const response = await fetch('/players')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {

        data.map(player => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${player.image})`

            const name = document.createElement('h3')
            name.textContent = player.name
            bottomContainer.appendChild(name)

            const height = document.createElement('p')
            height.textContent = 'Height: ' + player.height
            bottomContainer.appendChild(height)

            const weight = document.createElement('p')
            weight.textContent = 'Weight: ' + player.weight
            bottomContainer.appendChild(weight)

            const position = document.createElement('p')
            position.textContent = 'Position: ' + player.position
            bottomContainer.appendChild(position)

            const club = document.createElement('p')
            club.textContent = 'Club: ' + player.club
            bottomContainer.appendChild(club)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/players/${player.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Players Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
  window.location.href = '../404.html'
}
else {
  renderPlayers()
}
