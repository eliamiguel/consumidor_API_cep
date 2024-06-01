const textErro=  document.getElementById('text-error')


const preenchercampo = (response)=>{
  document.getElementById('endereco').value= response.logradouro 
  document.getElementById('numero').value= response.ddd
  document.getElementById('bairro').value= response.bairro
  document.getElementById('cidade').value= response.localidade
  document.getElementById('estado').value= response.uf

}

limparFormulario = ()=>{
  document.getElementById('numero').value= ''
  document.getElementById('bairro').value= ''
  document.getElementById('cidade').value= ''
  document.getElementById('estado').value= ''

}
const eNumero = (cep)=> /^[0-9]+$/.test(cep)

const cepValido = (cep) => cep.length === 8 && eNumero(cep);

const pesquisarCep = async ()=>{
  limparFormulario()
  const cep = document.getElementById('cep').value
  const url = `http://viacep.com.br/ws/${cep}/json/`
  
  if(cepValido(cep)){
  const dados = await  fetch(url)
  const endereco = await dados.json()

  if(endereco.hasOwnProperty('erro')){
    document.getElementById('cep').classList.add('error')
    textErro.innerHTML = 'cep invalido'
    textErro.classList.add('text-error')
  }else{
    preenchercampo(endereco)
  }
  
  }else{
    document.getElementById('cep').classList.add('error')
    textErro.innerHTML = 'cep invalido'
    textErro.classList.add('text-error')
  }

  
}





document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep)




/*const pesquisarCep = ()=>{
  const cep = document.getElementById('cep').value
  const url = `http://viacep.com.br/ws/${cep}/json/`

  fetch(url).then(response => response.json())
            .then(response =>{
              console.log(response)
              preenchercampo(response)
            })

}


const preenchercampo = (response)=>{
  document.getElementById('endereco').value= response.logradouro 
  document.getElementById('numero').value= response.ddd
  document.getElementById('bairro').value= response.bairro
  document.getElementById('cidade').value= response.localidade
  document.getElementById('estado').value= response.uf

}
document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep)
        */