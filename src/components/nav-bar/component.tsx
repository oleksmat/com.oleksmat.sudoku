import {PropsWithChildren} from "react";
import {NavLink} from "react-router";
import {Button} from "@/components/button";
import {Spacer} from "@/components/spacer";
import {Stack} from "@/components/stack";

type Props = {
  links?: ({
    path: string;
    click?: () => void;
    disabled?: boolean;
    body?: PropsWithChildren['children'];
  } | 'spacer')[];
};

export function NavBar(props: Props) {
  return <nav>
    <Stack>
      {
        ...(props.links ?? []).map((link) => {
          if (link === 'spacer') {
            return <Spacer/>;
          } else {
            return <NavLink
              to={link.path}
              onClick={link.click}
              style={{
                textDecorationLine: 'none'
              }}
            >
              <Button disabled={link.disabled}>
                {link.body}
              </Button>
            </NavLink>;
          }
        })
      }
    </Stack>
  </nav>;
}
