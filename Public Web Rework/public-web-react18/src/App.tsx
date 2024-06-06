import { BaseStyles, ThemeProvider, Box, Button, Heading } from "@primer/react";

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Box m={4}>
          <Heading as="h2" sx={{ mb: 2 }}>
            CHIME/FRB
          </Heading>
          <p>Fast Radio Bursts in Realtime.</p>
          <Button
            sx={{
              padding: "20px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              ":hover": {
                color: "black",
              },
            }}
          >
            Boop!
          </Button>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
