export const getProductByID = async (word) => {

    const url = `https://devarc.herokuapp.com/products/searchByID/${word}`;
    console.log(url)
    const resp = await fetch(url);
    let data = await resp.json();

    
    if (data.ok === true){       
        data = data.products;
    } else {
        data = [];
    }
    
    
    return data;

}