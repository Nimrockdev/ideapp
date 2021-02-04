export const getProducts = async(word) => {

    const url = `https://devarc.herokuapp.com/products/search/${word}`;    
    const resp = await fetch(url);
    const data = await resp.json();
    //console.log(data);
    return data;

}


