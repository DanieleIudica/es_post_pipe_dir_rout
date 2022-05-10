import { Injectable } from '@angular/core';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  coloreCategoria(post: Post) {
    return {
      'bg-primary': post.categoria == 'Arte',
      'bg-success': post.categoria == 'Cucina',
      'bg-dark , text-white': post.categoria == 'Moda',
      'bg-danger': post.categoria == 'Bricolage',
    };
  }

  status(post: Post) {
    return (post.attivo = !post.attivo);
  }

  constructor() {}
}
