import React from "react";
import { checkContentImage } from "./checkContentImage";
import { test, describe, expect } from "@jest/globals";
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';

describe('checkContentImageTest', ()=>{
    test('correct', ()=>{
        const El = ()=> <picture>
                    <source srcSet=""/>
                    <img src="" alt="" />
                </picture>;
        
        const div = document.createElement('div');
        const root = createRoot(div);
        flushSync(() => {root.render(<El />);});
        
        expect(checkContentImage(div)).toBe(true)
    })

    test('dontCorrect', ()=>{
        const El = ()=> <picture>
                    <source srcSet=""/>
                    <img src="1111" alt="" />
                </picture>;
        
        const div = document.createElement('div');
        const root = createRoot(div);
        flushSync(() => {root.render(<El />);});

        expect(checkContentImage(div)).toBe(false)
    })
})