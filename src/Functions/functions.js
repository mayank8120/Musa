import { useEffect, useState } from "react";

export const getCurrentHash = (pageLocation, str) => {
    // let pageurl = pageLocation;
    const splitarr = pageLocation.split("#");
    let flag = false;
    for (let obj in splitarr) {
        if (splitarr[obj] === str) {
            flag = true;
        }
    }
    return flag;
}


export const getLocationParaCount = (pageLocation) => {
    const splitarr = pageLocation.split("#");
    return splitarr.length;
}




export const useScrollPositionHook = () => {
    const [scrollposition, setscrollposition] = useState(0);
    useEffect(() => {
        const updatePosition = () => {
            setscrollposition(window.pageYOffset);
        };
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);
    return scrollposition;
}





export const swipeUpDownPageOnClick = (loca, idname) => {
    return getCurrentHash(loca, idname) == true ? "insideNavigation" : "";
}









export let getCardLb = (id) => {
    return document.getElementById(`${id}`).offsetTop;
}

export let getCardUb = (id) => {
    return document.getElementById(`${id}`).offsetTop + document.getElementById(`${id}`).offsetHeight;
}


export let getClassForNav = (height, index, id) => {
    let h = parseFloat(height);
    let ret = '';
    if (h < 210) {
        if (index === 0) {
            ret = 'active';
        } else {
            ret = '';
        }
    } else {
        let l = parseFloat(getCardLb(id)) - 210;
        let u = parseFloat(getCardUb(id)) - 210;
        if (h <= u && h >= l) {
            ret = 'active'
        } else {
            ret = '';
        }
    }
    return ret;
}











