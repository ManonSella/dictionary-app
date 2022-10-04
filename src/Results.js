import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{capitalize(props.results.word)}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
