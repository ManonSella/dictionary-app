import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{capitalize(props.meaning.partOfSpeech)}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index >= 3) {
          return null;
        } else {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              <blockquote className="example">{definition.example}</blockquote>
            </div>
          );
        }
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
