import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
        constructor(){
          super();
          this.state ={
              products:[
                  {
                      title: 'Phone',
                      price: 999,
                      qty: 5,
                      img: 'https://img.freepik.com/free-photo/phone-screen-with-abstract-marble-aesthetic_53876-145553.jpg',
                      id: 1
                  },
                  {
                      title: 'TV',
                      price: 9999,
                      qty: 50,
                      img: 'https://magazine.columbia.edu/sites/default/files/styles/wysiwyg_full_width_image/public/2019-08/Exp_cell-phones_0.jpg?itok=y0WBMwsO',
                      id: 2
                  },
                  {
                      title: 'Battery',
                      price: 10,
                      qty: 500,
                      img: 'https://img.freepik.com/free-photo/phone-screen-with-abstract-marble-aesthetic_53876-145553.jpg',
                      id: 3
                  },
                  {
                      title: 'Oven',
                      price: 9999,
                      qty: 7,
                      img: 'https://magazine.columbia.edu/sites/default/files/styles/wysiwyg_full_width_image/public/2019-08/Exp_cell-phones_0.jpg?itok=y0WBMwsO',
                      id: 4
                  }
              ]
          }
      }
      handleIncreaseQuantity = (product) =>{
          const {products} = this.state;
          const index = products.indexOf(product);

          products[index].qty +=1;

          this.setState({
              products
          })

      }

      handleDecreaseQuantity = (product) =>{
          const {products} = this.state;
          const index = products.indexOf(product);

          products[index].qty -=1;

          this.setState({
              products
          })

      }

      handleDeleteQuantity = (id) =>{
          const {products} = this.state;
          const items = products.filter((item) => item.id !== id);

          this.setState({
              products: items
          })
      }
      getCartCount = () => {
        const {products} = this.state;

        let count = 0;

        products.forEach((product) => {
          count += product.qty;
        })

        return count;

      }
      getCartTotal = () => {
        const {products} = this.state;
        let cartTotal = 0;

        products.map(product => {
          if (product.qty > 0){
            cartTotal = cartTotal + product.qty * product.price;
          }
          return '';
        });

        return cartTotal;

      }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = { this.getCartCount()} />
        <Cart 
        products = {products}
        onIncreaseQuatity={this.handleIncreaseQuantity}
        onDecreaseQuatity={this.handleDecreaseQuantity}
        onDeleteQuantity ={this.handleDeleteQuantity}/>
        <div>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
