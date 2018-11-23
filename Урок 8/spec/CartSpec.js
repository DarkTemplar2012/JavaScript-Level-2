describe("Shopping Cart", function() {
  var cart;
  var productId = 1;
  var product = {id: productId, name: "Game 1", price: 100, count: 1};

  beforeEach(function() {
    cart = new Cart();
  });

  it("should be able to add product", function() {
    cart.addProduct(product);
    expect(cart.items.length).toBe(1);
    expect(cart.getProduct(productId)).toBe(product);
  });
  it("should be able to remove product", function() {
    cart.addProduct(product);
    cart.removeProduct(productId);
    expect(cart.items.length).toBe(0);
    expect(cart.getProduct(productId)).not.toBeDefined();
  });
  
});

describe("Shopping Cart Async Request", function() {
  var cart;
  var productId = 1;

  beforeEach(function(done) {
    cart = new Cart();
    cart.onAdd(productId, done);
  });

  it("should be able to add product async", function(done) {
    expect(cart.items.length).toBe(1);
    expect(cart.getProduct(productId).id).toBe(productId);
    done();
  });
});

describe("Shopping Cart Async Clean", function() {
  var cart;

  beforeEach(function(done) {
    cart = new Cart();
    cart.items =  {id: 1, name: "Game 1", price: 100, count: 1}
    cart.onClear(done);
  });

  it("should be able to clear product", function(done) {
    expect(cart.items.length).toBe(0);
    done();
  });
});

