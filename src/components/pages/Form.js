import React from 'react';

const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Title</label>
        <input
          style={{ marginBottom: '1em' }}
          type="text"
          className="form-control"
          placeholder="Enter Title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Description</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Description"
        />
      </div>
      <button
        style={{ marginTop: '1em' }}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
