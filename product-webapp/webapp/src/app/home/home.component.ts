import { Component, OnInit } from '@angular/core';

import { SlickCarouselComponent } from 'ngx-slick-carousel'

interface Product {
  name: string;
  price: number;
  brand:string;
  imageUrl: string;
  isLimitedTimeOffer?: boolean;
  countdown?: Date;
  offerPercentage?: number; 
  discountedPrice?: number; 
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


  banners = [
    { imageUrl: 'assets/images/product1.jpg' },
    { imageUrl: 'assets/images/product2.jpg' },
    { imageUrl: 'assets/images/product3.jpg' },
    // Add more banner objects as needed
  ];


  carouselConfig = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,  // Add navigation arrows
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    dots: true,   // Add navigation dots
  };

  showOffersAndDeals: boolean = false;

  showOffersAndDealsPopup() {
    this.showOffersAndDeals = true;
  }
  

  closeOffersAndDealsPopup() {
    this.showOffersAndDeals = false;
  }
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
      brand: "Jhonson",
      imageUrl: 'assets/images/product5.jpg'
    },
    {
      name: 'Himalaya Facewash',
      price: 30,
      brand: "Himalaya",
      imageUrl: 'assets/images/product6.jpg'
    },
    {
      name: 'Cute Teddy',
      price: 18,
      brand: "Teddy",
      imageUrl: 'assets/images/product12.jpg'
    },

    {
      name: 'Cute Teddy 2',
      price: 18,
      brand: "TeddyS",
      imageUrl: 'assets/images/product11.jpg'
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
      brand: "Casio",
      imageUrl: 'assets/images/product1.jpg'
    },
    {
      name: 'Special Offer 2',
      price: 10,
      brand: "Candles1",
      imageUrl: 'assets/images/product3.jpg'
    },
    {
      name: 'Special Offer 3',
      price: 15,
      brand: "Prestige",
      imageUrl: 'assets/images/product2.jpg'
    },
    // Add more offers and deals
  ];
  homeAndKitchenProducts: Product[] = [
    {
      name: 'Clocks',
      price: 10,
      brand: "Quartz",
      imageUrl:'assets/images/product1.jpg',
      offerPercentage: 22,
      discountedPrice:8
    },
    {
      name: 'Candles',
      price: 20,
      brand: "Candles",
      imageUrl: 'assets/images/product2.jpg',
      offerPercentage: 24,
      discountedPrice:15
    },
    {
      name: 'Cookers',
      price: 15,
      brand: "Prestige",
      imageUrl: 'assets/images/product3.jpg',
      offerPercentage: 25,
      discountedPrice:11
    },
    // Add more products 
  ];

  beautyProducts: Product[] = [
    {
      name: 'Lipstics',
      price: 25,
      brand: "MAC cosmetics",
      imageUrl: 'assets/images/product4.jpg',
      offerPercentage: 20,
      discountedPrice:20
    },
    {
      name: 'Ponds Baby Powder',
      price: 30,
      brand: "Powder",
      imageUrl: 'assets/images/product5.jpg',
      offerPercentage: 26,
      discountedPrice:25
    },
    {
      name: 'Himalaya FaceWash',
      price: 18,
      brand: "HImalaya",
      imageUrl: 'assets/images/product6.jpg',
      offerPercentage: 22,
      discountedPrice:15
    },
    // Add more products 
  ];

  foodProducts: Product[] = [
    {
      name: 'Dairy Milk Chocklate',
      price: 12,
      brand: "Dairy Milk",
      imageUrl: 'assets/images/product7.jpg',
      offerPercentage: 28,
      discountedPrice:8
    },
    {
      name: 'Nuts',
      price: 8,
      brand: "nuts",
      imageUrl: 'assets/images/product8.jpg',
      offerPercentage: 20,
      discountedPrice:6
    },
    {
      name: 'Almonds',
      price: 22,
      brand: "Almonds",
      imageUrl: 'assets/images/product9.jpg',
      offerPercentage: 25,
      discountedPrice:17
    },
    // Add more products 
  ];

  toysAndMoreProducts: Product[] = [
    {
      name: 'Teddy',
      price: 40,
      brand: "Teddy",
      imageUrl: 'assets/images/product10.jpg',
      offerPercentage: 25,
      discountedPrice:35
    },
    {
      name: 'Cute Teddy',
      price: 35,
      brand: "Teddy",
      imageUrl: 'assets/images/product11.jpg',
      offerPercentage: 20,
      discountedPrice:30
    },
    {
      name: 'Baby Teddy',
      price: 28,
      brand: "Teddy",
      imageUrl: 'assets/images/product12.jpg',
      offerPercentage: 25,
      discountedPrice:26
    },
    // Add more products 
  ];

  bestOfElectronicsProducts: Product[] = [
    {
      name: 'Laptops',
      price: 50,
      brand: "Asus",
      imageUrl: 'assets/images/product14.jpg',
      offerPercentage: 24,
      discountedPrice:44
    },
    {
      name: 'Watches',
      price: 60,
      brand: "Apple",
      imageUrl: 'assets/images/product15.jpg',
      offerPercentage: 24,
      discountedPrice:50
    },
    {
      name: 'Smart Watches',
      price: 55,
      brand: "Samsung",
      imageUrl: 'assets/images/product16.jpg',
      offerPercentage: 24,
      discountedPrice:45
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
