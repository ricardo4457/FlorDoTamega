
//App Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3d7mf-7u6L8vLflqveuON3Z3oU0MQ7K0",
  authDomain: "dbproject-641ac.firebaseapp.com",
  projectId: "dbproject-641ac",
  storageBucket: "dbproject-641ac.appspot.com",
  messagingSenderId: "1032479781746",
  appId: "1:1032479781746:web:7948ef2598e2449a9d23eb"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("fomData");

//Get Submit Form
let submitButton = document.getElementById("btn1");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let firstName = document.getElementById("Nome").value;
  let Email = document.getElementById("Email").value;
  let Telemovel = document.getElementById("Telemovel").value;
  let Titulo = document.getElementById("Titulo").value;
  let Subject = document.getElementById("Subject").value;
  let Descricao = document.getElementById("Descricao").value;

  //Check for errors
  if(firstName === "" || Email === "" || Telemovel === "" || Subject === "" || Descricao === "" || Titulo === ""){
    alert("Esqueceu-se de Completar Algo!!!");
    return;
  }

      //Save Form Data To Firebase
      db.doc()
        .set({
          name: firstName,
          emailpessoa: Email,
          tel: Telemovel,
          titulo: Titulo,
          sub: Subject,
          desc: Descricao,
          estado: "Por Analizar",
        })
        .then(() => {
          //alert
          alert("Contacto Submetido com Sucesso");
          //clear form after submission
          function clearForm() {
            document.getElementById("clearFrom").reset();
          }
          clearForm()
        })
        .catch((error) => {
          console.log(error);
        });
    });

