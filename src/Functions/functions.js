export const getCurrentState = (pageLocation, str) => {
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
    // let pageurl = pageLocation;
    const splitarr = pageLocation.split("#");
    return splitarr.length;
}


export const currentNavbar = () => {

}
