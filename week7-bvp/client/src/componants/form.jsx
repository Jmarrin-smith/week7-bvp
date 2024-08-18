export default function Form(props) {
  return (
    <>
      <h1>form</h1>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name">Name</label>

        <input
          type="text"
          id="name"
          name="name"
          value={props.FormValues.name}
          onChange={props.handleInputChange}
        />

        <label htmlFor="message">message</label>
        <input
          type="message"
          id="message"
          name="message"
          value={props.FormValues.message}
          onChange={props.handleInputChange}
        />

        <p>name: {props.FormValues.name}</p>
        <p>post content: {props.FormValues.message}</p>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
