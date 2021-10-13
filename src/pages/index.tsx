import type { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Page,
  Text,
  Grid,
  Link,
  Spacer,
  Code,
  User,
  Divider,
  Button,
} from "@geist-ui/react";
import { Package, Github } from "@geist-ui/react-icons";

import { Defaults } from "../components/defaults";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Page render="effect-seo">
      <Grid.Container alignItems="center" direction="column">
        <Grid>
          <Page.Header>
            <Grid.Container alignItems="center" direction="column">
              <Grid>
                <Text h2>
                  Welcome to{" "}
                  <NextLink href="https://geist-ui.dev">
                    <Link color>Geist!</Link>
                  </NextLink>
                </Text>
              </Grid>
              <Grid>
                <Text p>
                  Get started by editing <Code>index.tsx</Code>
                </Text>
              </Grid>
            </Grid.Container>
          </Page.Header>
        </Grid>
        <Grid>
          <Page.Content>
            <Defaults />
            <Spacer h={3} />
            <Button
              icon={<Github />}
              onClick={() =>
                router.push("https://github.com/punctuations/geist-template")
              }
            >
              GitHub
            </Button>
          </Page.Content>
        </Grid>
        <Page.Footer>
          <User src="https://github.com/punctuations.png" name="Matt">
            <NextLink href="https://twitter.com/atmattt">
              <User.Link>@atmattt</User.Link>
            </NextLink>
          </User>
          <Spacer h={0.5} />
        </Page.Footer>
      </Grid.Container>
    </Page>
  );
};

export default Home;
