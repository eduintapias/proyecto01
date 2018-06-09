import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name:string= "asas"; 

  carrito: any = [];
  productos: any = []
  constructor() { 

    this.productos =[
      {
        id:1,
        image: "assets/product-01.jpg",
        precioActual: 2000,
        recioActual: 1700,
        titulo: "Alimentos para perros y adulto",
        descripcion: "Pouch Carne, 100 Gramo(s)."       
      },  
      {
        id:2,
        image: "assets/product-01.jpg",
        precioActual: 2000,
        recioActual: 1700,
        titulo: "Alimentos para perros y adulto",
        descripcion: "Pouch Carne, 100 Gramo(s)."       
      },
      {
        id:3,
        image: "assets/product-01.jpg",
        precioActual: 2000,
        recioActual: 1700,
        titulo: "Alimentos para perros y adulto",
        descripcion: "Pouch Carne, 100 Gramo(s)."       
      },  
      {
        id:4,
        image: "assets/product-01.jpg",
        precioActual: 2000,
        recioActual: 1700,
        titulo: "Alimentos para perros y adulto",
        descripcion: "Pouch Carne, 100 Gramo(s)."       
      }, 
      {
        id:5,
        image: "assets/product-01.jpg",
        precioActual: 2000,
        recioActual: 1700,
        titulo: "Alimentos para perros y adulto",
        descripcion: "Pouch Carne, 100 Gramo(s)."       
      },  
      {
        id:6,
        image: "assets/product-01.jpg",
        precioActual: 2000,
        recioActual: 1700,
        titulo: "Alimentos para perros y adulto",
        descripcion: "Pouch Carne, 100 Gramo(s)."       
      }, 
      {
        id:7,
        image: "assets/product-01.jpg",
        precioActual: 2000,
        recioActual: 1700,
        titulo: "Alimentos para perros y adulto",
        descripcion: "Pouch Carne, 100 Gramo(s)."       
      },  
      {
        id:8,
        image: "assets/product-01.jpg",
        precioActual: 2000,
        recioActual: 1700,
        titulo: "Alimentos para perros y adulto",
        descripcion: "Pouch Carne, 100 Gramo(s)."       
      }


    ]
    {  
    console.log(this.name)
    console.log ($("body"));
    $(document).ready(function(){
      $('.galeria').slick({
        arrows:true,
        autoplay:true,
        slidesToShow: 3,
        centerMode: true
      });
    });
  }
  } 

  
  add($id){
    console.log($id);
    this.carrito.push($id);
    console.log(this.carrito);
  }


  ngOnInit() {
  }

}
