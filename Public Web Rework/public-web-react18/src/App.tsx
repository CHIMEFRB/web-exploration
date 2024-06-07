import { Box, Header, Heading, Text } from "@primer/react";

function App() {
  const localizationData = [
    {
      key: "1",
      parameter: "ra [degrees]",
      value: "98.16±0.21",
    },
    {
      key: "2",
      parameter: "dec [degrees]",
      value: "68.69±0.21",
    },
    {
      key: "3",
      parameter: "gl [degrees]",
      value: "146.19",
    },
    {
      key: "4",
      parameter: "gb [degrees]",
      value: "23.47",
    },
    {
      key: "5",
      parameter: "dm_exc_ne2001 [pc cm-3]",
      value: "263.0",
    },
    {
      key: "6",
      parameter: "dm_exc_ymw16 [pc cm-3]",
      value: "259.0",
    },
    {
      key: "7",
      parameter: "low_ft_68 [Jy ms]",
      value: "32±19",
    },
    {
      key: "8",
      parameter: "exp_up [hour]",
      value: "0",
    },
  ];

  const waterfallData = [
    { key: "1", parameter: "bonsai_snr", value: "24.2" },
    { key: "2", parameter: "bonsai_dm [pc cm-3]", value: "328.4" },
    { key: "3", parameter: "snr_fitb", value: "47.4" },
    { key: "4", parameter: "dm_fitb [pc cm-3]", value: "328.6557±0.0040" },
    { key: "5", parameter: "flux [Jy]", value: "2.5±1.1" },
    { key: "6", parameter: "fluence [Jy ms]", value: "3.2±1.3" },
    { key: "7", parameter: "bc_width [s]", value: "0.00197" },
    { key: "8", parameter: "scat_time [s]", value: "<0.00064" },
    {
      key: "9",
      parameter: "mjd_400 [MJD]",
      value:
        "[5±0, 8±., 4±0, 6±0, 1±0, .±0, 3±0, 9±0, 2±0, 2±0, 6±0, 6±4, 3±4, 3±1, 6±1, 0±1, 1±1]",
    },
    {
      key: "10",
      parameter: "mjd_inf [MJD]",
      value:
        "[5±0, 8±., 4±0, 6±0, 1±0, .±0, 3±0, 9±0, 2±0, 1±0, 6±1, 7±3, 7±1, 8±1, 3±1, 8±1]",
    },
    {
      key: "11",
      parameter: "width_fitb [s]",
      value: "[0±0, .±., 0±0, 0±0, 0±0, 5±0, 9±2, 7±0]",
    },
    { key: "12", parameter: "sp_idx", value: "[0±0, .±., 4±9, 2±5]" },
    { key: "13", parameter: "sp_run", value: "[-±4, 2±., 5±1, .±2, 5±2]" },
    { key: "14", parameter: "peak_freq [MHz]", value: "403.5" },
    { key: "15", parameter: "high_freq [MHz]", value: "544.7" },
    { key: "16", parameter: "low_freq [MHz]", value: "400.2" },
    { key: "17", parameter: "chi_sq", value: "370174.648" },
    { key: "18", parameter: "dof", value: "367226" },
    { key: "19", parameter: "flag_frac", value: "0.41" },
  ];
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
                <Header.Link href="#">Repeaters</Header.Link>
              </Header.Item>
              <Header.Item>
                <Header.Link href="#">Catalog 1</Header.Link>
              </Header.Item>
              <Header.Item>
                <Header.Link href="#">About</Header.Link>
              </Header.Item>
            </Header.Item>
            <Header.Item
              sx={{
                mr: 0,
              }}
            ></Header.Item>
          </Box>
        </Box>
      </Header>
      <Box m={4} sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Heading as="h1" sx={{ m: 4, textAlign: "center", fontSize: 6 }}>
          Event Viewer
        </Heading>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 3,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              p: 4,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "border.default",
              borderRadius: 2,
              minWidth: "250px",
            }}
          >
            <Heading as="h3" sx={{ fontSize: 4, mb: 2 }}>
              Old Name
            </Heading>
            <Text>N/A</Text>
          </Box>
          <Box
            sx={{
              p: 4,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "border.default",
              borderRadius: 2,
              minWidth: "250px",
            }}
          >
            <Heading as="h3" sx={{ fontSize: 4, mb: 2 }}>
              TNS Name
            </Heading>
            <Text>FRB20181209A</Text>
          </Box>
          <Box
            sx={{
              p: 4,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "border.default",
              borderRadius: 2,
              minWidth: "250px",
            }}
          >
            <Heading as="h3" sx={{ fontSize: 4, mb: 2 }}>
              Repeater Name
            </Heading>
            <Text>N/A</Text>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 3,
          textAlign: "center",
          m: 4,
        }}
      >
        <Heading as="h3" sx={{ fontSize: 4, mb: 2 }}>
          Localization, Exposure and Fluence Thresholds
        </Heading>
        <Box
          sx={{
            maxWidth: "400px",
            mx: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="img/localization.png" alt="Localization Plot" />
        </Box>
        <Box
          sx={{
            maxWidth: "400px",
            p: 4,
            mx: "auto",
          }}
        >
          <table
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Parameter
                </th>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {localizationData.map((item) => (
                <tr key={item.key}>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {item.parameter}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
        <Heading as="h3" sx={{ fontSize: 4, mb: 2 }}>
          Burst Properties
        </Heading>
        <Box
          sx={{
            minWidth: "400px",
            mx: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="img/waterfall_hires.png"
            alt="Waterfall plot."
            style={{ maxWidth: "65%" }}
          />
        </Box>
        <Box
          sx={{
            maxWidth: "400px",
            p: 4,
            mx: "auto",
          }}
        >
          <table
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Parameter
                </th>
                <th style={{ border: "1px solid black", padding: "10px" }}>
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {waterfallData.map((item) => (
                <tr key={item.key}>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {item.parameter}
                  </td>
                  <td style={{ border: "1px solid black", padding: "10px" }}>
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Box>
      <Box sx={{ pb: 6, pt: 20, px: 4 }}>
        <Box sx={{ mx: "auto", textAlign: "center" }}>
          <Text sx={{ mt: 5 }}>
            © 2024 CHIME/FRB Collaboration. All Rights Reserved.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default App;
