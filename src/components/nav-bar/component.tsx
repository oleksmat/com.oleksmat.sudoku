import {PropsWithChildren} from "react";
import {Stack} from "@/components/stack";
import {Spacer} from "@/components/spacer";
import {Link} from "react-router";

type Props = {
  links?: ({
    path: string;
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
            return <Link to={link.path}>{link.body}</Link>;
          }
        })
      }
    </Stack>
  </nav>;
}
