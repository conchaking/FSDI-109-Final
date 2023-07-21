import { useState } from 'react';
import "./admin.css";

function Admin() {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);

    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);
    
     function handleText(e) {
        const value = e.target.value;
        const name = e.target.name;

        // #1 Product Copy, Modify Copy, Set Copy
        let copy = {...product}; 
        copy[name] = value;
        setProduct(copy);
     }
        
        // # 2 Coupon Copy, Modify Copy, Set Copy 
    function handleCouponChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        let copy = {...coupon};
        copy[name] = value;
        setCoupon(copy);
    }

    // Save Product Function 
    function saveProduct() {
        console.log(product);

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    // Save Coupon Function
    function saveCoupon() {
        console.log(coupon);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);

    }


    return (
      <div className="admin page">
        <h1>Store Administration</h1>

        <div className="parent">
            <section className="sec-prods">
            <div className="form">
                <h3>Products</h3>

                <div className="mt-3">
                    <label className="form-label">Title</label>
                    <input onChange={handleText} name="title" className="form-control" type="text"/>
                </div>

                <div className="mt-3">
                    <label className="form-label">Category</label>
                    <input onChange={handleText} name="category" className="form-control"type="text"/>
                </div>

                <div className="mt-3">
                    <label className="form-label">Image</label>
                    <input onChange={handleText} name="image" className="form-control"type="text"/>
                </div>

                <div className="mt-3">
                    <label className="form-label">Price</label>
                    <input onChange={handleText} name="price" className="form-control"type="number"/>
                </div>

                <div>
                    <button onClick={saveProduct}className='btn btn-dark'>
                        Save Product
                    </button>
                </div>
            </div>
                    
            <h3 className='mt-4'>You have {allProducts.length} products</h3>

            {allProducts.map((prod) => (<h5>{prod.title} - ${prod.price}</h5> ))}
            </section> 
            
            <section className="sec-coupons">
               <div className='form'>
                <h3>Coupon Codes</h3>

                <div className="mt-3">
                    <label className='form-label'>Code</label>
                    <input onChange={handleCouponChange} name='code' type='text' className='form-control' />
                </div>

                <div className="mt-3">
                    <label className='form-label'>Discount</label>
                    <input onChange={handleCouponChange} name='discount' type='number' className='form-control' />                 
                </div>
                
                <div className="mt-4 text-center">
                    <button onClick={saveCoupon} className="btn btn outline-dark">Save Coupon</button>
                </div>
            </div>

            <h3 className='mt-4'>You have {allCoupons.length} coupons</h3>
            <ul>
                {allCoupons.map(coupon => <li>{coupon.code} - {coupon.discount}</li>)}
            </ul>
        </section>
       </div>
    </div>
    );
}

export default Admin;

/**
 * Create the form 
 * Create a function to handle the change on controls
 * Created an state variable and build an object from the change function
 * Console log the object on the click of the save button
 * 
 * Create an array to store the object and added the object from the save function
 * Print the lenght of the array
 * Render info about the objects
 */
