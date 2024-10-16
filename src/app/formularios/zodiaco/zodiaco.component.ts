import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  templateUrl: './zodiaco.component.html',
  imports: [ReactiveFormsModule, NgIf],
})
export default class ZodiacoComponent {
  zodiacoForm: FormGroup;
  resultado: any;

  signosChinos: { [key: string]: string } = {
    'Rata': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftrome.com%2Fhoroscopo%2Fhoroscopo-chino-cual-es-la-leyenda-de-los-doce-animales-del-zodiaco-chino-signos-del-zodiaco-chino-nnda-nnlt-noticia%2F&psig=AOvVaw2hDl2xrVmMr-tlsq8cSTwu&ust=1728784242454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjIkqfdh4kDFQAAAAAdAAAAABAJ',
    'Buey': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftrome.com%2Fhoroscopo%2Fque-signos-del-horoscopo-chino-tendran-mejor-suerte-durante-el-ano-de-la-rata-de-metal-rata-buey-tigre-conejo-dragon-serpiente-caballo-cabra-mono-gallo-perro-cerdo-nnda-nnlt-noticia%2F&psig=AOvVaw2hDl2xrVmMr-tlsq8cSTwu&ust=1728784242454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjIkqfdh4kDFQAAAAAdAAAAABBe',
    'Tigre': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Felcomercio.pe%2Fviu%2Factitud-viu%2Fpredicciones-tigre-horoscopo-chino-2020-ano-de-la-rata-salud-dinero-trabajo-y-amor-tigre-nnda-nnlt-noticia%2F&psig=AOvVaw2hDl2xrVmMr-tlsq8cSTwu&ust=1728784242454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjIkqfdh4kDFQAAAAAdAAAAABAn',
    'Conejo': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Felcomercio.pe%2Fviu%2Fpredicciones-conejo-horoscopo-chino-2020-ano-de-la-rata-salud-dinero-trabajo-y-amor-ano-2020-color-de-la-suerte-numero-de-la-suerte-nnda-nnlt-noticia%2F&psig=AOvVaw2hDl2xrVmMr-tlsq8cSTwu&ust=1728784242454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjIkqfdh4kDFQAAAAAdAAAAABAR',
    'Dragón': 'https://www.istockphoto.com/es/ilustraciones/fechas-del-horoscopo-chino',
    'Serpiente':'https://www.google.com/url?sa=i&url=https%3A%2F%2Felcomercio.pe%2Fmag%2Fhoroscopo%2Fhoroscopo-chino-2023-predicciones-en-el-amor-para-cada-animal-del-zodiaco-conejo-de-agua-nnda-nnlt-noticia%2F&psig=AOvVaw2hDl2xrVmMr-tlsq8cSTwu&ust=1728784242454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjIkqfdh4kDFQAAAAAdAAAAABBP',
    'Caballo': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Felcomercio.pe%2Frespuestas%2Fhoroscopo-chino-2023-color-de-la-suerte-de-cada-signo-en-el-ano-del-conejo-ano-nuevo-chino-2023-nnda-nnlt-noticia%2F&psig=AOvVaw2hDl2xrVmMr-tlsq8cSTwu&ust=1728784242454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjIkqfdh4kDFQAAAAAdAAAAABBm',
    'Cabra': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Felcomercio.pe%2Frespuestas%2Fhoroscopo-chino-2023-predicciones-para-el-ano-del-conejo-de-agua-nnda-nnlt-noticia%2F&psig=AOvVaw2hDl2xrVmMr-tlsq8cSTwu&ust=1728784242454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjIkqfdh4kDFQAAAAAdAAAAABAY',
    'Mono': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Felcomercio.pe%2Frespuestas%2Fhoroscopo-chino-2023-predicciones-para-el-ano-del-conejo-de-agua-nnda-nnlt-noticia%2F&psig=AOvVaw2hDl2xrVmMr-tlsq8cSTwu&ust=1728784242454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjIkqfdh4kDFQAAAAAdAAAAABBH',
    'Gallo': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Felcomercio.pe%2Fviu%2Factitud-viu%2Fgallo-horoscopo-chino-2020-predicciones-para-el-ano-de-la-rata-en-salud-dinero-y-amor-ano-nuevo-chino-nnda-nnnlt-noticia%2F&psig=AOvVaw2hDl2xrVmMr-tlsq8cSTwu&ust=1728784242454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjIkqfdh4kDFQAAAAAdAAAAABAv',
    'Perro': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Felcomercio.pe%2Frespuestas%2Fhoroscopo-chino-2023-predicciones-para-el-ano-del-conejo-de-agua-nnda-nnlt-noticia%2F&psig=AOvVaw2hDl2xrVmMr-tlsq8cSTwu&ust=1728784242454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjIkqfdh4kDFQAAAAAdAAAAABA_',
    'Cerdo': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Felcomercio.pe%2Fviu%2Factitud-viu%2Fhoroscopo-chino-2019-predicciones-ano-cerdo-ano-nuevo-chino-12-signos-rata-bufalo-tigre-conejo-dragon-gallo-caballo-perro-serpiente-cabra-mono-nnda-nnlt-noticia-590218-noticia%2F&psig=AOvVaw2hDl2xrVmMr-tlsq8cSTwu&ust=1728784242454000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjIkqfdh4kDFQAAAAAdAAAAABAg'
  };

  constructor(private fb: FormBuilder) {
    this.zodiacoForm = this.fb.group({
      nombre: ['', Validators.required],
      apaterno: ['', Validators.required],
      amaterno: ['', Validators.required],
      dia: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      mes: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      anio: ['', [Validators.required, Validators.min(1900)]],
      sexo: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.zodiacoForm.valid) {
      const { nombre, apaterno, amaterno, dia, mes, anio } = this.zodiacoForm.value;
      const edad = this.calcularEdad(dia, mes, anio);
      const signoZodiacal = this.calcularSignoChino(anio);
      const imagenSigno = this.obtenerImagenSigno(signoZodiacal);

      this.resultado = {
        nombreCompleto: `${nombre} ${apaterno} ${amaterno}`,
        edad,
        signoZodiacal,
        imagenSigno,  
      };
    }
  }

  calcularEdad(dia: number, mes: number, anio: number): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - anio;
    const mesActual = hoy.getMonth() + 1;
    const diaActual = hoy.getDate();

    if (mes > mesActual || (mes === mesActual && dia > diaActual)) {
      edad--;
    }

    return edad;
  }

  calcularSignoChino(anio: number): string {
    const cicloZodiaco = (anio - 1900) % 12;
    const signos = ['Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'];
    return signos[cicloZodiaco];
  }

  obtenerImagenSigno(signo: string): string {
    return this.signosChinos[signo] || '';
  }
}
