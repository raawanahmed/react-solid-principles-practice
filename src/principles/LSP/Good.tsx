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

// Derived component following LSP
export function Square({ color }: IShapeProps) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color, // Uses the color prop
      }}
    ></div>
  );
}

// Client code
export function Good() {
  return (
    <div>
      <Shape color="red" /> {/* Displays red square */}
      <Square color="blue" /> {/* Displays blue square */}
    </div>
  );
}