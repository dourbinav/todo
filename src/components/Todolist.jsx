import React, { useState } from 'react';
import Todo from './Todo';

export default function Todolist() {
  const [activity, setactivity] = useState('');
  const [list, setlist] = useState([]);
  const [task, settaskcomplete] = useState(0);

  function addactivity() {
    setlist((list) => {
      const newlist = [...list, { activity, completed: false }]; // Store completed status in the list item
      console.log(newlist);
      setactivity('');
      return newlist;
    });
  }

  function Remove(id) {
    const newlist = list.filter((elem, i) => {
      return id !== i;
    });
    setlist(newlist);
  }

  function Removeall() {
    const updatedList = list.filter((item) => !item.completed);
    setlist(updatedList);
  }

  function taskcompleted(id, completed) {
    setlist((prevList) => {
      const updatedList = [...prevList];
      updatedList[id].completed = !completed; // Toggle completed status
      settaskcomplete(task + (completed ? -1 : 1)); // Increment or decrement task count based on completed status
      return updatedList;
    });
  }

  return (
    <div className='h-screen bg-blue-500 w-2/3 mx-auto p-2 '>
      <h1 className='text-white text-center text-2xl '>Todo</h1>
      <input
        type='text'
        value={activity}
        placeholder='Add Activity'
        onChange={(e) => setactivity(e.target.value)}
        className='text-center outline-indigo-500 ml-20 w-4/6 my-4 p-1 '
      />
      <button onClick={addactivity} className='bg-green-600 text-white w-20 p-1'>
        Add
      </button>

      <div>
        <div className='flex space-x-10'>
          <h2 className='text-white'>Todolist</h2>
          <p>{`Total Task ${list?.length}`}</p>
          <br />
          <p>{`Completed Task:${task}`}</p>
        </div>
        {list.length > 0 &&
          list.map((item, i) => {
            return (
              <Todo
                key={i}
                activity={item.activity}
                id={i}
                Remove={Remove}
                taskcompleted={taskcompleted}
                completed={item.completed}
              />
            );
          })}
        {list.length > 1 && (
          <button
            onClick={Removeall}
            className='bg-green-600 text-white p-2 rounded-sm'
          >
            Remove completed task
          </button>
        )}
      </div>
    </div>
  );
}
