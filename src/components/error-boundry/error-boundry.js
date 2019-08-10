import React from 'react';

import ErrorIndicator from '../error-indicator'

export default class ErrorBoundry extends React.Component
{
    state = {
        hasError: false
    }
    
    componentDidCatch()
    {
        this.setState({hasError: true});
    }

    render() 
    {
        const view = this.state.hasError ? <ErrorIndicator /> : this.props.children;
        return view;
    }
}