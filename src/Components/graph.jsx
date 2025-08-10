import { useState } from "react"
import initialLinks from "../data"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';

function GraphComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="cursor-pointer">Graph</button>

      {open && (
        <div style={overlayStyle} onClick={() => setOpen(false)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <div style={headerStyle}>
              <h3 style={{ margin: 0 }}>Link Clicks</h3>
              <button onClick={() => setOpen(false)} style={closeBtnStyle}>×</button>
            </div>
            <LineChart
              width={600}
              height={300}
              data={initialLinks}
              margin={{ top: 20, right: 20, bottom: 20, left: 40 }}
            >
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="clicks" stroke="purple" strokeWidth={2} name="My clicks graph" />
              <XAxis dataKey="id" />
              <YAxis label={{ value: 'CLICKS', position: 'insideLeft', angle: -90 }} />
              <Legend align="right" />
              <Tooltip />
            </LineChart>
          </div>
        </div>
      )}
    </>
  );
}

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000
};

const modalStyle = {
  background: "#fff",
  borderRadius: "8px",
  padding: "16px 20px 28px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  maxWidth: "660px",
  width: "100%"
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "12px"
};

const closeBtnStyle = {
  border: "none",
  background: "transparent",
  fontSize: "24px",
  lineHeight: "1",
  cursor: "pointer"
};

export default GraphComponent
