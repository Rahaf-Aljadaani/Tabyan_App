import { Injectable } from '@angular/core';
import {collectionData, docData, Firestore} from '@angular/fire/firestore';
import {collection, doc} from '@firebase/firestore';
import { Observable } from 'rxjs';

export interface Words{
id?: string;
title: string;
meaning: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getWords(){
    const wordsRef = collection(this.firestore,'word');
    return collectionData(wordsRef);
  }

  getWordsById(id: any) {
    const wordsRef = doc(this.firestore,'word/'+id);
    return docData(wordsRef );
  }


}
