import React, { useEffect, useState } from 'react';
import './textTechnologies.css';

export default function TextTechnologies() {
  const tecnologies = ["React Js", "Next Js", "Node Js"];
  const [deleting, setDeleting] = useState(false);
  const index = React.useRef(0);
  const [techWriting, setTechWriting] = useState("");
  useEffect(() => {
    let interval;
    let i = deleting ? tecnologies[index.current].length : 0;
    function writing() {
      if (!deleting) {
        if (i < tecnologies[index.current].length) {
          setTechWriting(tecnologies[index.current].slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setDeleting(true);
          }, 1300);
        }
      } else {
        if (i > 0) {
          setTechWriting(tecnologies[index.current].slice(0, i - 1));
          --i;
        } else {
          clearInterval(interval);
          setDeleting(false);
          index.current = index.current >= tecnologies.length -1? 0 : index.current +1;
        }
      }
    }
    interval = setInterval(writing, 150);
    return () => clearInterval(interval);
  }, [deleting]);

  return (
    <div className="techConteiner">
      <p className={`technologies ${techWriting ? "techActive" : ""}`}>
        {techWriting}  
      </p>
    </div>
  );
}
