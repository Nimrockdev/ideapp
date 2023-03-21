export const getProducts = async(word) => {

    const url = `https://devarc-production.up.railway.app/products/search/${word}`;    
    const resp = await fetch(url);
    let data = await resp.json();
    data = data.products;
    //console.log(data);
    return data;

}


