const url = 'https://raw.githubusercontent.com/pmatjayme/api/refs/heads/main/paloma.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Em nossa sala, temos <span>${dados.Solteiro}</span> solteiros, enquanto que <span>${dados.Namorando}</span> estão namorando. Há <span>${dados.Enrolado}</span> enrolados. Por fim, temos <span>${dados.Fundo_poco}</span> no fundo do poço e <span>${dados.Casado}</span> casados.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()
