import React from 'react';

const Form = ({submitFn}) => (
  <form onSubmit={submitFn} >
    <input placeholder="name" name="name" />
    <input placeholder="image" name="image" />
    <input placeholder="price" name="price" />
    <textarea placeholder="ingredients" name="ingredients" />
    <button type="submit" >add new item</button>
  </form>
)

export default Form;