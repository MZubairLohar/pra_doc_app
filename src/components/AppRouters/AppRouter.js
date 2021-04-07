import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Search} from '../index'
const AppRouter = () => {
    return (
        <div>
            <>
            <Routes>
                <Route exact path='/' />
                <Route exact path='/search' element={<Search />} />
            </Routes>
            </>
        </div>
    )
}

export default AppRouter
