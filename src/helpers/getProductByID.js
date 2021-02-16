export const getProductByID = async (word) => {

    const url = `https://devarc.herokuapp.com/products/searchByID/${word}`;
    const resp = await fetch(url);
    let data = await resp.json();
    data = data.products;
    
    return data;

}