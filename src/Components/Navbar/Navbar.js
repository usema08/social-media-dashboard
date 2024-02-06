import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Upper } from '../UpperPart/Upper';
import { Lower } from '../LowerPart/Lower';

export function Navbar() {
  const [backgroundColor, setBackgroundColor] = useState("#1e202a");
  const [textColor, setTextColor] = useState("white");
  const [cardColor, setCardColor] = useState("hsl(228, 28%, 20%)")

  function handleClick() {
    setBackgroundColor((prevColor) =>
      prevColor === "#1e202a" ? "hsl(225, 100%, 110%)" : "#1e202a"
    );
    setTextColor((prevColor) =>
      prevColor === "white" ? "black" : "white"
    );
    setCardColor((prevColor) =>
      prevColor === "hsl(228, 28%, 20%)" ? " hsl(227, 47%, 96%)" : "hsl(228, 28%, 20%)"
    );
  }


  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor; // Change text color of the whole page
    document.querySelector('.dashboard').style.color = textColor;
  }, [backgroundColor, textColor]);

  useEffect(() => {
    const h1Tags = document.querySelectorAll('h1');
    h1Tags.forEach(tag => {
      tag.style.color = textColor;
    });
  }, [textColor]);

  useEffect(() => {
    const overviewElements = document.querySelectorAll('.overview');
    overviewElements.forEach(element => {
      element.style.color = textColor;
    });

    const pTags = document.querySelectorAll('p');
    pTags.forEach(tag => {
      tag.style.color = textColor;
    });

    const row = document.querySelectorAll('.row-1, .row-2, .row-3, .row-4, column-1');
    row.forEach(element => {
      element.style.backgroundColor = cardColor;
    });

    const column = document.querySelectorAll('.column-1');
    column.forEach(element => {
      element.style.backgroundColor = cardColor;
    });
  }, [textColor, cardColor]);


  return (
    <>
      <div className='main'>
        <div>
          <div className='dashboard'>Social Media Dashboard </div>
          <div className='total'><p>Total Followers: 23,004</p></div>
        </div>
      
        <div className='checkbox'>
          <div className='check'>Dark Mode </div>
          <label className="switch">
            <input type="checkbox" onClick={handleClick} defaultValue={"#1e202a"}
            style={{textColor,
            color: textColor}}/>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <Upper />
      <Lower />
    </>
  )
}
