import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

interface Product {
  name: string;
  price: number;
  brand:string;
  imageUrl: string;
  isLimitedTimeOffer?: boolean;
  countdown?: Date;
}

interface CategoryProductMap {
  [category: string]: Product[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Placeholder method for fetching search suggestions
  getSearchSuggestions(searchTerm: string): string[] {
    // Implement logic to fetch search suggestions based on the searchTerm
    // For example, you can return some static suggestions for demonstration purposes
    return ['Product A', 'Product B', 'Product C'];
  }

  // Placeholder method for navigating to search results
  navigateToSearchResults(searchTerm: string): void {
    // Implement logic to navigate to the search results page with the provided search term
    // For example, you can use Angular's Router to navigate
  }


  ngOnInit(): void {
    // Add this code to apply animation after component initialization
    setTimeout(() => {
      this.applyImageAnimation();
    }, 100);
  }

  applyImageAnimation(): void {
    // Add the 'visible' class to each carousel image after a delay
    const carouselImages = document.querySelectorAll('.carousel-image img');
    carouselImages.forEach((image, index) => {
      setTimeout(() => {
        image.classList.add('visible');
      }, index * 500); // Delay each image by 500ms
    });
  }

  searchSuggestions: string[] = [];
  showAutocomplete: boolean = false;
  hoveredProduct: Product | null = null;
  trendingProducts: Product[] = [
    {
      name: 'Ponds baby powder',
      price: 25,
      brand: "a",
      imageUrl: 'assets/images/product5.jpg'
    },
    {
      name: 'Himalaya Facewash',
      price: 30,
      brand: "b",
      imageUrl: 'assets/images/product6.jpg'
    },
    {
      name: 'Dairy Milk Chocklate',
      price: 18,
      brand: "c",
      imageUrl: 'assets/images/product7.jpg'
    },

    {
      name: 'Smart Watches',
      price: 18,
      brand: "d",
      imageUrl: 'assets/images/product16.jpg'
    },


  ];

  onSearchInput(event: any): void {
    const searchTerm = event.target.value;
    // Implement logic to fetch search suggestions based on the searchTerm
    this.searchSuggestions = this.getSearchSuggestions(searchTerm);
    this.showAutocomplete = this.searchSuggestions.length > 0;
  }

  selectSuggestion(suggestion: string): void {
    // Perform search based on the selected suggestion
    this.navigateToSearchResults(suggestion);
    this.showAutocomplete = false;
  }

  onProductHover(product: Product): void {
    this.hoveredProduct = product;
  }


   // Initialize offersAndDealsProducts array
   offersAndDealsProducts: Product[] = [
    {
      name: 'Special Offer 1',
      price: 5,
      brand: "a",
      imageUrl: 'assets/images/product1.jpg'
    },
    {
      name: 'Special Offer 2',
      price: 10,
      brand: "b",
      imageUrl: 'assets/images/product3.jpg'
    },
    {
      name: 'Special Offer 3',
      price: 15,
      brand: "c",
      imageUrl: 'assets/images/product2.jpg'
    },
    // Add more offers and deals
  ];
  homeAndKitchenProducts: Product[] = [
    {
      name: 'clocks',
      price: 10,
      brand: "c",
      imageUrl:'assets/images/product1.jpg'
    },
    {
      name: 'candles',
      price: 20,
      brand: "b",
      imageUrl: 'assets/images/product2.jpg'
    },
    {
      name: 'cookers',
      price: 15,
      brand: "a",
      imageUrl: 'assets/images/product3.jpg'
    },
    // Add more products 
  ];

  beautyProducts: Product[] = [
    {
      name: 'Lipstics',
      price: 25,
      brand: "b",
      imageUrl: 'assets/images/product4.jpg'
    },
    {
      name: 'Ponds Baby Powder',
      price: 30,
      brand: "d",
      imageUrl: 'assets/images/product5.jpg'
    },
    {
      name: 'Himalaya FaceWash',
      price: 18,
      brand: "a",
      imageUrl: 'assets/images/product6.jpg'
    },
    // Add more products 
  ];

  foodProducts: Product[] = [
    {
      name: 'Dairy Milk Chocklate',
      price: 12,
      brand: "d",
      imageUrl: 'assets/images/product7.jpg'
    },
    {
      name: 'Nuts',
      price: 8,
      brand: "d",
      imageUrl: 'assets/images/product8.jpg'
    },
    {
      name: 'Almonds',
      price: 22,
      brand: "c",
      imageUrl: 'assets/images/product9.jpg'
    },
    // Add more products 
  ];

  toysAndMoreProducts: Product[] = [
    {
      name: 'teddy',
      price: 40,
      brand: "a",
      imageUrl: 'assets/images/product10.jpg'
    },
    {
      name: 'Cute Teddy',
      price: 35,
      brand: "d",
      imageUrl: 'assets/images/product11.jpg'
    },
    {
      name: 'Baby Teddy',
      price: 28,
      brand: "c",
      imageUrl: 'assets/images/product12.jpg'
    },
    // Add more products 
  ];

  bestOfElectronicsProducts: Product[] = [
    {
      name: 'Laptops',
      price: 50,
      brand: "a",
      imageUrl: 'assets/images/product14.jpg'
    },
    {
      name: 'Watches',
      price: 60,
      brand: "b",
      imageUrl: 'assets/images/product15.jpg'
    },
    {
      name: 'Smart Watches',
      price: 55,
      brand: "d",
      imageUrl: 'assets/images/product16.jpg'
    },
    // Add more products 
  ];

  categoryProductMap: CategoryProductMap = {
    homeAndKitchen: this.homeAndKitchenProducts,
    beauty: this.beautyProducts,
    food: this.foodProducts,
    toysAndMore: this.toysAndMoreProducts,
    bestOfElectronics: this.bestOfElectronicsProducts,
    offersAndDeals: this.offersAndDealsProducts,
  };

  showAllFlags: { [category: string]: boolean } = {
    homeAndKitchen: false,
    beauty: false,
    food: false,
    toysAndMore: false,
    bestOfElectronics: false,
    offersAndDeals: false,
  
  };

  toggleShowAll(category: string): void {
    this.showAllFlags[category] = !this.showAllFlags[category];
  }

  getDisplayedProducts(category: string): Product[] {
    if (category === 'offersAndDeals') {
      return this.categoryProductMap[category];
    }
    const productsArray = this.categoryProductMap[category];
    return this.showAllFlags[category]
      ? productsArray
      : productsArray.slice(0, 3);
  }
  

  
}
