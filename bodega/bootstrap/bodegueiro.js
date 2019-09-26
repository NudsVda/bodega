import { AperitivoController } from '/bodega/controller/aperitivoController.js'


/**
 * Start Bodega, event dispatch, and more, more, and more. 
 * A very powerfull class 
 */
class Bodegueiro {

    // inicializa algumas classes e rotinas da Bodega
    abrir()
    {
        console.log('Estamos abrindo a bodega')        
        let controller = new AperitivoController();
        controller.beber();
        return console.log('Bodega Aberta!')
    }    

}

export { Bodegueiro }