class VideoModel 
{      

    constructor(xmlhttprequest)
    {
        this.xmlhttprequest = xmlhttprequest
    }

    findByPage =  function(page = 1,fn) {                          
         this.xmlhttprequest('get','videos?&page='+page,{},fn)
    }

}

export { VideoModel }