import React from "react";
function Navbar(props) {
  console.log(props.data);
  return (
    <div>
      <ul className="Navmenu">
        {props.data.map((el, i) => (
          <li className={el.hover} key={i}>
           <a href="/">{el.title}</a> 
            {!el.dropdown ? null : (
            <ul className='dropdown'>
              {el.dropdown.map((el, i) => (
                <li key={i}><a href="/" >{el}</a> </li>
              ))}
            </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
