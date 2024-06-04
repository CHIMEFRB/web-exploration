import { Card, Col, Row, Divider, Flex, Table } from "antd";
import localizationPlot from "@/assets/img/localization.png";
import waterfallPlot from "@/assets/img/waterfall_hires.png";
import Footer from "@/components/footer";
import Image from "next/image";

import type { TableColumnsType } from "antd";

interface TableDataShape {
  key: React.Key;
  parameter: string;
  value: string;
}

const columns: TableColumnsType<TableDataShape> = [
  {
    title: "Parameter",
    dataIndex: "parameter",
    width: "30%",
  },
  {
    title: "Value",
    dataIndex: "value",
  },
];

const localizationData: TableDataShape[] = [
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

const waterfallData: TableDataShape[] = [
  {
    key: "1",
    parameter: "bonsai_snr",
    value: "24.2",
  },
  {
    key: "2",
    parameter: "bonsai_dm [pc cm−3]",
    value: "328.4",
  },
  {
    key: "3",
    parameter: "snr_fitb",
    value: "47.4",
  },
  {
    key: "4",
    parameter: "dm_fitb [pc cm−3]",
    value: "328.6557±0.0040",
  },
  {
    key: "5",
    parameter: "flux [Jy]",
    value: "2.5±1.1",
  },
  {
    key: "6",
    parameter: "fluence [Jy ms]",
    value: "3.2±1.3",
  },
  {
    key: "7",
    parameter: "bc_width [s]",
    value: "0.00197",
  },
  {
    key: "8",
    parameter: "scat_time [s]",
    value: "<0.00064",
  },
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
  {
    key: "12",
    parameter: "sp_idx",
    value: "[0±0, .±., 4±9, 2±5]",
  },
  {
    key: "13",
    parameter: "sp_run",
    value: "[-±4, 2±., 5±1, .±2, 5±2]",
  },
  {
    key: "14",
    parameter: "peak_freq [MHz]",
    value: "403.5",
  },
  {
    key: "15",
    parameter: "high_freq [MHz]",
    value: "544.7",
  },
  {
    key: "16",
    parameter: "low_freq [MHz]",
    value: "400.2",
  },
  {
    key: "17",
    parameter: "chi_sq",
    value: "370174.648",
  },
  {
    key: "18",
    parameter: "dof",
    value: "367226",
  },
  {
    key: "19",
    parameter: "flag_frac",
    value: "0.41",
  },
];

export default function Home() {
  return (
    <main>
      <header className="pt-20">
        <h1 className="text-6xl tracking-tighter">
          CHIME/
          <span className="font-bold text-red-500 tracking-normal">FRB</span>
        </h1>
        <h3 className="text-2xl pt-4">Fast Radio Bursts in Realtime</h3>
      </header>
      <Divider />
      <Flex align="center" justify="center">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Old Name" bordered style={{ width: 300 }}>
              N/A
            </Card>
          </Col>
          <Col span={8}>
            <Card title="TNS Name" bordered style={{ width: 300 }}>
              FRB20181209A
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Repeater Name" bordered style={{ width: 300 }}>
              Not a repeater
            </Card>
          </Col>
        </Row>
      </Flex>
      <Flex rootClassName="pb-8" align="center" justify="center" vertical>
        <h6 className="text-2xl p-8 font-bold">
          Localization, Exposure & Fluence Thresholds
        </h6>
        <Image src={localizationPlot} alt="Localization Plot" />
      </Flex>
      <div className="flex justify-center align-center mx-auto">
        <div className="w-[700px]">
          <Table
            columns={columns}
            dataSource={localizationData}
            size="middle"
            pagination={false}
            bordered
          />
        </div>
      </div>
      <Flex rootClassName="pb-8" align="center" justify="center" vertical>
        <h6 className="text-2xl p-8 font-bold">Burst Properties</h6>
        <Image
          src={waterfallPlot}
          alt="Waterfall Plot"
          width={700}
          height={700}
        />
      </Flex>
      <div className="flex justify-center align-center mx-auto">
        <div className="w-[700px]">
          <Table
            columns={columns}
            dataSource={waterfallData}
            size="middle"
            pagination={false}
            bordered
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
