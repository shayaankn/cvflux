import { useDraggable } from "@dnd-kit/core";

export default function Card({ card, columnId }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
    data: { columnId },
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="bg-white rounded-md p-3 shadow cursor-grab"
    >
      <h3 className="font-medium">{card.position}</h3>
      <p className="text-sm text-gray-600">{card.company}</p>
      <p className="text-xs text-gray-500">
        {card.location} • {card.workMode}
      </p>
      <p className="text-xs mt-1">{card.salaryRange}</p>
    </div>
  );
}
