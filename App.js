
function Home(){
  return(
  "<div>
    <h1>Home</h1>
    <div>
  <b>Welcome!!</b>
  </div>
  </div>"
  );
}
function Category(){
  return(
  "<div>
    <h1>Category</h1>
    <div>
  <b>Browse through product categories</b>
  </div>
  </div>"
  );
}
function Products(){
  return(
  "<div>
    <h1>Products</h1>
    <div>
  <b>Product Catalog!!</b>
  </div>
  </div>"
  );
}
  function render(){
    return(
      "<Router>
      <div>
        <nav className="navbar navbar-light">
          <ul className="na navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>
        <Route path="/" component={Home}/>
        <Route path="/category" component={Category}/>
        <Route path="/products" component={Products}/>
      </div>
      </Router>"
    );
  }
