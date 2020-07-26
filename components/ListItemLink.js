import { useMemo, forwardRef } from "react";
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";

const ListItemLink = (props) => {
  const { icon, linkname, href, as } = props;

  return (
    <li>
      <Link href={href} as={as} passHref>
        <ListItem button component="a" href={href}>
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          <ListItemText primary={linkname} />
        </ListItem>
      </Link>
    </li>
  );
};

ListItemLink.propTypes = {
  icon: PropTypes.element,
  linkname: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ListItemLink;
