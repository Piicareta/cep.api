const cep = document.getElementById('cep')

cep.addEventListener('blur', (e) => {

    const cepFix = cep.value.replace("-", "")

    fetch(`https://viacep.com.br/ws/${cepFix}/json/`)
    .then( res => res.json() )
    .then( res => {
        document.getElementById('logradouro').value = res.logradouro
        document.getElementById('bairro').value = res.bairro
        document.getElementById('localidade').value = res.localidade
        document.getElementById('uf').value = res.uf
    }) 
})


const anima = () => {
    document.getElementById('btn').classList.add('anima')
    setTimeout(() => {
        document.getElementById('btn').classList.remove('anima')
    }, 500)
}

addEventListener('keypress', (x) => {
    if(x.key === 'Enter'){
        anima()
    }
})