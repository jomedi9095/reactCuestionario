import React, { createContext, useState, useContext } from "react";
const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({name: "", lastname: ""});
  const SetCurrentUser = (newValue) => setCurrentUser(newValue);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone]=useState(false)
  const increaseScore = (value) => {
    setScore(score + value);
  };
  const questions = [
    {
      statement: "¿ Que es la POO (PROGRAMACIÓN ORIENTADA OBJETO) ?",
      options: [
        {
          option: "Lenguaje de programación",
          value: false,
        },
        {
          option: "Sistema de control de versiones",
          value: false,
        },
        {
          option: "Framework",
          value: false,
        },
        {
          option: "Ninguna de las anteriores",
          value: true,
        },
      ],
    },
    {
      statement: "Es un sistema de control de versiones",
      options: [
        {
          option: "Java",
          value: false,
        },
        {
          option: "Git",
          value: true,
        },
        {
          option: "Framework",
          value: false,
        },
        {
          option: "CMD",
          value: false,
        },
      ],
    },
    {
      statement:
        "¿ Php es un lenguaje de programacion que trabaja del lado del servidor ? ",
      options: [
        {
          option: "VERDADERO",
          value: true,
        },
        {
          option: "FALSO",
          value: false,
        },
      ],
    },
    {
      statement: "Javascript es:",
      options: [
        {
          option: "Lenguaje de de programacion para la interactividad",
          value: true,
        },
        {
          option: "Un Framework de Java",
          value: false,
        },
        {
          option: "Un lenguaje para el diseño de las paginas",
          value: false,
        },
        {
          option: "Todas las anteriores",
          value: false,
        },
      ],
    },
    {
      statement: "Los Arrays, Pilas, Colas y Grafos son:",
      options: [
        {
          option: "Funciones asincronas",
          value: false,
        },
        {
          option: "Estructuras de datos",
          value: true,
        },
        {
          option: "Flujos de control",
          value: false,
        },
        {
          option: "La primera y la segunda",
          value: false,
        },
      ],
    },
    {
      statement: "La sentencia For es un: ",
      options: [
        {
          option: "Programa para realizar peticiones",
          value: false,
        },
        {
          option: "Bucle para relizar secuencias repetitivas",
          value: true,
        },
        {
          option: "Framework para todos los lenguajes",
          value: false,
        },
        {
          option: "Medidor de peticiones Http",
          value: false,
        },
      ],
    },
    {
      statement: "La palabra reservada 'new' lo que hace es:",
      options: [
        {
          option: "Crear una interface",
          value: false,
        },
        {
          option: "Crear una nueva clase",
          value: false,
        },
        {
          option: "Instanciar una clase y crear un Objeto",
          value: true,
        },
        {
          option: "Crear un constructor en la clase",
          value: false,
        },
      ],
    },
    {
      statement: "Es un motor de base de datos relacional: ",
      options: [
        {
          option: "Mysql",
          value: false,
        },
        {
          option: "PostgreSQL",
          value: false,
        },
        {
          option: "MongoDB",
          value: false,
        },
        {
          option: "Las dos primeras",
          value: true,
        },
      ],
    },
    {
      statement:
        " Cual es el metodo http que permite enviar los datos sin que se vean en la ruta del navegador:",
      options: [
        {
          option: "GET",
          value: false,
        },
        {
          option: "POST",
          value: true,
        },
        {
          option: "Socket",
          value: false,
        },
        {
          option: "Ninguna de las anteriores",
          value: false,
        },
      ],
    },
  ];
  const amount = questions.length;
  const NextIndexQuestion = () => {
    if (indexQuestion + 1 < amount+1 && indexQuestion + 1 > 0) {
      setIndexQuestion(indexQuestion + 1);
    }
  };
  let grade = (5 / amount) * score;
  grade = grade.toFixed(1)
  const value = {
    questions,
    currentUser,
    SetCurrentUser,
    indexQuestion,
    NextIndexQuestion,
    setIndexQuestion,
    amount,
    increaseScore,
    score,
    setScore,
    done, 
    setDone,
    grade
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
