import { Component, HostListener } from '@angular/core';
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
      text: 'Que treino completo! Totalmente de acordo com as minha necessidades do momento! As novas variações e troca de estímulos me fizeram lembrar de músculos que eu havia esquecido que tinha.',
      name: 'Kamilla Ananda',
      image: 'assets/images/kamilla.jpeg'
    },
    {
      text: 'Exemplo',
      name: 'Higor Dor',
      image: 'assets/images/higor.png'
    },
    {
      text: 'Exemplo',
      name: 'Maykon Barreto',
      image: 'assets/images/maykon.png'
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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.querySelector('.header') as HTMLElement;
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}
