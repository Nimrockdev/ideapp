

export const getDev = async(about) => {

    const url = 'https://devarc.herokuapp.com/dev';
    const resp = await fetch(url);
    const urlDevarc = await resp.json();
    const data = urlDevarc.urlDevarc; 
    //console.log(data);
    return data;

}