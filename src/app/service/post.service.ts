import { Post } from '../interface/post';
export async function recuperaPost() {
  //metodo per la chiamate della fetch
  return await (await fetch('assets/db.json')).json();
}

const posts: Post[] = [
  {
    id: 1,
    body: 'Lorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, con ',
    titolo: 'CaffeLatte e si va letto',
    categoria: 'Cucina',
    autore: 'Mauro',
    attivo: true,
  },
  {
    id: 2,
    body: 'Lorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, conLorem ipsum dolor sit amet ',
    titolo: 'Lorem ipsum corto',
    categoria: 'Arte',
    autore: 'Kevin',
    attivo: true,
  },
  {
    id: 3,
    body: 'Kevin De Girolamo non è bravo a fare le foto,Kevin De Girolamo non è bravo a fare le foto,Kevin De Girolamo non è bravo a fare le foto,Kevin De Girolamo non è bravo a fare le foto,Kevin De Girolamo non è bravo a fare le foto,Kevin De Girolamo non è bravo a fare le foto,Kevin De Girolamo non è bravo a fare le foto,Kevin De Girolamo non è bravo a fare le foto,Kevin De Girolamo non è bravo a fare le foto,Kevin De Girolamo non è bravo a fare le foto,Kevin De Girolamo non è bravo a fare le foto,',
    titolo: 'Come vestirsi al buio',
    categoria: 'Moda',
    autore: 'Alfredo',
    attivo: false,
  },
  {
    id: 4,
    body: 'Mauro Migliorino Nerda,Mauro Migliorino Nerda,Mauro Migliorino Nerda,Mauro Migliorino Nerda,Mauro Migliorino Nerda,Mauro Migliorino Nerda,Mauro Migliorino Nerda,Mauro Migliorino Nerda,Mauro Migliorino Nerda,Mauro Migliorino Nerda,Mauro Migliorino Nerda,Mauro Migliorino Nerda,Mauro Migliorino Nerda,',
    titolo: 'Mi affido alle tue mani',
    categoria: 'Bricolage',
    autore: 'Giovanni',
    attivo: false,
  },
];

export async function unioneElem(): Promise<Post[]> {
  return new Promise((resolve, reject) => {
    resolve(posts);
  });
}
