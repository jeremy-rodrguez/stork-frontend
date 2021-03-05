import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  ModalActions,
  Segment,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux"; // UD to set state and US to use state
import { Link } from "react-router-dom";

const Login = (props) => {
  const dispatch = useDispatch();
  const emailInput = useSelector((state) => state.emailInput);
  const passwordInput = useSelector((state) => state.passwordInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          email: emailInput,
          password: passwordInput,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => authResponse(data));
  };

  const authResponse = (data) => {
    if (data.error) {
      alert(data.error);
    } else {
      const token = data.jwt;
      localStorage.token = token;
      dispatch({
        type: "SET_USER",
        payload: {
          id: data.user.id,
          email: data.user.email,
        },
      });
      props.history.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Log In Here.
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_USER_INPUT",
                    value: e.target.value,
                  })
                }
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_USER_PASSWORD",
                    value: e.target.value,
                  })
                }
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Button
                color="teal"
                fluid
                size="large"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Link to="/sign_up">
            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Link>
        </Grid.Column>
      </Grid>
    </form>
  );
};

export default Login;
