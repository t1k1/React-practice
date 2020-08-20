import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddFrom from '../post-add-form';

import './app.css'

const App = () => {

    const data = [
        {label: 'Going to learn react', important: true, id: 'asd'},
        {label: 'That is good', important: false, id: 'dfg'},
        {label: 'I need a break...', important: false, id: 'sdg'}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddFrom/>
        </div>
    )
}

export default App;