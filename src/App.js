import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/app';

class App extends React.Component {
        constructor(){
          super();
          this.state ={
              products:[],
              loading: true
          }
          this.db = firebase.firestore();
      }

       componentDidMount(){
      //   firebase
      //   .firestore()
      //   .collection('products')
      //   .get()
      //   .then((snapshot)=> {
      //     console.log(snapshot);

      //     snapshot.docs.map((doc) => {
      //       console.log(doc.data())
      //     });

      //     const products = snapshot.docs.map((doc) => {
      //       const data = doc.data();
      //       data['id'] = doc.id;
      //       return data;
      //     })
      //     this.setState({
      //       products,
      //       loading: false
      //     })
      //   })
      
      this.db
      .collection('products')
      .onSnapshot((snapshot)=> {
          console.log(snapshot);

          snapshot.docs.map((doc) => {
            console.log(doc.data())
            return '' //changed this on my own
          });

          const products = snapshot.docs.map((doc) => {
            const data = doc.data();
            data['id'] = doc.id;
            return data;
          })
          this.setState({
            products,
            loading: false
          })
        })

      }

      handleIncreaseQuantity = (product) =>{
          const {products} = this.state;
          const index = products.indexOf(product);

          const docRef = this.db.collection('products').doc(products[index].id);

          docRef
          .update({
            qty: products[index].qty + 1
          })
          .then(()=>{
            console.log('Updated Successfully');
          })
          .catch((error) => {
            console.log("Error in updating: ", error)
          })

      }

      handleDecreaseQuantity = (product) =>{
          const {products} = this.state;
          const index = products.indexOf(product);

          const docRef = this.db.collection('products').doc(products[index].id);

          docRef
          .update({
            qty: products[index].qty - 1
          })
          .then(()=>{
            console.log('Updated Successfully');
          })
          .catch((error) => {
            console.log("Error in updating: ", error)
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

      addProduct = () => {
        this.db
        .collection('products')
        .add({
          img: 'https://4.imimg.com/data4/MD/TD/MY-13223178/whirlpool-washing-machine.jpg',
          price: 9999,
          qty: 9,
          title: 'Washing Machine'
        })
        .then((docRef) => {
          console.log('product had been added',docRef);
        })
        .catch((error) => {
          console.log('Error: ',error);
        })
      }

  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count = { this.getCartCount()} />
        <button onClick={this.addProduct}>Add Product </button>
        <Cart 
        products = {products}
        onIncreaseQuatity={this.handleIncreaseQuantity}
        onDecreaseQuatity={this.handleDecreaseQuantity}
        onDeleteQuantity ={this.handleDeleteQuantity}
        />
        {loading && <h1>Loading products...</h1>}
        <div>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
