import { TurlList } from "../appLoaderImg"

export function setParamValue(
        el: HTMLElement, 
        url: string, 
        imgIterator: number, 
        pathWebp: string, 
        pathPng:string, 
        childrenNum: number,
        addCheck: boolean,
        urlList: TurlList
    ){
    if(childrenNum === 1){
        el.children[1].setAttribute('srcSet', url)
        if(addCheck){
            urlList.patchWebpList[imgIterator] = {pathWebp: pathWebp.split('.webp')[0], url}
        }
    }

    if(childrenNum === 2){
        if(el.querySelector('source')){
            el.children[2].setAttribute('src', url)
        }else{
            el.children[1].setAttribute('src', url)
        }
        if(addCheck){
            urlList.patchPngList[imgIterator] = {pathPng: pathPng.split('.png')[0], url}
        }
    }

    el.classList.remove('loading-img')

    if(el.firstElementChild){
        const firstChild: any = el.firstElementChild
        firstChild.style.maxWidth = '100%'
    }
}