import Card_body from "./Card_body";
import Card_footer from "./Card_footer";
import Card_header from "./Card_header";
import Composition_parent from "./Composition_parent";
import "./Main_file.css";
export default function Main_file() {
  return (
    <Composition_parent>
      <Card_header name="chai">
        {/* can access this name using props.name */}
        <h2>User Information</h2>
        <span>Some logo</span>
      </Card_header>
      <Card_body>
        <span>
          <h3 style={{ display: "inline" }}>User Name :</h3> Chaitanya
        </span>
        <span>
          <h3 style={{ display: "inline" }}>User Age :</h3> 25
        </span>
      </Card_body>
      <Card_footer />
    </Composition_parent>
  );
}


