import React, { useEffect, useState } from 'react';
import DrawingCard from './DrawingCard';

import './styles/UserDrawings.css';

const UserDrawings = ({ user, handleSaveDrawingToUserProfile }) => {
  const [userDrawings, setUserDrawings] = useState([])
 
  useEffect(() => {
    fetch(`http://localhost:3000/users/${user.id}/drawings`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch user drawings');
        }
      })
      .then((data) => {
        setUserDrawings(data);
      })
      .catch((error) => {
        console.error('Error fetching user drawings:', error);
      });
  }, [user.id]);

  const handleDelete = (drawingId) => {
    fetch(`http://localhost:3000/users/${user.id}/user_drawings/${drawingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      if (response.ok) {
        const updatedUserDrawings = userDrawings.filter(
          (drawing) => drawing.id !== drawingId
        );
        setUserDrawings(updatedUserDrawings);
      } else {
        console.error("Failed to delete drawing");
      }
    })
    .catch((error) => {
      console.error("Error deleting drawing:", error);
    });
  };

const handleUpdateUserDrawings = (updatedDrawing) => {
  setUserDrawings((prevUserDrawings) => {
    const updatedUserDrawings = prevUserDrawings.map((drawing) =>
      drawing.id === updatedDrawing.id ? updatedDrawing : drawing
    );
    return updatedUserDrawings;
  });
};

  return (
    <div className="drawingList">
      {userDrawings.map((drawing) => (
        <div key={drawing.id}>
       <DrawingCard
            drawing={drawing}
            handleDeleteClick={() => handleDelete(drawing.id)}
            user={user}
            handleUpdateUserDrawings={handleUpdateUserDrawings}
            userDrawings={userDrawings}
            setUserDrawings={setUserDrawings}
            handleSaveDrawing={handleSaveDrawingToUserProfile} // Make sure this prop is correctly named
          />
        </div>  
      ))}
    </div>
  );
};

export default UserDrawings;





// const {id} = useParams()

// useEffect(()=> {
//         fetch(`http://localhost:9292/resources/${id}`)
//         .then(res => res.json())
//         .then(data => {
//           setNewName(data.name)
//           setNewDescripton(data.description)
//           setNewUrl(data.url)
//         } )
//       }, [id])

// console.log(subject)


//   function handleClickDel(id){
//     // e.preventDefault()
//       fetch(`http://localhost:9292/resources/${id}`, {
//         method: "DELETE",
//       });
//        deleteResource(id);
//     }

//     function handleSubmit(e){
//       e.preventDefault()

//           fetch(`http://localhost:9292/resources/${id}`, {
//             method: "PATCH",
//                 headers: {
//                 "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({newName, newDescription, newUrl})
//               })
//                 .then((res) => res.json())
//                 .then((data) => {
// console.log(data)
//         // const subject = subject.find(sub => 
//         //   sub.id === updatedResource.subject_id)
//         //   const updatedResources = subject.resources.map(resource => {
//         //           if(resource.id === updatedResource.id) {
//         //             return updatedResource
//         //         }
//         //         return resource

//         //       }
//         //       )
//     })}



//  function handleClickEdit(e){
// e.preventDefault()

// setSubject()
//  }
// // };

//   return (
//     <div className='resourceBox'>
//       <br/>
//             <h2>Name: </h2>

//       <h1>{name}</h1>
//       <br/>
//             <h2>Resource #: </h2>

//       <h1>{id}</h1>
//       <br/>
//       <h2>Description: </h2>

//       <h3>{description}</h3>
//       <br/>
//       <h2>Resource URL: </h2>
//       < a href={url} target="_blank" rel="noopener noreferrer">{url}</a>


//             <form onSubmit={(e)=> handleSubmit}>
//             <div className='inputs'>
//             <input
//             className='input'
//           name='New Name'
//               type="text"
//               id='name'
//               placeholder="New Name"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//             />
//             </div>
//             <input

//             className='input'
//             name='New Description'
//               id='description'
//               placeholder="New Description"
//               value={newDescription}
//               onChange={(e) => setNewDescripton(e.target.value)}
//             />
//             <input
//             className='input'
//               type="text"
//               name='New Url'
//               id='url'
//               placeholder="New Url"
//               value={newUrl}
//               onChange={(e) => setNewUrl(e.target.value)}
//             />
//    <div className='editResBtn'>


//         <button  className="btnStyle" type='submit' style={{height: "50px",width: "200px", fontSize: "large", marginRight: "330px"}} onClick={() => handleClickEdit}>EDIT </button>
//         <button className="btnStyle" type='submit' onClick={handleSubmit} style={{height: "50px",width: "200px",fontSize: "large", marginRight: "330px", marginTop: "40px",paddingBottom: "-15px"}}>Submit Edit</button>
//         </div>
//         </form>

//                 <div className='delBtn'>
//               <button className="btnStyle" type='submit' onClick={ handleClickDel}>DELETE </button>
//               </div>
//         <br/><br/>
//         <br/>
//         <hr/>
//         </div>
//   )
// }

