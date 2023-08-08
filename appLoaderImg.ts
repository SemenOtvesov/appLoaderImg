import { imageEach } from './imageEach/imageEach';

export type TurlList = {
    patchWebpList: {[key: string]: {pathWebp: string, url: string}},
    patchPngList: {[key: string]: {pathPng: string, url: string}}
} 

const urlList: TurlList = {
    patchWebpList: {},
    patchPngList: {}
}

export function appLoaderImg(){
    const icons: NodeListOf<HTMLElement> = document.querySelectorAll('[data-image-type="icon"]')
    const image: NodeListOf<HTMLElement> = document.querySelectorAll('[data-image-type="image"]')
    const bikeImages: NodeListOf<HTMLElement> = document.querySelectorAll('[data-image-type="bikeImage"]')

    let imgIterator = 0
    imageEach(icons, imgIterator, 'icon', urlList)
    imageEach(image, imgIterator, 'image', urlList)
    imageEach(bikeImages, imgIterator, 'bikeImage', urlList)
}
