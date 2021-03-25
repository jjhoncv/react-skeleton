import * as React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "../Box";
import { Container } from "../Container";
import { Form, FormItem, FormLabel, Input, FormFoot } from "../Form";
import { Page, PageHead, PageBody } from "../Page";

export const Login = () => {
  const handleSubmit = (e) => {
    const username = (document.getElementById("username") as any).value;
    const password = (document.getElementById("password") as any).value;

    fetch(
      "http://ec2-54-238-239-6.ap-northeast-1.compute.amazonaws.com:9000/auth/login",
      {
        method: "POST",
        body: JSON.stringify({ username, password }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      });

    e.preventDefault();
  };

  return (
    <Container>
      <Page>
        <PageHead>
          <h1>Login</h1>
        </PageHead>
        <PageBody>
          <Box type="box-middle">
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FormItem>
                <FormLabel>Username</FormLabel>
                <Input fullWidth type="text" name="username" id="username" />
              </FormItem>
              <FormItem>
                <FormLabel>Password</FormLabel>
                <Input
                  fullWidth
                  type="password"
                  name="password"
                  id="password"
                />
              </FormItem>
              <FormFoot>
                <Input type="submit" value="Login" />
                <p>
                  Si aún no eres usuario registrate{" "}
                  <NavLink to="/register">aquí</NavLink>
                </p>
              </FormFoot>
            </Form>
          </Box>
        </PageBody>
      </Page>
    </Container>
  );
};
