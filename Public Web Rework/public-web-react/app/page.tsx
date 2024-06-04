import { Card, Col, Row, Divider, Flex } from "antd";

export default function Home() {
  return (
    <main>
      <header className="py-20">
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
              Not a repeater.
            </Card>
          </Col>
        </Row>
      </Flex>
    </main>
  );
}
