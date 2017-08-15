import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';
import asyncComponent from './components/AsyncComponent';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

const AsyncHome = asyncComponent(() => import('./containers/Home'));
const AsyncNotFound = asyncComponent(() => import('./containers/NotFound'));
const AsyncLogin = asyncComponent(() => import('./containers/Login'));
const AsyncSignup = asyncComponent(() => import('./containers/Signup'));
const AsyncNewNote = asyncComponent(() => import('./containers/NewNote'));
const AsyncNotes = asyncComponent(() => import('./containers/Notes'));

export default ({ childProps }) => (
    <Switch>
        <AppliedRoute path='/' exact component={AsyncHome} props={childProps} />
        <UnauthenticatedRoute path='/Login' exact component={AsyncLogin} props={childProps} />
        <UnauthenticatedRoute path='/Signup' exact component={AsyncSignup} props={childProps} />
        <AuthenticatedRoute path='/notes/new' exact component={AsyncNewNote} props={childProps} />
        <AuthenticatedRoute path='/notes/:id' exact component={AsyncNotes} props={childProps} />
        <AppliedRoute component={AsyncNotFound} />
    </Switch>
);