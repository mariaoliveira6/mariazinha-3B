const url = 'https://raw.githubusercontent.com/timreis/api/refs/heads/main/mariaclara.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Quem são os artistas que dominaram as paradas em 2024? Veja no gráfico os músicos mais ouvidos no Spotify e descubra os fenômenos que conquistaram os fãs ao redor do mundo!
    Os três medalhistas são: A campeã, temos a Taylor Swift com <span>${dados.TAYLOR_SWIFT}</span> bilhões de ouvintes, em segundo lugar, The Weeknd, tendo <span>${dados.THE_WEEKND}</span> bilhões. Em medalha de bronze, Bad Bunny, com <span>${dados.BAD_BUNNY}</span> bilhões de ouvintes. `
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()
