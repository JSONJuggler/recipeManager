import { useMemo, forwardRef } from "react";
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";

const ListItemLink = (props) => {
  const { icon, linkname, href } = props;

  const CustomChildren = forwardRef(({ href }, ref) => {
    return (
      <ListItem button component="a" href={href} ref={ref}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={linkname} />
      </ListItem>
    );
  });

  return (
    <li>
      <Link href={href} as={process.env.BASE_PATH + href} passHref>
        <CustomChildren />
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
