

export const getDev = async(about) => {

    const url = 'https://devarc-production.up.railway.app/dev';
    const resp = await fetch(url);
    const urlDevarc = await resp.json();
    const data = urlDevarc.urlDevarc; 
    //console.log(data);
    return data;

}
