class PageManager{

    constructor(container){
        this.container = container
        // this.adapter = new SignupAdapter(adapter)
    }

    fetchAndRenderPageResources(){
        return null
    }

    render(){
        this.container.innerHTML = this.staticHTML
        this.initBindingsAndEventListeners()
        this.fetchAndRenderPageResources()
    }

}