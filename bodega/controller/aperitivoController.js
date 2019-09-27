import { AperitivoView } from '../view/aperitivoView.js'
import { xmlhttprequest } from '../comunicacao/xmlhttprequest.js'
import { VideoModel } from '../model/video.js'

class AperitivoController {

    beber = function(params = null) {       
        let videoModel = new VideoModel(xmlhttprequest)
        
        let videos = videoModel.findByPage(1,function(resposta){
            let view = new AperitivoView()
            view.render(resposta.data)
        })           
    }

}

export { AperitivoController }