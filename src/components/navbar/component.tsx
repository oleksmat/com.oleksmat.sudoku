import {PropsWithChildren} from "react";
import {NavLink} from "react-router";
import {Button} from "@/components/button";
import {Spacer} from "@/components/spacer";
import {Stack} from "@/components/stack";
import './styles.css';

type Props = {
  links?: ({
    path?: string;
    click?: () => void;
    disabled?: boolean;
    body?: PropsWithChildren['children'];
  } | 'spacer')[];
};

export function Navbar(props: Props) {
  const links = [];

  if (props.links) {
    for (let i = 0; i < props.links.length; i++) {
      const link = props.links[i];

      if (link === 'spacer') {
        links.push(<Spacer key={i} />);
      } else if (link.path) {
        links.push(<NavLink key={i} to={link.path} onClick={link.click} style={{
          textDecorationLine: 'none'
        }}>
          <Button disabled={link.disabled}>
            {link.body}
          </Button>
        </NavLink>);
      } else {
        links.push(<Button disabled={link.disabled}>
          {link.body}
        </Button>);
      }
    }
  }

  return <nav>
    <Stack>
      {links}
    </Stack>
  </nav>;
}
