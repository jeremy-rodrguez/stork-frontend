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
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const nameInput = useSelector((state) => state.nameInput);
  const emailInput = useSelector((state) => state.emailInput);
  const passwordInput = useSelector((state) => state.passwordInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/sign_up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          name: nameInput,
          email: emailInput,
          password: passwordInput,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        dispatch({
          type: "SET_USER",
          payload: data.user,
        });
        props.history.push("/");
      });
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
            Sign Up Here.
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_USER_NAME",
                    value: e.target.value,
                  })
                }
                fluid
                icon="user"
                iconPosition="left"
                placeholder="First and Last"
              />{" "}
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
                placeholder="E-mail Address"
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
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Link to="/login">
            <Message>
              Already have an account? <a href="#">Log In</a>
            </Message>
          </Link>
        </Grid.Column>
      </Grid>
    </form>
  );
};

export default SignUp;
