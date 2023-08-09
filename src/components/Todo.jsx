import React from 'react';

export default function Todo({ activity, id, Remove, taskcompleted, completed }) {
  function del() {
    console.log(id);
    Remove(id);
  }

  function handlechange() {
    taskcompleted(id, completed); 
  }

  return (
    <div className='bg-indigo-400 m-2 '>
      <input type='checkbox' checked={completed} onChange={handlechange} />
      <p>Task: {activity}</p>
      <button className='bg-green-500' onClick={del}>
        Remove
      </button>
    </div>
  );
}

