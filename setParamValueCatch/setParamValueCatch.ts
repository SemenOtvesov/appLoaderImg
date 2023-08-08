

export function setParamValueCatch(el: HTMLElement){
    el.classList.add('errorDownload')
    el.classList.remove('loading-img')
    if(el.firstElementChild){
        const firstChild: any = el.firstElementChild
        firstChild.style.maxWidth = '100%'
    }
}