export default function PostPage(props) {
  return (
    <>
      <h2>posts board</h2>
      {props.messages.map(function (message) {
        return (
          <>
            <div className="message">
              <h3>{message.name}</h3>
              <br />
              <p>{message.message}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
