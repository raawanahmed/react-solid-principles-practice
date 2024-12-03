// we refactor the Card component to accept external styles or components, making it extensible without requiring modification.
interface ICardProps {
  title: string;
  content: string;
  className?: string;
}

export function Card({ title, content, className }: ICardProps) {
  return (
    <div className={`p-4 rounded-lg ${className}`}>
      <h3 className="font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  );
}

// Helper functions or objects for styles
const cardStyles = {
  info: "bg-blue-100 text-blue-800",
  warning: "bg-yellow-100 text-yellow-800",
  success: "bg-green-100 text-green-800",
};

export function Good() {
  return (
    <div className="space-y-4">
      <Card
        title="Info"
        content="This is an info card."
        className={cardStyles.info}
      />
      <Card
        title="Warning"
        content="This is a warning card."
        className={cardStyles.warning}
      />
      <Card
        title="Success"
        content="This is a success card."
        className={cardStyles.success}
      />
    </div>
  );
}