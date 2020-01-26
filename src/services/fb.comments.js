import firebase from "./firebase";

 class commentApi {

     constructor() {
         this.collection = firebase.firestore().collection("comentarios")
     }

  add({ name, email, phoneNumber, comment }) {
    
    return this.collection.add({
      name,
      email,
      phoneNumber,
      comment
    });
  };

}

export default new commentApi();