import React from 'react';
import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

import classes from './MainNavigation.module.css';

import Header from "../old/Header";

function MainNavigation() {
  const token = useRouteLoaderData('root');

  return (
    <>
     <Header />
    
    <header className={classes.header1}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/memes"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              My Memes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-memes"
              //feed
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Memes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wiki-meme"
              //feed
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Wiki Meme
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Authentication
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
    </>
  );
}

export default MainNavigation;