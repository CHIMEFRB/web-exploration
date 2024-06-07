import { Box, Header, Avatar, Heading, Text } from "@primer/react";

function App() {
  return (
    <>
      <Header
        bg="primary"
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Box sx={{ width: "1200px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <Header.Item>
              <Header.Link
                sx={{
                  "&:hover": {
                    color: "#fff35",
                  },
                }}
                href="#"
              >
                <Heading
                  as="h2"
                  sx={{
                    fontWeight: "light",
                    span: {
                      fontWeight: "bold",
                      letterSpacing: "0.1rem",
                    },
                  }}
                >
                  CHIME/
                  <span>FRB</span>
                </Heading>
              </Header.Link>
            </Header.Item>
            <Header.Item
              full
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
                gap: 3,
              }}
            >
              <Header.Item>
                <Header.Link href="#">About</Header.Link>
              </Header.Item>
              <Header.Item>
                <Header.Link href="#">Releases</Header.Link>
              </Header.Item>
              <Header.Item>
                <Header.Link href="#">Team</Header.Link>
              </Header.Item>
            </Header.Item>
            <Header.Item
              sx={{
                mr: 0,
              }}
            >
              <Avatar
                src="https://github.com/octocat.png"
                size={32}
                square
                alt="@octocat"
              />
            </Header.Item>
          </Box>
        </Box>
      </Header>
      <Box m={4} sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Heading as="h2" sx={{ m: 4, textAlign: "center" }}>
          Event Viewer
        </Heading>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              p: 3,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "border.default",
            }}
          >
            1
          </Box>
          <Box
            sx={{
              p: 3,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "border.default",
            }}
          >
            2
          </Box>
          <Box
            sx={{
              p: 3,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "border.default",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
