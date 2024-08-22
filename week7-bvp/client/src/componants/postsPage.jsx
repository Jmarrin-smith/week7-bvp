export default function PostPage(props) {
  console.log(props.messages);
  return (
    <>
      <h2>posts board</h2>
      {props.messages.map(function (message) {
        return (
          <>
            <div className="message">
              <h3>{message.msg_name}</h3>
              <br />
              <p>{message.content}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
