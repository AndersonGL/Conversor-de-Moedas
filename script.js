function handleCalcFunction(){
let valor = document.querySelector("#valor").value
let moeda = document.querySelector("select").value
let resultado= document.querySelector
("#resultado")

switch(moeda){
  
case 'dollar':
calculo = valor * 5.14
resultado.innerHTML = `$${valor} é igual a R$ ${calculo}`
break
  
case 'euro':
calculo = valor * 5.54
resultado.innerHTML = `€${valor} é igual a R$ ${calculo}`
break  
  
case 'libra':
calculo = valor * 6.25
resultado.innerHTML = `£${valor} é igual a R$ ${calculo}`
break
  
case 'ienes':
calculo = valor * 0.039
resultado.innerHTML = `¥${valor} é igual a R$ ${calculo}`
break

case 'dollar aus':
calculo = valor * 3.59
resultado.innerHTML = `AU$        ${valor} é igual a R$ ${calculo}`
break
  
 }
}

   
    