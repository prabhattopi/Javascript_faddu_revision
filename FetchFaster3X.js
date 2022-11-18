// async function fetchNormal(){
//     const categories=await fetch(
//         'https://fakestoreapi.com/products/categories'
//     ).then(res=>res.json());

//     const products=await fetch("https://fakestoreapi.com/products").then(res=>res.json())

//     const users=await fetch("https://fakestoreapi.com/users").then(res=>res.json())


// return [categories,products,users]

// }

// fetchNormal().then(res=>console.log(res))


async function fetchCocurrent(){
    const categories=fetch(
        'https://fakestoreapi.com/products/categories'
    ).then(res=>res.json());

    const products=fetch("https://fakestoreapi.com/products").then(res=>res.json())

    const users=fetch("https://fakestoreapi.com/users").then(res=>res.json())


return Promise.all([categories,products,users])

}
fetchCocurrent().then(data=>console.log(data))

