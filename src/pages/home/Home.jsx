import React, { Fragment, useEffect, useState } from 'react'
import Logo from '../../components/Logo'
import './home.css'


function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [isfav, setIsfav] = useState(false);
    const [search,setSearch] = useState('')

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const favOpen = () => {
    setIsfav(!isfav);
  };
  const [allTodos, setAllTodos] = useState([])
  const [newTitle,setNewTitle] = useState('')
  const [newDes,setNewDes] = useState('')
  const [favorites, setFavorites] = useState([]);

  const submitHandler = ()=>{
    let newTodoItem = {
      title:newTitle,
      description:newDes
    };
    
    setNewTitle('')
    setNewDes('')
    setAllTodos([...allTodos,{list:newTodoItem, id : Date.now() , status : false}])
  };
  const handleDelete = (id) =>{
     setAllTodos(allTodos.filter((to) => to.id !== id))
  }

  const onComplete = (id) => {
     let complete = allTodos.map((list) => {
      if (list.id === id) {
        return ({...list,status :!list.status})
      }
      return list
     })
     setAllTodos(complete)
  }
  const onFavorite = (id) => {
    let updatedTodos = allTodos.map((list) => {
      if (list.id === id) {
        return { ...list, status: !list.status };
      }
      return list;
    });

    setAllTodos(updatedTodos);

    let updatedFavorites = updatedTodos.filter((list) => list.status);
    setFavorites(updatedFavorites);


  };

  

  useEffect(() => {
    
  
    
  }, [search])
  
  
  

  return (
    <div className='home_main'>
        <div className="home_left">
        <div className='logo'>
            <Logo/>
            </div>
            <div  className='home_content'>
                <div className="home_head"><h3>TODO</h3></div>
                <div className='para'>
                    <p className='para1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh dolor dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet at eleifend feugiat vitae faucibus nibh dolor dui. </p>
                </div>
                <div className="input">
                    <div>
                    <input value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} className='input1' type="text"  placeholder='Title'/>
                    </div>
                    <div>
                    <input value={newDes} onChange={(e)=>setNewDes(e.target.value)} className='input1' type="text" placeholder='Description' />
                    </div>
                </div>
                <div className='home_button'>
                    <button onClick={submitHandler} className='home_but'>Add</button>
                </div>
            </div>
        </div>
        <div className="home_right">
            <div className='home_right1'>
                <div className='line'></div>
                <div className='todo'>
                    <div className='todo_head'>
                        <h3>TODO LIST</h3>
                    </div>
                       <div className='search_filters'>
                        <div className='search'><input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" name="" id=""  placeholder='search'/></div>
                        <div className='filter'><select name="cars" id="cars">
  <option value="filter">Filter By</option>
  <option value="complted">Completed</option>
  <option onClick={favOpen} value="Favourite">Favourite</option>
  <option value="Deleted">Deleted</option>
</select></div>
                       </div>
                       
                       
                        {allTodos.map((to)=>{
                          return(
                            <Fragment>
                            
                              <div className='todo_list'  id={to.status ? 'list-item' : ''} >
                            <div  className='list_head'><h3>{to.list.title}</h3></div>
                        <div className='list_desc'><p>{to.list.description}</p></div>
                        <div className='horizontal_line'></div>
                        </div>
                        
                       
                       <div className='dot' >
                        <img onClick={toggleDropdown} className='dot1' src="/images/dot.png" alt="" />
                        {isOpen && (
        <div className="dropdown-content">
          <p onClick={()=>onComplete(to.id)}>complete</p>
          <p onClick={()=>onFavorite(to.id)}>Favourite</p>
          <p onClick={()=>handleDelete(to.id)} >delete</p>
        </div>
      )}
                       </div>
                       </Fragment>

                          )
                        })}
                        
              <div className='favorites'>
                <h3>Favorite List</h3>
                {favorites.map((to) => {
                  return (
                    <Fragment key={to.id}>
                      <div className='todo_list'>
                        <div className='list_head'>
                          <h3>{to.list.title}</h3>
                        </div>
                        <div className='list_desc'>
                          <p>{to.list.description}</p>
                        </div>
                        <div className='horizontal_line'></div>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
   
                        
                        
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Home
