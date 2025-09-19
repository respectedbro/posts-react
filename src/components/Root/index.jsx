import { Outlet } from "react-router/internal/react-server-client";
import * as SC from "./styles.js";
import { Container } from "../Container/index.jsx";

export const Root = () => (
  <>
    <Container>
      <SC.Menu>
        <SC.MenuItem to={"/"}>Главная</SC.MenuItem>
        <SC.MenuItem to={"/posts"}>Список постов</SC.MenuItem>
        <SC.MenuItem to={"/posts/add"}>Добавление поста</SC.MenuItem>
        <SC.MenuItem to={"/auth"}>Авторизация</SC.MenuItem>
        <SC.MenuItem to={"/registration"}>Регистрация</SC.MenuItem>
      </SC.Menu>
    </Container>
    <Outlet />
  </>
);
