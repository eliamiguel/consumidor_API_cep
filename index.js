

const limparcampo =()=>{
  document.getElementById('endereco').value = ''; 
  document.getElementById('numero').value = '';
  document.getElementById('bairro').value = ''; 
  document.getElementById('cidade').value = ''; 
  document.getElementById('estado').value = ''
}

const temOitonumeros = (cep)=>cep.length === 8 && eNumero(cep)
const eNumero = (cep)=> /^[0-9]+$/.test(cep)

const pesquisarCep = async () =>{
  limparcampo()
  const cep = document.getElementById('cep').value
  const mensagemError = document.getElementById('text-error')
  if(temOitonumeros(cep)){
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const dados = await fetch(url)
    const response = await dados.json()
              const eErro = ()=> response.hasOwnProperty('erro')
              if(eErro()){
                  document.getElementById('corrirCep').classList.add('error')
                  mensagemError.innerHTML = 'CEP inválido'
                  mensagemError.classList.add('text-error')
                }else{
                  preenceherCampos(response)
                  document.getElementById('corrirCep').classList.remove('error')
                  mensagemError.innerHTML = ''
                  mensagemError.classList.remove('text-error')
              }         

  }else {document.getElementById('corrirCep').classList.add('error')
  mensagemError.innerHTML = 'CEP inválido. Não deve ter menos que 8 digito e nem conter letra'
  mensagemError.classList.add('text-error') 
}
}


const preenceherCampos =(endreco)=>{
  document.getElementById('endereco').value =  endreco.logradouro
  document.getElementById('numero').value =  endreco.ddd
  document.getElementById('bairro').value =  endreco.bairro
  document.getElementById('cidade').value =  endreco.localidade
  document.getElementById('estado').value =  endreco.uf
  
}
document.getElementById('cep').addEventListener('focusout', pesquisarCep)


/*

const limparcampo =()=>{
  document.getElementById('endereco').value = ''; 
  document.getElementById('numero').value = '';
  document.getElementById('bairro').value = ''; 
  document.getElementById('cidade').value = ''; 
  document.getElementById('estado').value = ''
}

const temOitonumeros = (cep)=>cep.length === 8 && eNumero(cep)
const eNumero = (cep)=> /^[0-9]+$/.test(cep)

const pesquisarCep =  () =>{
  limparcampo()
  const cep = document.getElementById('cep').value
  const mensagemError = document.getElementById('text-error')
  if(temOitonumeros(cep)){
    const url = `https://viacep.com.br/ws/${cep}/json/`
  fetch(url).then(response => response.json())
            .then(response => {
              const eErro = ()=> response.hasOwnProperty('erro')
              if(eErro()){
                  document.getElementById('corrirCep').classList.add('error')
                  mensagemError.innerHTML = 'CEP inválido'
                  mensagemError.classList.add('text-error')
                }else{
                  preenceherCampos(response)
                  document.getElementById('corrirCep').classList.remove('error')
                  mensagemError.innerHTML = ''
                  mensagemError.classList.remove('text-error')
              }
             
            })

  }document.getElementById('corrirCep').classList.add('error')
  mensagemError.innerHTML = 'CEP inválido. Não deve ter menos que 8 digito e nem conter letra'
  mensagemError.classList.add('text-error')
  
}


const preenceherCampos =(endreco)=>{
  document.getElementById('endereco').value =  endreco.logradouro
  document.getElementById('numero').value =  endreco.ddd
  document.getElementById('bairro').value =  endreco.bairro
  document.getElementById('cidade').value =  endreco.localidade
  document.getElementById('estado').value =  endreco.uf
  
}
document.getElementById('cep').addEventListener('focusout', pesquisarCep)



*/