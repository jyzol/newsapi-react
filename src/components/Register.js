import React from 'react';
import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Box, Grid } from '@material-ui/core';

const Register = ({handleLogged}) => {

    const [dataRegister, setDataRegister] = useState({
        emailReg: "",
        passReg: "",
        nameReg: "",
        lastNameReg: "",
        secondLastNameReg: "",
        phoneReg: "",
        typeDocReg: "",
        NumDocReg: "",
    });

    const handleInput = (event) => {
        const { value, name } = event.target;
    
        setDataRegister({
          ...dataRegister,
          [name]: value,
        });
    };

    const handleSubmit = () => {
        const {
          emailReg,
          passReg,
          nameReg,
          lastNameReg,
          secondLastNameReg,
          phoneReg,
          typeDocReg,
          NumDocReg,
        } = dataRegister;
    
        window.Identity.signUp(
          {
            userName: emailReg,
            credentials: passReg,
            password: "password",
          },
          {
            firstName: nameReg,
            lastName: lastNameReg,
            secondLastName: secondLastNameReg,
            displayName: emailReg,
            email: emailReg,
            contacts: [
              {
                phone: phoneReg,
                type: "HOME",
              },
            ],
            attributes: [
              {
                name: "typeDocument",
                value: typeDocReg,
                type: "String",
              },
              {
                name: "document",
                value: NumDocReg,
                type: "String",
              },
            ],
          },
          { doLogin: true },
          { rememberMe: true }
        )
          .then((res) => {
            handleLogged();
          })
          .catch((err) => {
            console.log("Oops algo fall??", err);
          });
      };
      
    return (
        <div>
            <Grid container>
                <Grid item md={4}>
                </Grid>
                <Grid item md={4} xs={12}>
                <Box m={2} p={2} boxShadow={3}>
                    <form autoComplete="off">
                        <FormLabel color="secondary">
                            <h1>Registro</h1>
                        </FormLabel>
                        <FormGroup>    
                            <TextField type="email" name="emailReg" label="Ingresar email" required onChange={handleInput} /><br />
                            <TextField type="password" name="passReg" label="Ingresar contrase??a" required onChange={handleInput} /><br/>
                            <TextField type="text" name="nameReg" label="Ingresar nombre(s)" required onChange={handleInput} /><br/>
                            <TextField type="text" name="lastNameReg" label="Ingresar apellido paterno" required onChange={handleInput} /><br/>
                            <TextField type="text" name="secondLastNameReg" label="Ingresar apellido materno" required onChange={handleInput} /><br/>
                            <TextField type="phone" name="phoneReg" label="Ingresar tel??fono/celular" required onChange={handleInput} /><br/>
                            <TextField type="text" name="typeDocReg" label="Tipo documento" required onChange={handleInput} /><br/>
                            <TextField type="text" name="NumDocReg" label="N??mero documento" required onChange={handleInput} maxLength="8"/><br/>
                            <Button type="button" variant="contained" color="primary" onClick={handleSubmit}>Registrarse</Button>
                        </FormGroup>
                    </form>
                </Box>
                </Grid>
                <Grid item md={4}>
                </Grid>
            </Grid>
        </div>
    );

    /*
    return (
        <>
          <h1>Reg??strate</h1>
          <form>
            <input
              type="email"
              name="emailReg"
              placeholder="Ingresar Correo"
              onChange={handleInput}
            />
            <br />
            <input
              type="password"
              name="passReg"
              placeholder="Ingresar Contrase??a"
              onChange={handleInput}
            />
            <br />
            <input
              type="text"
              name="nameReg"
              placeholder="Ingresa Nombre(s)"
              onChange={handleInput}
            />
            <br />
            <input
              type="text"
              name="lastNameReg"
              placeholder="Ingresa Apellido paterno"
              onChange={handleInput}
            />
            <br />
            <input
              type="text"
              name="secondLastNameReg"
              placeholder="Ingresa Apellido materno"
              onChange={handleInput}
            />
            <br />
            <input
              type="phone"
              name="phoneReg"
              placeholder="Ingresa Tel??fono/Celular"
              onChange={handleInput}
            />
            <br />
            <input
              type="text"
              name="typeDocReg"
              placeholder="Tipo Documento"
              onChange={handleInput}
            />
            <br />
            <input
              type="text"
              name="NumDocReg"
              placeholder="N??mero Documento"
              onChange={handleInput}
              maxLength="8"
            />
            <br />
            <button type="button" onClick={handleSubmit}>
              Registrarse!
            </button>
          </form>
        </>
      );
      */
}

export default Register;