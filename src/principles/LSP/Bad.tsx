interface IShapeProps {
  color: string;
}

export function Shape({ color }: IShapeProps) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
      }}
    ></div>
  );
}

// Derived component violating LSP
export function Square() {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "black", 
      }}
    ></div>
  );
}

// Client code
export function Bad() {
  return (
    <div>
      <Shape color="red" /> {/* Displays red square */}
      <Square /> {/* Always displays black square */}
    </div>
  );
}