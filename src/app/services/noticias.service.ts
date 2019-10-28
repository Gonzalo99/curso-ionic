import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headlinesPage = 0;

  categoriaActual = '';
  categoriaPage = 0;

  constructor(private http: HttpClient) { }

  getTopHeadLines() {

    this.headlinesPage++;

    // tslint:disable-next-line: max-line-length
    return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&page=${ this.headlinesPage }&apiKey=43fbaeb15d7c486195a26fa542781664`);
  }

  getTopHeadLinesCategoria( categoria: string ) {

    if ( this.categoriaActual === categoria ) {
      this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }

    // tslint:disable-next-line: max-line-length
    return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&category=${ categoria }&page=${ this.categoriaActual }&apiKey=43fbaeb15d7c486195a26fa542781664`);
  }

}
