// Dependencies
import React from "react";
import PropTypes from "prop-types";
//import axios from "axios";

// Components & Containers
import "./style.css";
import { Input } from "../Input/";
import { Button } from "../Button/";

const RegisterForm = ({ onSubmit, onChange, errors, user }) => (

  <form action="/" onSubmit={onSubmit}>
    <h1>Regístrate!</h1>
    <h3>Llena el formulario para comenzar a disfrutar de nuesto portal</h3>

    {errors.sumary && <p>{errors.sumary}</p>}

    <div>
      <div className="contact__row">
        <Input
          inputType="text"
          inputName="name"
          inputPlaceHolder="Nombre"
          inputLabel="Nombre"
          onChange={onChange}
          value={user.name}
        />
      </div>
      <div className="contact__row">
        <Input
          inputType="text"
          inputName="lastName"
          inputPlaceHolder="Apellido"
          inputLabel="Apellido"
        />
      </div>
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
          inputType="number"
          inputName="phone"
          inputPlaceHolder="Teléfono"
          inputLabel="Número Telefónico"
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
      <div className="contact__row">
        <Input
          inputType="password"
          inputName="confPass"
          inputPlaceHolder="Confirmar Contraseña"
          inputLabel="Confirmar Contraseña"
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

RegisterForm.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

// class RegisterForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       object: ""
//     };
//   }

//   componentWillMount() {
//     axios.get(`http://localhost:4000/api/hello`).then(res => {
//       console.log(res.data);
//       this.setState({
//         object: res.data.object
//       });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.object}</h1>
//         <div>
//           <h1>Regístrate!</h1>
//           <h3>
//             Llena el formulario para comenzar a disfrutar de nuesto portal
//           </h3>
//         </div>
//         <div>
//           <div className="contact__row">
//             <Input
//               inputType="text"
//               inputName="name"
//               inputPlaceHolder="Nombre"
//               inputLabel="Nombre"
//             />
//           </div>
//           <div className="contact__row">
//             <Input
//               inputType="text"
//               inputName="lastName"
//               inputPlaceHolder="Apellido"
//               inputLabel="Apellido"
//             />
//           </div>
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
//               inputType="number"
//               inputName="phone"
//               inputPlaceHolder="Teléfono"
//               inputLabel="Número Telefónico"
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
//           <div className="contact__row">
//             <Input
//               inputType="password"
//               inputName="confPass"
//               inputPlaceHolder="Confirmar Contraseña"
//               inputLabel="Confirmar Contraseña"
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

export default RegisterForm;
