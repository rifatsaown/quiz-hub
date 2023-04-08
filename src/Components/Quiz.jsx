import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ques from './Ques';

const Quiz = () => {
    const data = useLoaderData();
    const [totalAns, setTotalAns] = React.useState(0);
    
    return (
        <div className='text-center mt-4'>
            <h1 className='text-3xl font-semibold text-secondary-focus'>Quiz Topic <span className='font-bold'>{data.data.name}</span></h1>
            <p className='text-xl mt-2'>Total Currect Ans: {totalAns}</p>
            <div className='flex flex-wrap justify-around'>
                {
                    data.data.questions.map((ques,index) => {
                        return <Ques setTotalAns={setTotalAns} key={index} ques={ques} />
                    })
                }
            </div>
        </div>
    );
};

export default Quiz;