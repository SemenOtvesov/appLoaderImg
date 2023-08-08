import {storage} from '@firebaseFolder/firebaseInit'
import { TgetUrlParams } from '@js/types/mainFunctionsTypes';
import { getDownloadURL, ref } from 'firebase/storage';
import { setParamValue } from '../setParamValue/setParamValue';
import { setParamValueCatch } from '../setParamValueCatch/setParamValueCatch';

export async function getUrl({el, pathWebp, pathPng, imgIterator, urlList}: TgetUrlParams){
    if(pathWebp){
        await getDownloadURL(ref(storage, pathWebp))
        .then((url) => {
            setParamValue(el, url, imgIterator, pathWebp, pathPng, 1, true, urlList)

            getDownloadURL(ref(storage, pathPng))
                .then((url) => setParamValue(el, url, imgIterator, pathWebp, pathPng, 2, true, urlList))
                .catch((error) => setParamValueCatch(el));
            })
        .catch((error) => setParamValueCatch(el));
    }else{
        await getDownloadURL(ref(storage, pathPng))
                .then((url) => setParamValue(el, url, imgIterator, pathWebp, pathPng, 2, true, urlList))
                .catch((error) => setParamValueCatch(el));
    }
}