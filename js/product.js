export default class Product {
  constructor() {
    console.log("This is Product Class");
  }

  setProducts() {
    let prodcutLists = [
      {
        id: "p001",
        categoryId: "c001",
        categoryName: "Category 001",
        name: "FHD Laptopr",
        description:
          "HP 15s-fq5786TU Core i3 12th Gen 15.6 FHD Laptopr",
        image:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-fq2644tu/15s-fq2644tu-01-228x228.jpg",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p002",
        categoryId: "c001",
        categoryName: "Category 001",
        name: "FHD Laptop",
        description:
          "HP 15s-fq5487TU Core i3 12th Gen 15.6 FHD Laptop",
        image:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-fq5487tu/15s-fq5487tu-01-228x228.webp",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p003",
        categoryId: "c001",
        categoryName: "Category 001",
        name: "Touch Laptop",
        description:
          "HP Spectre x360 Convertible 14-ea1492TU Core i5 11th Gen 13.5 Touch Laptop",
        image:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/spectre-x360/spectre-x360-08-228x228.jpg",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p004",
        categoryId: "c001",
        categoryName: "Category 001",
        name: "FHD Laptop",
        description:
          "HP ENVY 13-ba1690TU Core i5 11th Gen 13.3 FHD Laptop",
        image:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/envy-13-ba1690tu/envy-13-ba1690tu-01-228x228.jpg",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p005",
        categoryId: "c001",
        categoryName: "Category 001",
        name: "FHD Laptop",
        description:
          "HP ProBook 440 G9 Core i7 12th Gen 14 FHD Laptop",
        image:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/probook-440-g9/probook-440-g9-01-228x228.webp",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p006",
        categoryId: "c002",
        categoryName: "Category 002",
        name: "FHD Laptop",
        description:
          "HP Pavilion Gaming 15-ec2908AX Ryzen 7 5800H RTX 3050 4GB Graphics 15.6 FHD Laptop",
        image:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/pavilion-gaming-15-ec2908ax/pavilion-gaming-15-ec2908ax-01-228x228.jpg",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p007",
        categoryId: "c002",
        categoryName: "Category 002",
        name: "FHD Laptop",
        description:
          "HP ProBook 440 G9 Core i5 12th Gen 14 FHD Laptop",
        image:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/probook-440-g9/probook-440-g9-01-228x228.webp",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p008",
        categoryId: "c002",
        categoryName: "Category 002",
        name: "FHD Laptop",
        description:
          "HP 250 G8 Core i3 11th Gen 8GB RAM 15.6  FHD Laptop",
        image:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/250-g8/250-g8-01-228x228.jpg",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p009",
        categoryId: "c002",
        categoryName: "Category 002",
        name: "FHD Laptop",
        description:
          "HP 15s-fq5620TU Core i5 12th Gen 15.6 FHD Laptop",
        image:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-fq2597tu/15s-fq2597tu-01-228x228.jpg",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p0010",
        categoryId: "c002",
        categoryName: "Category 002",
        name: "FHD Laptop",
        description:
          "HP 15s-fq3234TU Celeron N4500 15.6 FHD Laptop",
        image:
          "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-eq3619au/15s-eq3619au-01-228x228.webp",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
    ];
    return prodcutLists;
  }

  getProducts() {
    let productList = this.setProducts();
    return productList;
  }

  setCategories() {
    let categories = [
      {
        id: "c001",
        name: "High product",
      },
      {
        id: "c002",
        name: "Low product",
      },
    ];
    return categories;
  }

  getCategories() {
    let categories = this.setCategories();
    return categories;
  }
}
