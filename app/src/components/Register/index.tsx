import * as React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "../Box";
import { Container } from "../Container";
import { Form, FormItem, FormLabel, Input, FormFoot } from "../Form";
import { Page, PageHead, PageBody } from "../Page";

export const Register = () => {
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
          <h1>Register</h1>
        </PageHead>
        <PageBody>
          <Box type="box-middle">
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FormItem>
                <FormLabel>Name</FormLabel>
                <Input fullWidth type="text" name="name" id="name" />
              </FormItem>
              <FormItem>
                <FormLabel>Surname</FormLabel>
                <Input fullWidth type="text" name="surname" id="surname" />
              </FormItem>
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input fullWidth type="text" name="email" id="email" />
              </FormItem>
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
                <Input type="submit" value="Register" />
                <p>
                  Si ya estas registrado ingresa a <NavLink to="/login">aquí</NavLink>
                </p>
              </FormFoot>
            </Form>
          </Box>
        </PageBody>
      </Page>
    </Container>
  );
};
