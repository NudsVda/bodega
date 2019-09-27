class AperitivoView 
{        

        render = function(data)
        {               
               let mesa = document.querySelector('#mesa')
               let h2 = document.createElement('h2')
               h2.innerText = 'Lista de Vídeos'
               mesa.appendChild(h2)
               let ul = document.createElement('ul')
               mesa.appendChild(ul)
               data.forEach(function(item){
                   let li = document.createElement('li')
                   li.innerText = `${item.title} | ${item.description}`
                   mesa.appendChild(li)
               })
        }
}   
        
export { AperitivoView }