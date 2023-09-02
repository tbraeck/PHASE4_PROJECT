import React, { useState } from 'react';
// import { useParams } from 'react-router';

function EditDrawing({  user, drawing, handleUpdateUserDrawings, isEditFormVisible, setIsEditFormVisible }) {
  const [drawingBody, setDrawingBody] = useState({
        adjective: drawing.adjective,
        noun: drawing.noun,
        verb: drawing.verb,
    adverb: drawing.adverb,
        drawing_id: drawing.drawing_id
    })
   
    const {adjective, noun, verb, adverb} = drawingBody;

    const handleDrawingChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setDrawingBody({...drawingBody, [name]:value})
      }
 
    const handleSubmitEdit = (e) => {
      e.preventDefault();
      let drawing_id = drawing.id;
      let user_id = user.id;

      fetch(`http://localhost:3000/users/${user_id}/user_drawings/${drawing_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(drawingBody),
      })
        .then((response) => response.json())
        .then((updatedDrawing) => {
          console.log(updatedDrawing)
          handleUpdateUserDrawings(updatedDrawing);
          setIsEditFormVisible(!isEditFormVisible);
        })
        .catch((error) => {
          console.error("Error updating drawing:", error);
        });
    };

  return (

    <form className='newDrawingForm' onSubmit={handleSubmitEdit}>
      <input
      className='formInput'
        type="text"
        name='adjective'
        value={adjective}
        onChange={handleDrawingChange}
        placeholder="Enter title..."
      />
       <input
       className='formInput'
        type="text"
        name='noun'
        value={noun}
        onChange={handleDrawingChange}
        placeholder="Enter noun..."
      />
       <input
       className='formInput'
        type="text"
        name='verb'
        value={verb}
        onChange={handleDrawingChange}
        placeholder="Enter verb..."
      />
       <input
       className='formInput'
        type="text"
        name='adverb'
        value={adverb}
        onChange={handleDrawingChange}
        placeholder="Enter adverb..."
      />
      <button className='formButton' type="submit">Update</button>
    </form> 
);
};

export default EditDrawing;

// import React, { useState} from 'react';


// const ResourceEdit = ({  subjects, resource, setSubjects, editOn, setEditOn}) => {
//   const [resourceBody, setResourceBody] = useState({
//     name: resource.name,
//     description: resource.description,
//     url: resource.url,
//     subject_id: resource.subject_id
// })

// const {name, description, url} = resourceBody;

// const handleResourceChange = (e) => {
//   let name = e.target.name
//   let value = e.target.value
//   setResourceBody({...resourceBody, [name]:value})
// }

// const handleUpdateRes = (updatedRes) => {
//   const subject = subjects.find((sub)=>sub.id === updatedRes.subject_id)
//   const updatedResources = subject.resources.map(r => r.id === updatedRes.id ? updatedRes : r)
//   const updatedSubject = {...subject, resources: updatedResources}
//   const updatedSubjects = subjects.map(s => s.id === subject.id ? updatedSubject : s)
//   setSubjects(updatedSubjects)              
// }

// const handleEdit = (e) => {
//   e.preventDefault()
//     fetch(`http://localhost:9292/resources/${resource.id}`, {
//       method: "PATCH",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(resourceBody)
//         })
//           .then((res) => res.json())
//           .then((updatedRes) => handleUpdateRes(updatedRes))
//           setEditOn(!editOn)
//           }
    
//   return (
//     <form className="updateForm" onSubmit={handleEdit}>
//       <div className='editInput'>
//       <input
//         type="text"
//         name='name'
//         value={name}
//         onChange={handleResourceChange}
//         placeholder="Enter name"
//       />
//       </div>
//       <div className='editInput'>
//        <input
//         type="text"
//         name='description'
//         value={description}
//         onChange={handleResourceChange}
//         placeholder="Enter description"
//       />
//       </div>
//       <div className='editInput'>
//        <input
//         type="text"
//         name='url'
//         value={url}
//         onChange={handleResourceChange}
//         placeholder="Enter url"
//       />
//       </div>
//       <div >
//         <button  className='updateBtn' type="submit">Submit Changes</button>
//       </div>
//     </form>
//   );
// };

// export default ResourceEdit;

