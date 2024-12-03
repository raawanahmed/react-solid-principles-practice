// In this example, we modify the Card component every time we add a new type, which violates the Open/Closed Principle.

interface ICardProps {
  title: string;
  content: string;
  type: "info" | "warning" | "success";
}

export function Card({ title, content, type }: ICardProps) {
  let style = "";

  if (type === "info") {
    style = "bg-blue-100 text-blue-800";
  } else if (type === "warning") {
    style = "bg-yellow-100 text-yellow-800";
  } else if (type === "success") {
    style = "bg-green-100 text-green-800";
  }

  return (
    <div className={`p-4 rounded-lg ${style}`}>
      <h3 className="font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export function Bad() {
  return (
    <div className="space-y-4">
      <Card title="Info" content="This is an info card." type="info" />
      <Card title="Warning" content="This is a warning card." type="warning" />
      <Card title="Success" content="This is a success card." type="success" />
    </div>
  );
}