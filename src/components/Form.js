import React from 'react'; 
import Form1NewProject from './Form1NewProject';
import Form2Operations from './Form2Operations';
import Form3Ambassador from './Form3Ambassador';
import Form4Talent from './Form4Talent';
import Form5LastCheck from './Form5LastCheck';

const Form = props => {
  const {rol} = props;
  return (
    <div className="form__container">
     <form action="/signup" method="post">
      <Form1NewProject rol={rol}/>
      <Form2Operations rol={rol}/>
      {(rol==='ambassador'||rol==='head')? <Form3Ambassador rol={rol}/>:null}     
      <Form4Talent rol={rol}/>
      <Form5LastCheck rol={rol}/>
     </form>
    </div>

  );
}

export default Form; 