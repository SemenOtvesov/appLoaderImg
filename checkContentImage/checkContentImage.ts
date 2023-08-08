export function checkContentImage(el: any){
    let check = true
    if(el.querySelector('img').getAttribute('src')){
        check = false
    }
    return check
}