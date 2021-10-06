const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', searchCep)

function searchCep(evento) {
	const cep = document.getElementById('cep').value
	const estado = document.getElementById('estado')
	const cidade = document.getElementById('cidade')
	const bairro = document.getElementById('bairro')
	const logradouro = document.getElementById('logradouro')

	fetch(`https://viacep.com.br/ws/${cep}/json/`)
		.then((resposta) => {
			return resposta.json()
		})
		.then((dados) => {
			console.log(dados)
			estado.innerText = dados.uf
			cidade.innerText = dados.localidade
			bairro.innerText = dados.bairro
			logradouro.innerText = dados.logradouro
            const lista = document.getElementById('lista')
			const cepErro = document.getElementById('cep-erro')
            lista.style.display ='block'
			cepErro.style.display = 'none'

			if (dados.uf == undefined) {
				cepErro.style.display = 'block'
                lista.style.display ='none'
				estado.innerText = ''
				cidade.innerText = ''
				bairro.innerText = ''
				logradouro.innerText = ''
			}
		})

		.catch((erro) => {
            lista.style.display ='none'
			estado.innerText = ''
			cidade.innerText = ''
			bairro.innerText = ''
			logradouro.innerText = ''
		})

	evento.preventDefault()
}
