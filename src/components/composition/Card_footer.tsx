export default function Card_footer(props: any) {
  return (
    <div>
      {props.session == 5 ? (
        <span>Session will end in {props.session} hrs</span>
      ) : (
        <span>Session ended</span>
      )}
    </div>
  );
}
