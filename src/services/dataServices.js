import axios from 'axios';

let catalog = [
    {
        "title":"Orange",
        "category": "fruits",
        "price": 12.99,
        "image": "orange.jpeg",
        "id":"1asdfa",
    },
    {
        "title":"Strawberry",
        "category": "berry",
        "price": 12.99,
        "image": "strawberry.jpeg",
        "id":"2asdfa",
    },
    {
        "title":"Watermelon",
        "category": "melon",
        "price": 12.99,
        "image": "watermelon.jpeg",
        "id":"3asdfa",
    },
    {
        "title":"Mango",
        "category": "berry",
        "price": 12.99,
        "image": "mango.jpeg",
        "id":"4asdfa",
    },
    {
        "title":"Pineapple",
        "category": "fruits",
        "price": 12.99,
        "image": "pineapple.jpeg",
        "id":"5asdfa",
    },
    {
        "title":"Blueberry",
        "category": "berry",
        "price": 12.99,
        "image": "blueberry.jpeg",
        "id":"6asdfa",
    },
    {
        "title":"Grape",
        "category": "fruits",
        "price": 12.99,
        "image": "grape.jpeg",
        "id":"7asdfa",
    },
    {
        "title":"Kiwi",
        "category": "fruits",
        "price": 12.99,
        "image": "kiwi.jpeg",
        "id":"8asdfa",
    },
]

class Dataservice {

async getProducts() {
    // to work without a server use this line:
    // return catalog; 

    // to use the server
    let response = await axios.get('http://127.0.0.1:5000/api/products');
    return response.data;
    }

    async getCategories() {
        let response = await axios.get("http://127.0.0.1:5000/api/categories");
        return response.data;
    }
}

export default Dataservice; 