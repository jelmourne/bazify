import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { Link } from "react-router-dom";

function NavButton(props: { image: string; url: string }) {
  return (
    <>
      <Link to={props.url}>
        <img
          className="fiter invert-[95%] active:scale-95"
          src={"../" + props.image + ".svg"}
          alt={props.image}
          title={capitalizeFirstLetter(props.image)}
        ></img>
      </Link>
    </>
  );
}

export default NavButton;
