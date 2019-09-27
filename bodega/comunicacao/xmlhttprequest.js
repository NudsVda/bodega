import  { url, senha, usuario } 
    from "../bootstrap/config.js";

let xmlhttprequest =  function(metodo,recurso,params,callback) {
    let resposta
    
    let request = new XMLHttpRequest()

    request.open(metodo,url+ '/'+ recurso)
    request.setRequestHeader("Authorization",'Basic '+  btoa(usuario+':'+senha)) 
    
    if(metodo != 'GET') {
        request.setRequestHeader('Content-type', 'application/json');
        params = JSON.stringify(params)
    }

    request.onload = function(e) {        
        
        if (request.status != 200) { // analyze HTTP status of the response
          console.log(`Error ${request.status}: ${request.statusText}`); // e.g. 404: Not Found
        } else { // show the result    
            
            resposta = JSON.parse(request.response)                    
            callback(resposta)
        }
      };
           

    request.send(params)

}

export { xmlhttprequest }