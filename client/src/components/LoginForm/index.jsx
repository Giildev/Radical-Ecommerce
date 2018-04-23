// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components & Containers
import "./style.css";
import { Input } from "../Input/";
import { Button } from "../Button/";

const LoginForm = ({ onSubmit, onChange, errors, user}) => (
  
  <form action="/" onSubmit={onSubmit}>
    <h1>Inicia Sesión!</h1>
    <h3>Ingresa para poder realizar tus compras</h3>

    {errors.sumary && <p>{errors.sumary}</p>}

    <div>      
      <div className="contact__row">
        <Input
          inputType="email"
          inputName="email"
          inputPlaceHolder="Email"
          inputLabel="Email"
          onChange={onChange}
          value={user.email}
        />
      </div>      
      <div className="contact__row">
        <Input
          inputType="password"
          inputName="password"
          inputPlaceHolder="Contraseña"
          inputLabel="Contraseña"
          onChange={onChange}
          value={user.password}
        />
      </div>     
      <div>
        <Button
          bgColor="primary"
          btnType="round"
          buttonText="Enviar"
          btnAction="Send"              
        />
      </div>
    </div>
  </form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

// class LoginForm extends Component {
//   render() {
//     return (
//       <div>        
//         <div>
//           <h1>Inicia Sesión!</h1>
//           <h3>
//             Ingresa para poder realizar tus compras
//           </h3>
//         </div>
//         <div>         
//           <div className="contact__row">
//             <Input
//               inputType="email"
//               inputName="email"
//               inputPlaceHolder="Email"
//               inputLabel="Email"
//             />
//           </div>          
//           <div className="contact__row">
//             <Input
//               inputType="password"
//               inputName="password"
//               inputPlaceHolder="Contraseña"
//               inputLabel="Contraseña"
//             />
//           </div>          
//           <div>
//             <Button 
//               bgColor="primary"
//               btnType="round"
//               buttonText="Enviar"
//               btnAction="Send"
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default LoginForm;