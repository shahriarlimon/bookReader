import React from 'react';

const Question = () => {
    return (
        <div className=' m-5 md:m-12'> 
            <div>
                <h1 className='text-2xl my-3 font-semibold' >How React Works</h1>
                <p>
                React is a JavsScript library that creates user interfaces(UIs) in a effecient way by using declarative code.Declarative code is used to create components that are reusable and they build the UI.If there are multiple state changes occur ,React doesn't commit state changes one after another.Rather React creates its virtual DOM .Then creates a list of those changes that need to be made to the actual DOM simply by just comparing to its virtual DOM.Finally React executes the changes in one single process that considers to be highly efficient. 
                </p>
            </div>
            <div className='mt-4'>
            <h1 className='text-2xl my-3 font-semibold' >What are the differences between Props and State?</h1>
            <div>
                <p>-Props are read-only but State Changes can be asynchronous.</p>
                <p>-Props are immutable though State is mutable.</p>
                <p>-Props help to pass data from one component to other components as an argument but State holds the  information about the components.</p>
                <p>-Props are accessible by the child componet.On the other hand,State cannot be accessed by child components.</p>
                <p>-Props are used to communicate among components.States can be used for rendering dynamic changes with the component.</p>
                <p>-Props make component reusable.State can't make components reusable.</p>
            </div>

            </div>
        </div>
    );
};

export default Question;