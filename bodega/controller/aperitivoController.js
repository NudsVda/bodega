import { aperitivoView } from '../view/aperitivoView.js'

class AperitivoController {
    

    beber = function(params = null) {        
        let mesa = document.querySelector('#mesa')        
        mesa.innerHTML = aperitivoView   
    }

}

export { AperitivoController }