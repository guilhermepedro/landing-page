import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class LandingPageComponent {

  currentIndex = 0;

  testimonials = [
    {
      text: 'Metodologia profissional e atenção personalizada. Superou todas as minhas expectativas!',
      name: 'Guilherme',
      role: 'Desenvolvedor',
      image: 'assets/testimonials/patricia.jpg'
    },
    {
      text: 'Resultados incríveis em poucos meses. O melhor investimento que já fiz!',
      name: 'Higor',
      role: 'Empresário',
      image: 'assets/testimonials/joao.jpg'
    },
    {
      text: 'Treinos adaptados à minha rotina e objetivos. Superação diária!',
      name: 'Maykon',
      role: 'Publicitário',
      image: 'assets/testimonials/maria.jpg'
    }
  ];


  previousTestimonial() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.testimonials.length - 1;
  }

  nextTestimonial() {
    this.currentIndex = this.currentIndex < this.testimonials.length - 1 ? this.currentIndex + 1 : 0;
  }

  openWhatsApp() {
    const phoneNumber = '5527999345844';
    const message = 'Olá! Gostaria de saber mais sobre seus serviços de personal trainer.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
